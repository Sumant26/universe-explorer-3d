/**
 * @file SurfaceLanderView.js
 * First-person planetary surface descent & exploration panorama mode.
 * Renders procedural terrain, horizon atmosphere domes, surface weather hazes,
 * and an interactive soil/ice spectroscopy science kit.
 */

import * as THREE from "three";
import { Actions } from "../state/StateActions.js";

export const SURFACE_PROFILES = {
  mars: {
    name: "Mars: Jezero Crater Surface",
    skyColorTop: 0x8a452a,
    skyColorBottom: 0xd98555,
    fogColor: 0xb5653b,
    groundColor: 0xa84224,
    groundRoughness: 0.9,
    ambientLight: 0xffa07a,
    sunLight: 0xffecd0,
    dustColor: 0xd97d44,
    gravity: 0.38,
    soilElements: [
      { name: "Iron Oxide (Rust)", pct: "43.2%", color: "#d94b26" },
      { name: "Silicon Dioxide", pct: "38.5%", color: "#e8c39e" },
      { name: "Magnesium Perchlorate", pct: "8.4%", color: "#98d8aa" },
      { name: "Hydrated Clays", pct: "9.9%", color: "#5ea3d0" },
    ],
  },
  moon: {
    name: "The Moon: Mare Tranquillitatis",
    skyColorTop: 0x050508,
    skyColorBottom: 0x0a0a14,
    fogColor: 0x080810,
    groundColor: 0x707078,
    groundRoughness: 0.95,
    ambientLight: 0x606070,
    sunLight: 0xffffff,
    dustColor: 0xaaaaaa,
    gravity: 0.166,
    soilElements: [
      { name: "Anorthosite (Plagioclase)", pct: "52.0%", color: "#d6d6d6" },
      { name: "Basaltic Pyroxene", pct: "28.5%", color: "#666666" },
      { name: "Ilmenite (Titanium)", pct: "14.2%", color: "#8a9ba8" },
      { name: "Solar Wind Helium-3", pct: "5.3%", color: "#ffd27a" },
    ],
  },
  europa: {
    name: "Europa: Chaos Conamara Ice Plains",
    skyColorTop: 0x040814,
    skyColorBottom: 0x142844,
    fogColor: 0x10243c,
    groundColor: 0xd6f0ff,
    groundRoughness: 0.25,
    ambientLight: 0x7090b0,
    sunLight: 0xd8eeff,
    dustColor: 0xaae8ff,
    gravity: 0.134,
    soilElements: [
      { name: "Pure Water Ice (H2O)", pct: "74.6%", color: "#62e8ff" },
      { name: "Magnesium Sulfate Salts", pct: "16.8%", color: "#ffffff" },
      { name: "Sulfuric Acid Hydrates", pct: "6.2%", color: "#ffd700" },
      { name: "Subsurface Organic Compounds", pct: "2.4%", color: "#58e890" },
    ],
  },
  titan: {
    name: "Titan: Shangri-La Methane Dunes",
    skyColorTop: 0x4a2a05,
    skyColorBottom: 0xb86c14,
    fogColor: 0x9e580e,
    groundColor: 0x2b1d0f,
    groundRoughness: 0.7,
    ambientLight: 0xc47e30,
    sunLight: 0xdca860,
    dustColor: 0xe08820,
    gravity: 0.14,
    soilElements: [
      { name: "Tholin Hydrocarbon Solids", pct: "58.4%", color: "#9e4812" },
      { name: "Solid Methane & Ethane Ice", pct: "26.3%", color: "#38a3a5" },
      { name: "Water Ice Bedrock", pct: "11.1%", color: "#80ced6" },
      { name: "Hydrogen Cyanide Polymers", pct: "4.2%", color: "#e29578" },
    ],
  },
  enceladus: {
    name: "Enceladus: South Polar Tiger Stripe Geysers",
    skyColorTop: 0x02050f,
    skyColorBottom: 0x0f1c30,
    fogColor: 0x0b1526,
    groundColor: 0xf0faff,
    groundRoughness: 0.15,
    ambientLight: 0x8ab0d0,
    sunLight: 0xedf6fc,
    dustColor: 0xe0f4ff,
    gravity: 0.011,
    soilElements: [
      { name: "Cryovolcanic Water Ice", pct: "82.1%", color: "#b5f5ff" },
      { name: "Sodium Chloride (Sea Salt)", pct: "9.5%", color: "#f8f9fa" },
      { name: "Silica Nanoparticles (Hydrothermal)", pct: "6.2%", color: "#ffd166" },
      { name: "Complex Macromolecular Organics", pct: "2.2%", color: "#06d6a0" },
    ],
  },
};

export class SurfaceLanderView {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   * @param {{ onShowToast?: (msg: string) => void }} options
   */
  constructor(root, store, options = {}) {
    this.root = root;
    this.store = store;
    this.onShowToast = options.onShowToast;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 1.6, 0); // 1.6m eye height above terrain

    this.active = false;
    this.currentTargetId = "mars";
    this.isDrilling = false;

    this.pitch = 0;
    this.yaw = 0;

    this.initDOM();
    this.initScene();

    this.store.subscribe(
      (landerState) => {
        if (landerState.active && !this.active) {
          this.enter(landerState.targetId || "mars");
        } else if (!landerState.active && this.active) {
          this.exit();
        }
      },
      (s) => s.landerState
    );
  }

  initDOM() {
    this.overlayEl = document.createElement("div");
    this.overlayEl.className = "surface-lander-overlay";
    this.overlayEl.hidden = true;
    this.root.appendChild(this.overlayEl);

    this.overlayEl.innerHTML = `
      <div class="surface-hud-header">
        <div class="surface-title-badge">
          <span class="surface-icon">🪐</span>
          <div>
            <h2 id="surface-planet-title">Surface Exploration Probe</h2>
            <div class="surface-coords">LAT: 18.38° N · LON: 77.58° E · ALT: 0.0 m</div>
          </div>
        </div>
        <button class="surface-ascend-btn" id="surface-ascend-btn">🚀 Ascend to Orbit</button>
      </div>

      <div class="surface-science-panel" id="surface-science-panel">
        <div class="science-panel-title">🔬 Surface Soil & Spectrometry Kit</div>
        <div class="science-status" id="science-status">Ready to extract core sample.</div>
        <button class="science-drill-btn" id="science-drill-btn">⚡ Deploy Core Drill</button>
        <div class="soil-breakdown-list" id="soil-breakdown-list" hidden></div>
      </div>
    `;

    this.overlayEl.querySelector("#surface-ascend-btn")?.addEventListener("click", () => {
      this.store.dispatch(Actions.closeLander());
    });

    this.overlayEl.querySelector("#science-drill-btn")?.addEventListener("click", () => {
      this.runSoilAnalysis();
    });

    // Pointer-look pan
    window.addEventListener("mousemove", (e) => {
      if (!this.active) return;
      if (e.buttons === 1 || e.buttons === 2) {
        this.yaw -= e.movementX * 0.0025;
        this.pitch -= e.movementY * 0.0025;
        this.pitch = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, this.pitch));
      }
    });
  }

  initScene() {
    // Ground mesh
    const groundGeom = new THREE.PlaneGeometry(120, 120, 64, 64);
    groundGeom.rotateX(-Math.PI / 2);

    // Apply procedural subtle dune wrinkles
    const pos = groundGeom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y = Math.sin(x * 0.15) * Math.cos(z * 0.15) * 0.45 + Math.sin(x * 0.05 + z * 0.05) * 0.8;
      pos.setY(i, y);
    }
    groundGeom.computeVertexNormals();

    this.groundMat = new THREE.MeshStandardMaterial({
      color: 0xa84224,
      roughness: 0.9,
    });
    this.groundMesh = new THREE.Mesh(groundGeom, this.groundMat);
    this.scene.add(this.groundMesh);

    // Sky Dome
    const skyGeom = new THREE.SphereGeometry(200, 32, 16);
    this.skyMat = new THREE.MeshBasicMaterial({
      color: 0x8a452a,
      side: THREE.BackSide,
    });
    this.skyMesh = new THREE.Mesh(skyGeom, this.skyMat);
    this.scene.add(this.skyMesh);

    // Ambient & Sun light
    this.ambientLight = new THREE.AmbientLight(0xffa07a, 0.8);
    this.sunLight = new THREE.DirectionalLight(0xffecd0, 1.5);
    this.sunLight.position.set(30, 45, 20);
    this.scene.add(this.ambientLight, this.sunLight);

    // Rover lander frame visual elements (in front of camera)
    const landerFrame = new THREE.Group();
    const legMat = new THREE.MeshStandardMaterial({ color: 0xd4a359, metalness: 0.8, roughness: 0.2 });
    const leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.2), legMat);
    leg1.position.set(-0.6, -0.4, -0.7);
    leg1.rotation.set(0.3, 0, -0.4);

    const leg2 = leg1.clone();
    leg2.position.x = 0.6;
    leg2.rotation.z = 0.4;

    const dishMat = new THREE.MeshStandardMaterial({ color: 0xf5f0eb, roughness: 0.4 });
    const dish = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), dishMat);
    dish.position.set(0.5, 0.2, -0.9);
    dish.rotation.x = -0.5;

    landerFrame.add(leg1, leg2, dish);
    this.scene.add(landerFrame);
  }

  enter(targetId) {
    this.active = true;
    this.currentTargetId = targetId;
    this.overlayEl.hidden = false;

    const profile = SURFACE_PROFILES[targetId] || SURFACE_PROFILES.mars;

    const titleEl = this.overlayEl.querySelector("#surface-planet-title");
    if (titleEl) titleEl.textContent = profile.name;

    this.groundMat.color.setHex(profile.groundColor);
    this.groundMat.roughness = profile.groundRoughness;
    this.skyMat.color.setHex(profile.skyColorTop);
    this.ambientLight.color.setHex(profile.ambientLight);
    this.sunLight.color.setHex(profile.sunLight);

    this.scene.fog = new THREE.FogExp2(profile.fogColor, 0.015);

    const listEl = this.overlayEl.querySelector("#soil-breakdown-list");
    if (listEl) listEl.hidden = true;
    const statusEl = this.overlayEl.querySelector("#science-status");
    if (statusEl) statusEl.textContent = "Ready to extract core sample.";
  }

  exit() {
    this.active = false;
    this.overlayEl.hidden = true;
  }

  runSoilAnalysis() {
    if (this.isDrilling) return;
    this.isDrilling = true;

    const statusEl = this.overlayEl.querySelector("#science-status");
    const listEl = this.overlayEl.querySelector("#soil-breakdown-list");
    const drillBtn = this.overlayEl.querySelector("#science-drill-btn");

    if (drillBtn) drillBtn.textContent = "⚙️ Drilling Core...";
    if (statusEl) statusEl.textContent = "Drilling surface core (depth: 25 cm)...";

    setTimeout(() => {
      this.isDrilling = false;
      if (drillBtn) drillBtn.textContent = "⚡ Re-analyze Sample";
      if (statusEl) statusEl.textContent = "✅ Spectroscopy analysis completed:";

      const profile = SURFACE_PROFILES[this.currentTargetId] || SURFACE_PROFILES.mars;
      if (listEl) {
        listEl.hidden = false;
        listEl.innerHTML = profile.soilElements
          .map(
            (el) => `
          <div class="soil-element-row">
            <span class="soil-dot" style="background: ${el.color}"></span>
            <span class="soil-name">${el.name}</span>
            <span class="soil-pct">${el.pct}</span>
          </div>
        `
          )
          .join("");
      }

      this.onShowToast?.(`🔬 Soil sample analyzed for ${profile.name}`);
    }, 1200);
  }

  update(dt, renderer) {
    if (!this.active) return;

    // Apply look rotation to camera
    const euler = new THREE.Euler(this.pitch, this.yaw, 0, "YXZ");
    this.camera.quaternion.setFromEuler(euler);

    renderer.render(this.scene, this.camera);
  }
}
