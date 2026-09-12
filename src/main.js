/**
 * @file main.js
 * Application entry point & bootstrap. Wires the engine, scene contents,
 * flight systems, audio, and UI together, and is the single place that
 * turns startup failures into a friendly on-screen message instead of a
 * blank page.
 */

import * as THREE from "three";
import { Engine, hasWebGLSupport } from "./core/Engine.js";
import { createPostProcessing } from "./core/PostProcessing.js";
import { Store } from "./state/Store.js";
import { Actions, FlightMode, CameraMode, FlightStatus } from "./state/StateActions.js";
import { CELESTIAL_BODIES, getCelestialBodyById, validateCelestialData } from "./celestial/CelestialData.js";
import { SATELLITES, getSatelliteById, validateSatelliteData } from "./celestial/SatelliteData.js";
import { buildCelestialObject, buildSatelliteMarker, buildStarfield } from "./celestial/CelestialFactory.js";
import { resolveScenePositions, resolveSatellitePositions } from "./celestial/PositionResolver.js";
import { buildSpaceship } from "./spaceship/Cockpit.js";
import { FlightCamera } from "./spaceship/FlightCamera.js";
import { WarpController } from "./spaceship/WarpController.js";
import { ManualNavigator } from "./spaceship/ManualNavigator.js";
import { resolveCelestialCollisions } from "./spaceship/FlightPhysics.js";
import { SoundSynthesizer } from "./audio/SoundSynthesizer.js";
import { NavigationSearch } from "./ui/NavigationSearch.js";
import { DetailPanel } from "./ui/DetailPanel.js";
import { HabitabilityMatrix } from "./ui/HabitabilityMatrix.js";
import { SatelliteList } from "./ui/SatelliteList.js";
import { CompassArrow } from "./ui/CompassArrow.js";
import { ViewSwitcher } from "./ui/ViewSwitcher.js";
import { TelemetryHUD } from "./ui/TelemetryHUD.js";
import { RadarCanvas } from "./ui/RadarCanvas.js";
import { initHUDController } from "./ui/HUDController.js";

bootstrap().catch((err) => showFatalError(err));

async function bootstrap() {
  setBootMessage("Checking your ship’s systems…", 10);

  if (!hasWebGLSupport()) {
    throw new Error(
      "This browser can’t display 3D graphics (WebGL). Please try a recent version of Chrome, Firefox, Edge, or Safari."
    );
  }

  const dataIssues = [...validateCelestialData().errors, ...validateSatelliteData().errors];
  if (dataIssues.length > 0) {
    console.error("[main] Celestial data validation failed:", dataIssues);
    throw new Error("The universe database failed to load correctly. Please refresh the page.");
  }

  setBootMessage("Assembling the cabin…", 30);

  const canvas = document.getElementById("scene-canvas");
  const store = new Store();

  const engine = new Engine({
    canvas,
    onContextLost: (reason) => showToast(`Graphics paused: ${reason} Trying to recover…`),
    onContextRestored: () => showToast("Graphics restored."),
  });

  const post = createPostProcessing(engine.renderer, engine.scene, engine.camera);
  engine.onResize((w, h) => post.resize(w, h));

  setBootMessage("Scattering stars across the sky…", 50);
  engine.scene.add(buildStarfield());
  engine.scene.add(new THREE.AmbientLight(0x3a3050, 0.6));

  const { celestialGroups, satelliteGroups } = buildUniverse(engine);

  setBootMessage("Warming up the engines…", 75);
  const { ship, update: updateShip } = buildSpaceship();
  engine.scene.add(ship);
  const earthPos = celestialGroups.get("earth")?.position ?? new THREE.Vector3();
  // Spawn in comfortable Earth orbit facing directly outward into deep space
  ship.position.copy(earthPos).add(new THREE.Vector3(0, 0.25, 2.5));
  ship.userData.forward = new THREE.Vector3(0, 0, 1);
  ship.userData.velocity = { x: 0, y: 0, z: 0 };

  const flightCamera = new FlightCamera(engine.camera, ship);
  const warpController = new WarpController({ scene: engine.scene, ship, store });
  const manualNavigator = new ManualNavigator();
  const audio = new SoundSynthesizer();

  setBootMessage("Opening the star charts…", 90);
  const ui = mountUI(store, {
    onSearchSelect: (result) => handleTargetSelected(result.id, result.kind),
    onSatelliteSelect: (id) => handleTargetSelected(id, "satellite"),
    onToggleHyperdrive: () => {
      const locked = manualNavigator.toggleHyperdriveLock();
      showToast(locked ? "Hyperdrive Locked ON" : "Hyperdrive Disengaged");
    },
    onZoomIn: () => flightCamera.adjustZoom(-0.2),
    onZoomOut: () => flightCamera.adjustZoom(0.2),
  });

  const viewSwitcherEl = document.getElementById("view-switcher-root");
  const viewSwitcher = new ViewSwitcher(viewSwitcherEl, store);

  initHUDController({
    store,
    viewSwitcher,
    audio,
    onEngageWarp: () => engageAutopilotIfReady(),
  });

  wireInputAndAudio(engine, ship, manualNavigator, audio, flightCamera, store);

  function handleTargetSelected(id, kind) {
    const targetGroup = kind === "satellite" ? satelliteGroups.get(id) : celestialGroups.get(id);
    const position = targetGroup?.position;
    if (!position) {
      showToast("That object isn’t available to fly to right now.");
      return;
    }
    const safeRadius = targetGroup?.userData?.safeRadius ?? 1.0;
    store.dispatch(Actions.setTarget(id));
    store.dispatch(Actions.selectObject(id));
    audio.playChirp();

    if (store.getState().flightMode === FlightMode.MANUAL) {
      manualNavigator.setTarget(position);
      showToast("Follow the arrow to reach your destination.");
    } else {
      warpController.beginJump(ship.position, position, distanceForId(id, kind), () => onArrival(id), safeRadius);
    }
  }

  function engageAutopilotIfReady() {
    const state = store.getState();
    if (!state.targetObject) return;
    if (state.flightMode !== FlightMode.AUTOPILOT) return;
    if (warpController.isActive) return;
    const targetGroup = celestialGroups.get(state.targetObject) ?? satelliteGroups.get(state.targetObject);
    const position = targetGroup?.position;
    if (!position) return;
    const safeRadius = targetGroup?.userData?.safeRadius ?? 1.0;
    warpController.beginJump(
      ship.position,
      position,
      distanceForId(state.targetObject, undefined),
      () => onArrival(state.targetObject),
      safeRadius
    );
  }

  function distanceForId(id, kind) {
    if (kind === "satellite") return getSatelliteById(id)?.distanceFromEarthKm ?? 0;
    const body = getCelestialBodyById(id);
    if (body) return body.distanceFromEarthKm;
    return getSatelliteById(id)?.distanceFromEarthKm ?? 0;
  }

  function onArrival(id) {
    showToast("Arrived! Here’s what we found.");
    audio.playChirp();
    ui.detailPanel.show(id);
    manualNavigator.setTarget(null);
  }

  engine.onTick((dt, elapsed) => {
    updateOrbits(elapsed, celestialGroups, satelliteGroups);
    warpController.update(dt, elapsed);

    let currentInput = { thrust: 0, yaw: 0, pitch: 0, strafe: 0, boost: false };
    let isBoosting;
    let speedFraction;

    const isWarping = warpController.isActive;

    if (!isWarping) {
      // Step manual flight simulation with celestial collision protection
      const flightResult = stepManualFlight(dt, ship, manualNavigator, store, ui, onArrival, celestialGroups);
      if (flightResult && flightResult.input) {
        currentInput = flightResult.input;
      }
      isBoosting = Boolean(currentInput.boost);
      const speed = Math.sqrt(
        ship.userData.velocity.x ** 2 + ship.userData.velocity.y ** 2 + ship.userData.velocity.z ** 2
      );
      speedFraction = isBoosting ? speed / 180 : speed / 24;
      ui.telemetry.updateDriveMode(isBoosting);
    } else {
      speedFraction = store.getState().flightTelemetry.currentSpeedC;
      isBoosting = true;
      ui.telemetry.updateDriveMode(true);
    }

    // Update 3D ship animations (interior/exterior visibility, plumes, stick tilt, holo-globe)
    updateShip(dt, speedFraction, isBoosting, currentInput, store.getState().cameraMode);

    flightCamera.setMode(store.getState().cameraMode);
    flightCamera.update(dt, isBoosting, speedFraction);
    document
      .getElementById("cockpit-overlay")
      ?.classList.toggle("cockpit-active", store.getState().cameraMode === CameraMode.COCKPIT);

    const engineSpeedLevel = isWarping
      ? store.getState().flightTelemetry.currentSpeedC
      : isBoosting
        ? Math.min(speedFraction * 1.5, 1)
        : speedFraction * 0.5;
    audio.setEngineIntensity(engineSpeedLevel);

    updateRadar(ui.radar, ship, celestialGroups, satelliteGroups);

    if (post.composer) post.render(dt);
    else engine.renderer.render(engine.scene, engine.camera);
  });

  window.addEventListener("error", (event) => {
    console.error("[main] Uncaught error:", event.error ?? event.message);
    showToast("Something hiccuped, but the flight continues.");
  });
  window.addEventListener("unhandledrejection", (event) => {
    console.error("[main] Unhandled rejection:", event.reason);
    showToast("Something hiccuped, but the flight continues.");
  });

  setBootMessage("Ready for launch.", 100);
  await sleep(250);
  hideBootScreen();
  engine.start();
}

/** @private builds every celestial body & satellite as scene objects and returns position groups. */
function buildUniverse(engine) {
  const positions = resolveScenePositions(CELESTIAL_BODIES, 0);
  const celestialGroups = new Map();
  for (const body of CELESTIAL_BODIES) {
    const group = buildCelestialObject(body);
    const pos = positions.get(body.id);
    group.position.set(pos.x, pos.y, pos.z);
    engine.scene.add(group);
    celestialGroups.set(body.id, group);
  }

  const satellitePositions = resolveSatellitePositions(SATELLITES, positions);
  const satelliteGroups = new Map();
  for (const satellite of SATELLITES) {
    const group = buildSatelliteMarker(satellite);
    const pos = satellitePositions.get(satellite.id);
    group.position.set(pos.x, pos.y, pos.z);
    engine.scene.add(group);
    satelliteGroups.set(satellite.id, group);
  }

  return { celestialGroups, satelliteGroups };
}

/** @private re-runs orbital motion each frame and animates shader time uniforms. */
function updateOrbits(elapsedSeconds, celestialGroups, satelliteGroups) {
  const positions = resolveScenePositions(CELESTIAL_BODIES, elapsedSeconds * 20000);
  for (const [id, group] of celestialGroups) {
    const pos = positions.get(id);
    if (pos) group.position.set(pos.x, pos.y, pos.z);

    // Rotate Earth's clouds and subtle planetary axial rotation
    const clouds = group.getObjectByName("clouds:earth");
    if (clouds) {
      clouds.rotation.y = elapsedSeconds * 0.06;
    }
    const surface = group.getObjectByName(`surface:${id}`);
    if (surface) {
      surface.rotation.y = elapsedSeconds * 0.02;
    }

    group.traverse((child) => {
      const uniforms = child.material?.uniforms;
      if (uniforms?.uTime) uniforms.uTime.value = elapsedSeconds;
    });
  }
  const satellitePositions = resolveSatellitePositions(SATELLITES, positions);
  for (const [id, group] of satelliteGroups) {
    const pos = satellitePositions.get(id);
    if (pos) group.position.set(pos.x, pos.y, pos.z);
  }
}

/** @private advances manual flight and drives the compass + arrival check. */
function stepManualFlight(dt, ship, manualNavigator, store, ui, onArrival, celestialGroups) {
  const currentState = {
    position: { x: ship.position.x, y: ship.position.y, z: ship.position.z },
    velocity: ship.userData.velocity ?? { x: 0, y: 0, z: 0 },
    forward: { x: ship.userData.forward.x, y: ship.userData.forward.y, z: ship.userData.forward.z },
    bankAngle: ship.userData.bankAngle ?? 0,
  };
  const { state, bearing, input } = manualNavigator.step(currentState, dt);

  // Proximity collision safety resolution against celestial bodies
  if (celestialGroups) {
    const obstacles = [];
    for (const group of celestialGroups.values()) {
      if (group?.position && group.userData?.safeRadius) {
        obstacles.push({
          position: { x: group.position.x, y: group.position.y, z: group.position.z },
          safeRadius: group.userData.safeRadius,
        });
      }
    }
    const collision = resolveCelestialCollisions(state.position, state.velocity, obstacles);
    state.position = collision.position;
    state.velocity = collision.velocity;
  }

  ship.position.set(state.position.x, state.position.y, state.position.z);
  ship.userData.velocity = state.velocity;
  ship.userData.forward.set(state.forward.x, state.forward.y, state.forward.z);
  ship.userData.bankAngle = state.bankAngle;

  // Look along forward heading, then apply roll banking
  const lookTarget = ship.position.clone().add(ship.userData.forward);
  ship.lookAt(lookTarget);
  if (state.bankAngle) {
    ship.rotateZ(state.bankAngle);
  }

  ui.compass.update(bearing);

  const speed = Math.sqrt(state.velocity.x ** 2 + state.velocity.y ** 2 + state.velocity.z ** 2);
  const currentSpeedC = input.boost ? (speed / 180) * 0.95 : (speed / 18) * 0.05;

  let distanceKm = 0;
  let etaSeconds = 0;
  if (bearing) {
    distanceKm = bearing.distance * 100000;
    if (speed > 0.01) {
      etaSeconds = bearing.distance / speed;
    }
  }

  store.dispatch(
    Actions.updateTelemetry({
      currentSpeedC,
      distanceRemainingKm: distanceKm,
      etaSeconds,
    })
  );

  if (bearing?.arrived) {
    const targetId = store.getState().targetObject;
    store.dispatch(Actions.setFlightStatus(FlightStatus.ARRIVED));
    if (targetId) onArrival(targetId);
  }

  return { state, bearing, input };
}

/** @private */
function updateRadar(radar, ship, celestialGroups, satelliteGroups) {
  const blips = [];
  for (const group of celestialGroups.values()) {
    blips.push({ x: group.position.x, z: group.position.z, color: "#ffd27a" });
  }
  for (const group of satelliteGroups.values()) {
    blips.push({ x: group.position.x, z: group.position.z, color: "#9ee6ff" });
  }
  const forward = ship.userData.forward ?? new THREE.Vector3(0, 0, -1);
  const heading = Math.atan2(forward.x, forward.z);
  radar.render({ x: ship.position.x, z: ship.position.z }, heading, blips);
}

/** @private mounts every DOM-facing UI widget and returns handles for the main loop. */
function mountUI(store, { onSearchSelect, onSatelliteSelect, onToggleHyperdrive, onZoomIn, onZoomOut }) {
  const searchRoot = document.getElementById("nav-search-root");
  const detailRoot = document.getElementById("detail-panel-root");
  const satelliteRoot = document.getElementById("satellite-list-root");
  const telemetryRoot = document.getElementById("telemetry-root");
  const compassRoot = document.getElementById("compass-root");
  const radarRoot = document.getElementById("radar-root");

  const habitabilityRoot = document.getElementById("habitability-matrix-root");

  const search = new NavigationSearch(searchRoot, store, { onSelect: onSearchSelect });
  const detailPanel = new DetailPanel(detailRoot, store);
  const habitabilityMatrix = new HabitabilityMatrix(habitabilityRoot, store);
  const satelliteList = new SatelliteList(satelliteRoot, store, { onSelect: onSatelliteSelect });
  const compass = new CompassArrow(compassRoot, store);
  const telemetry = new TelemetryHUD(telemetryRoot, store, { onToggleHyperdrive, onZoomIn, onZoomOut });
  const radar = new RadarCanvas(radarRoot);

  // Toggle the satellite list open by default is left to the user; expose a
  // simple affordance via double-clicking the search box mode toggle area
  // is out of scope — instead, open it once on first load so it's discoverable.
  store.dispatch(Actions.toggleSatelliteList(true));

  return { search, detailPanel, habitabilityMatrix, satelliteList, compass, telemetry, radar };
}

/** @private keyboard/mouse input plumbing + first-gesture audio unlock. */
function wireInputAndAudio(engine, ship, manualNavigator, audio, flightCamera, store) {
  const unlockAudio = () => {
    audio.init();
    window.removeEventListener("pointerdown", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
  };
  window.addEventListener("pointerdown", unlockAudio);
  window.addEventListener("keydown", unlockAudio);

  window.addEventListener("keydown", (e) => {
    const isTyping = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
    if (isTyping) return;

    if (e.code === "Equal" || e.code === "NumpadAdd" || e.code === "PageUp") {
      flightCamera.adjustZoom(-0.15);
    } else if (e.code === "Minus" || e.code === "NumpadSubtract" || e.code === "PageDown") {
      flightCamera.adjustZoom(0.15);
    }
    manualNavigator.handleKeyDown(e);
  });
  window.addEventListener("keyup", (e) => manualNavigator.handleKeyUp(e));
  window.addEventListener("blur", () => manualNavigator.resetInput());

  window.addEventListener(
    "wheel",
    (e) => {
      const delta = Math.sign(e.deltaY) * 0.12;
      flightCamera.adjustZoom(delta);
    },
    { passive: true }
  );

  window.addEventListener("pointermove", (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;
    flightCamera.setMouseParallax(nx, -ny);
  });

  void engine;
  void ship;
  void store;
}

function setBootMessage(message, percent) {
  const msgEl = document.getElementById("boot-message");
  const barEl = document.getElementById("boot-bar-fill");
  if (msgEl) msgEl.textContent = message;
  if (barEl) barEl.style.width = `${Math.min(Math.max(percent, 0), 100)}%`;
}

function hideBootScreen() {
  const boot = document.getElementById("boot-screen");
  if (!boot) return;
  boot.classList.add("fade-out");
  setTimeout(() => boot.remove(), 700);
}

function showFatalError(err) {
  console.error("[main] Fatal startup error:", err);
  hideBootScreen();
  const fatal = document.getElementById("fatal-error");
  const message = document.getElementById("fatal-error-message");
  if (message) message.textContent = err?.message ?? "An unexpected error occurred.";
  if (fatal) {
    fatal.hidden = false;
    fatal.querySelector("#fatal-error-retry")?.addEventListener("click", () => window.location.reload());
  }
}

function showToast(message) {
  const root = document.getElementById("toast-root");
  if (!root) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  root.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
