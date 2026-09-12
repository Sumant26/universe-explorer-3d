/**
 * @file Cockpit.js
 * Builds the Cozy Cosmos Cabin Spaceship:
 * - A compact, cute, rounded space cabin pod inspired by slow, peaceful interstellar drift.
 * - Soft warm porcelain cream, terracotta & bronze palette with glowing amber portholes.
 * - Warm cozy cabin interior featuring a vintage brass reading lamp, ceramic coffee mug,
 *   warm timber dashboard with glowing analog dials, rotating mini star globe, and tiltable flight stick.
 */

import * as THREE from 'three';
import { CameraMode } from '../state/StateActions.js';

const COZY_PALETTE = {
  porcelainCream: 0xf6efe4,
  terracotta: 0xd97d44,
  warmWood: 0x3d281d,
  darkBronze: 0x2b2520,
  vintageBrass: 0xd4a359,
  seatFabric: 0x544037,
  canopyGlass: 0xbfe3ff,
  glowAmberWarm: 0xffb854,
  glowLantern: 0xffdfaa,
  glowCyan: 0x62e8ff,
  glowGreen: 0x58e890,
  coffeeBrown: 0x3a1e0c
};

/**
 * @returns {{
 *   ship: THREE.Group,
 *   cockpitInterior: THREE.Group,
 *   exterior: THREE.Group,
 *   pilot: THREE.Group,
 *   thrusterGlow: THREE.PointLight,
 *   thrusterPlumes: THREE.Mesh[],
 *   flightStick: THREE.Group,
 *   holoGlobe: THREE.Group,
 *   update: (dt: number, speedFraction: number, isBoost: boolean, input: any, cameraMode: string) => void
 * }}
 */
export function buildSpaceship() {
  const ship = new THREE.Group();
  ship.name = 'spaceship';
  ship.scale.setScalar(0.24);

  const exterior = buildCozyExterior();
  const cockpitInterior = buildCozyCockpitInterior();
  const pilot = buildCozyPilot();
  pilot.position.set(0, -0.22, 0.28);
  cockpitInterior.add(pilot);

  const thrusterGlow = new THREE.PointLight(COZY_PALETTE.glowAmberWarm, 1.2, 5, 2);
  thrusterGlow.position.set(0, 0, 1.1);

  // Twin cute rounded exhaust plume meshes
  const plumeMat = new THREE.MeshBasicMaterial({
    color: COZY_PALETTE.glowAmberWarm,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });
  const plumeGeom = new THREE.ConeGeometry(0.1, 0.65, 16);
  plumeGeom.rotateX(-Math.PI / 2);
  plumeGeom.translate(0, 0, 0.32);

  const leftPlume = new THREE.Mesh(plumeGeom, plumeMat);
  leftPlume.position.set(-0.32, 0.01, 0.85);

  const rightPlume = leftPlume.clone();
  rightPlume.position.x = 0.32;

  // Reverse thrusters (forward-firing retro plumes when pressing S)
  const retroPlumeMat = new THREE.MeshBasicMaterial({
    color: COZY_PALETTE.glowCyan,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });
  const retroPlumeGeom = new THREE.ConeGeometry(0.06, 0.35, 12);
  retroPlumeGeom.rotateX(Math.PI / 2);
  retroPlumeGeom.translate(0, 0, -0.18);

  const leftRetro = new THREE.Mesh(retroPlumeGeom, retroPlumeMat);
  leftRetro.position.set(-0.25, -0.05, -0.45);
  const rightRetro = leftRetro.clone();
  rightRetro.position.x = 0.25;

  exterior.add(leftPlume, rightPlume, leftRetro, rightRetro);
  const thrusterPlumes = [leftPlume, rightPlume];
  const retroPlumes = [leftRetro, rightRetro];

  // Cosmic star-dust speed particles in front of the cockpit canopy
  const dustCount = 120;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPositions[i * 3] = (Math.random() - 0.5) * 2.2;
    dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 1.4 + 0.15;
    dustPositions[i * 3 + 2] = -0.2 - Math.random() * 3.2;
  }
  const dustGeom = new THREE.BufferGeometry();
  dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  const dustMat = new THREE.PointsMaterial({
    color: 0xffeedd,
    size: 0.045,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });
  const dustParticles = new THREE.Points(dustGeom, dustMat);
  dustParticles.name = 'speed-dust';
  ship.add(dustParticles);

  ship.add(exterior, cockpitInterior, thrusterGlow);

  const flightStick = cockpitInterior.getObjectByName('flight-stick');
  const holoGlobe = cockpitInterior.getObjectByName('holo-globe');
  const horizonNeedle = cockpitInterior.getObjectByName('horizon-needle');
  const speedNeedle = cockpitInterior.getObjectByName('speed-needle');
  const steamPuffs = cockpitInterior.getObjectByName('coffee-steam')?.children ?? [];
  const exteriorCanopy = exterior.getObjectByName('exterior-canopy');
  const exteriorPortholes = exterior.getObjectByName('exterior-portholes');

  /**
   * Updates dynamic animations & camera mode visibility each tick.
   */
  function update(dt, speedFraction, isBoost, input, cameraMode) {
    const isCockpit = cameraMode === CameraMode.COCKPIT;

    // In cockpit mode, hide outer hull / canopy parts that obstruct first-person view
    if (exteriorCanopy) exteriorCanopy.visible = !isCockpit;
    if (exteriorPortholes) exteriorPortholes.visible = !isCockpit;
    pilot.visible = !isCockpit;

    // Animate rotating mini holo-globe on the wooden dash
    if (holoGlobe) {
      holoGlobe.rotation.y += dt * 0.7;
      holoGlobe.rotation.x = Math.sin(Date.now() * 0.001) * 0.12;
    }

    // Animate flight stick tilting with WASD steering
    if (flightStick && input) {
      const targetRotZ = -(input.yaw ?? 0) * 0.32 + (input.strafe ?? 0) * 0.18;
      const targetRotX = -(input.pitch ?? 0) * 0.28 - (input.thrust ?? 0) * 0.18;
      flightStick.rotation.z += (targetRotZ - flightStick.rotation.z) * Math.min(dt * 12, 1);
      flightStick.rotation.x += (targetRotX - flightStick.rotation.x) * Math.min(dt * 12, 1);
    }

    // Animate artificial horizon and speed needle dials
    if (horizonNeedle && input) {
      horizonNeedle.rotation.z = -(input.yaw ?? 0) * 0.5;
      horizonNeedle.position.y = (input.pitch ?? 0) * 0.02;
    }
    if (speedNeedle) {
      speedNeedle.rotation.z = -speedFraction * Math.PI * 1.5;
    }

    // Animate steaming coffee vapor puffs
    const now = Date.now() * 0.002;
    for (let i = 0; i < steamPuffs.length; i++) {
      const puff = steamPuffs[i];
      const phase = (now + i * 0.4) % 1.0;
      puff.position.y = 0.06 + phase * 0.09;
      puff.position.x = Math.sin(now * 2 + i) * 0.008;
      puff.scale.setScalar(0.5 + phase * 1.2);
      if (puff.material) {
        puff.material.opacity = (1.0 - phase) * 0.45;
      }
    }

    // Cosmic star-dust particles motion (streams past when flying forward/backward)
    const thrustDirection = (input?.thrust ?? 0);
    const flightSpeed = Math.max(speedFraction, Math.abs(thrustDirection));
    const dustSpeed = (thrustDirection !== 0 ? thrustDirection : (speedFraction > 0.05 ? 1 : 0.05)) * (flightSpeed * 8 + 0.5) * dt;

    const posAttr = dustGeom.attributes.position;
    const array = posAttr.array;
    for (let i = 0; i < dustCount; i++) {
      let z = array[i * 3 + 2] + dustSpeed;
      if (z > 0.3) {
        z = -3.4 - Math.random() * 0.5;
        array[i * 3] = (Math.random() - 0.5) * 2.2;
        array[i * 3 + 1] = (Math.random() - 0.5) * 1.4 + 0.15;
      } else if (z < -3.9) {
        z = 0.2 + Math.random() * 0.1;
      }
      array[i * 3 + 2] = z;
    }
    posAttr.needsUpdate = true;
    dustMat.opacity = isCockpit ? 0.85 : 0.45;

    // Soft plume stretching with forward thrust (W key)
    const forwardThrust = Math.max(input?.thrust ?? 0, speedFraction);
    const plumeScaleZ = 0.3 + forwardThrust * (isBoost ? 2.5 : 1.2);
    const plumeScaleXY = 0.5 + forwardThrust * (isBoost ? 1.2 : 0.6);
    const plumeColor = isBoost ? COZY_PALETTE.glowCyan : COZY_PALETTE.glowAmberWarm;

    plumeMat.color.setHex(plumeColor);
    thrusterGlow.color.setHex(plumeColor);
    thrusterGlow.intensity = 0.8 + forwardThrust * (isBoost ? 3.5 : 1.6);

    for (const plume of thrusterPlumes) {
      plume.scale.set(plumeScaleXY, plumeScaleXY, plumeScaleZ);
      plume.visible = forwardThrust > 0.02;
    }

    // Reverse retro plumes when pressing S (negative thrust)
    const reverseThrust = Math.max(-(input?.thrust ?? 0), 0);
    for (const retro of retroPlumes) {
      retro.scale.set(0.5 + reverseThrust * 1.5, 0.5 + reverseThrust * 1.5, 0.4 + reverseThrust * 2.0);
      retro.visible = reverseThrust > 0.05;
    }
  }

  return {
    ship,
    cockpitInterior,
    exterior,
    pilot,
    thrusterGlow,
    thrusterPlumes,
    flightStick,
    holoGlobe,
    update
  };
}

/** Builds the compact, cute, cozy exploration pod exterior. */
function buildCozyExterior() {
  const group = new THREE.Group();
  group.name = 'ship-exterior';

  const creamMat = new THREE.MeshStandardMaterial({
    color: COZY_PALETTE.porcelainCream,
    metalness: 0.15,
    roughness: 0.45
  });
  const terracottaMat = new THREE.MeshStandardMaterial({
    color: COZY_PALETTE.terracotta,
    metalness: 0.2,
    roughness: 0.5
  });
  const bronzeMat = new THREE.MeshStandardMaterial({
    color: COZY_PALETTE.darkBronze,
    metalness: 0.6,
    roughness: 0.35
  });

  // 1. Cozy Rounded Main Cabin Pod (soft organic shape)
  const podGeom = new THREE.SphereGeometry(0.48, 24, 20);
  podGeom.scale(1.0, 0.78, 1.45);
  const mainPod = new THREE.Mesh(podGeom, creamMat);
  mainPod.position.set(0, 0, 0);

  // 2. Terracotta Belly Keel & Nose Cap
  const noseCapGeom = new THREE.SphereGeometry(0.34, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  noseCapGeom.rotateX(-Math.PI / 2);
  noseCapGeom.scale(1.0, 0.72, 1.0);
  const noseCap = new THREE.Mesh(noseCapGeom, terracottaMat);
  noseCap.position.set(0, -0.01, -0.58);

  const bellyPlate = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.08, 0.9), terracottaMat);
  bellyPlate.position.set(0, -0.28, 0.05);

  // 3. Panoramic Bubble Windshield Canopy
  const canopyMat = new THREE.MeshPhysicalMaterial({
    color: COZY_PALETTE.canopyGlass,
    transparent: true,
    opacity: 0.5,
    roughness: 0.08,
    metalness: 0.1,
    transmission: 0.65,
    thickness: 0.2,
    reflectivity: 0.85
  });
  const canopyGeom = new THREE.SphereGeometry(0.38, 20, 16, 0, Math.PI * 2, 0, Math.PI / 1.8);
  const canopy = new THREE.Mesh(canopyGeom, canopyMat);
  canopy.name = 'exterior-canopy';
  canopy.position.set(0, 0.12, -0.18);
  canopy.scale.set(0.9, 0.75, 1.15);
  canopy.rotation.x = Math.PI;

  // 4. Glowing Porthole Windows on Left & Right Sides (warm amber cozy windows)
  const portholesGroup = new THREE.Group();
  portholesGroup.name = 'exterior-portholes';

  const portholeMat = new THREE.MeshBasicMaterial({ color: COZY_PALETTE.glowAmberWarm });
  const portholeRingMat = new THREE.MeshStandardMaterial({ color: COZY_PALETTE.vintageBrass, metalness: 0.7, roughness: 0.3 });

  for (const side of [-1, 1]) {
    for (let i = 0; i < 2; i++) {
      const pRing = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.012, 8, 16), portholeRingMat);
      pRing.position.set(side * 0.44, 0.02, 0.1 + i * 0.28);
      pRing.rotation.y = side * Math.PI / 2;

      const pGlass = new THREE.Mesh(new THREE.CircleGeometry(0.055, 16), portholeMat);
      pGlass.position.set(side * 0.441, 0.02, 0.1 + i * 0.28);
      pGlass.rotation.y = side * Math.PI / 2;

      portholesGroup.add(pRing, pGlass);
    }
  }

  // 5. Cute Rounded Wings with Soft Curves
  const wingShape = new THREE.Shape();
  wingShape.moveTo(0, 0);
  wingShape.lineTo(-0.85, 0.4);
  wingShape.lineTo(-0.8, 0.75);
  wingShape.lineTo(-0.15, 0.55);
  wingShape.lineTo(0, 0.45);

  const wingExtrude = { depth: 0.03, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.015, bevelThickness: 0.015 };
  const wingGeom = new THREE.ExtrudeGeometry(wingShape, wingExtrude);
  wingGeom.rotateX(Math.PI / 2);

  const leftWing = new THREE.Mesh(wingGeom, creamMat);
  leftWing.position.set(-0.25, -0.05, -0.08);

  const rightWingGeom = wingGeom.clone();
  rightWingGeom.scale(-1, 1, 1);
  const rightWing = new THREE.Mesh(rightWingGeom, creamMat);
  rightWing.position.set(0.25, -0.05, -0.08);

  // Soft glowing wingtip beacons
  const beaconGeom = new THREE.SphereGeometry(0.028, 8, 8);
  const leftBeacon = new THREE.Mesh(beaconGeom, new THREE.MeshBasicMaterial({ color: 0xff5555 }));
  leftBeacon.position.set(-1.05, -0.02, 0.42);

  const rightBeacon = new THREE.Mesh(beaconGeom, new THREE.MeshBasicMaterial({ color: 0x55ff77 }));
  rightBeacon.position.set(1.05, -0.02, 0.42);

  // 6. Cute Twin Bronze Engine Pods
  const engineGeom = new THREE.CylinderGeometry(0.11, 0.14, 0.65, 16);
  engineGeom.rotateX(Math.PI / 2);
  const leftEngine = new THREE.Mesh(engineGeom, bronzeMat);
  leftEngine.position.set(-0.32, 0.01, 0.5);

  const rightEngine = leftEngine.clone();
  rightEngine.position.x = 0.32;

  // Glowing amber engine nozzle rims
  const nozzleGeom = new THREE.TorusGeometry(0.12, 0.025, 8, 16);
  const nozzleMat = new THREE.MeshBasicMaterial({ color: COZY_PALETTE.glowAmberWarm });
  const leftNozzle = new THREE.Mesh(nozzleGeom, nozzleMat);
  leftNozzle.position.set(-0.32, 0.01, 0.82);

  const rightNozzle = leftNozzle.clone();
  rightNozzle.position.x = 0.32;

  group.add(
    mainPod,
    noseCap,
    bellyPlate,
    canopy,
    portholesGroup,
    leftWing,
    rightWing,
    leftBeacon,
    rightBeacon,
    leftEngine,
    rightEngine,
    leftNozzle,
    rightNozzle
  );

  return group;
}

/** Builds the cozy 3D cabin interior: warm wood dash, vintage lamp, coffee mug, dials, and star globe. */
function buildCozyCockpitInterior() {
  const group = new THREE.Group();
  group.name = 'cockpit-interior';

  const woodMat = new THREE.MeshStandardMaterial({
    color: COZY_PALETTE.warmWood,
    roughness: 0.7,
    metalness: 0.1
  });
  const brassMat = new THREE.MeshStandardMaterial({
    color: COZY_PALETTE.vintageBrass,
    metalness: 0.8,
    roughness: 0.25
  });
  const dialBgMat = new THREE.MeshBasicMaterial({ color: 0x14100c });

  // 1. Curved Cozy Canopy Frame Arch
  const archGeom = new THREE.TorusGeometry(0.42, 0.018, 8, 24, Math.PI * 0.9);
  archGeom.rotateZ(-Math.PI * 0.05);
  const frontArch = new THREE.Mesh(archGeom, brassMat);
  frontArch.position.set(0, 0.06, -0.32);

  // 2. Warm Timber Dashboard Console
  const dashBase = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.18, 0.38), woodMat);
  dashBase.position.set(0, -0.16, -0.22);

  const dashAngled = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.14, 0.28), woodMat);
  dashAngled.position.set(0, -0.08, -0.18);
  dashAngled.rotation.x = -Math.PI / 4.5;

  // 3. Central Glowing Analog Speedometer & Horizon Dial
  const centralDial = new THREE.Mesh(new THREE.CircleGeometry(0.08, 20), dialBgMat);
  centralDial.position.set(0, -0.03, -0.07);
  centralDial.rotation.x = -Math.PI / 4.5;

  const dialRim = new THREE.Mesh(new THREE.RingGeometry(0.076, 0.084, 20), brassMat);
  centralDial.add(dialRim);

  const horizonNeedle = new THREE.Mesh(
    new THREE.PlaneGeometry(0.12, 0.006),
    new THREE.MeshBasicMaterial({ color: COZY_PALETTE.glowAmberWarm })
  );
  horizonNeedle.name = 'horizon-needle';
  horizonNeedle.position.set(0, 0, 0.002);
  centralDial.add(horizonNeedle);

  const speedNeedle = new THREE.Mesh(
    new THREE.PlaneGeometry(0.055, 0.005),
    new THREE.MeshBasicMaterial({ color: 0xff5555 })
  );
  speedNeedle.name = 'speed-needle';
  speedNeedle.position.set(0, 0, 0.004);
  centralDial.add(speedNeedle);

  // 4. Left Nav / Compass Dial
  const leftDial = new THREE.Mesh(new THREE.CircleGeometry(0.055, 16), dialBgMat);
  leftDial.position.set(-0.22, -0.04, -0.09);
  leftDial.rotation.x = -Math.PI / 4.5;
  leftDial.rotation.y = Math.PI / 12;
  leftDial.add(new THREE.Mesh(new THREE.RingGeometry(0.052, 0.058, 16), brassMat));

  const compassCross = new THREE.Mesh(
    new THREE.PlaneGeometry(0.08, 0.005),
    new THREE.MeshBasicMaterial({ color: COZY_PALETTE.glowGreen })
  );
  leftDial.add(compassCross);

  // 5. Right Tactical Mini 3D Holographic Star/Planet Globe
  const rightDisplay = new THREE.Mesh(new THREE.CircleGeometry(0.055, 16), dialBgMat);
  rightDisplay.position.set(0.22, -0.04, -0.09);
  rightDisplay.rotation.x = -Math.PI / 4.5;
  rightDisplay.rotation.y = -Math.PI / 12;
  rightDisplay.add(new THREE.Mesh(new THREE.RingGeometry(0.052, 0.058, 16), brassMat));

  const holoGlobe = new THREE.Group();
  holoGlobe.name = 'holo-globe';
  holoGlobe.position.set(0.22, 0.04, -0.08);

  const globeMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.035, 10, 8),
    new THREE.MeshBasicMaterial({ color: COZY_PALETTE.glowAmberWarm, wireframe: true, transparent: true, opacity: 0.85 })
  );
  const globeRing = new THREE.Mesh(
    new THREE.RingGeometry(0.046, 0.052, 16),
    new THREE.MeshBasicMaterial({ color: COZY_PALETTE.glowCyan, side: THREE.DoubleSide })
  );
  globeRing.rotation.x = Math.PI / 3;
  holoGlobe.add(globeMesh, globeRing);

  // 6. Vintage Brass Cabin Lantern / Reading Lamp
  const lampGroup = new THREE.Group();
  lampGroup.position.set(-0.32, 0.02, -0.08);

  const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.02, 10), brassMat);
  const lampGlass = new THREE.Mesh(
    new THREE.CylinderGeometry(0.022, 0.022, 0.05, 10),
    new THREE.MeshBasicMaterial({ color: COZY_PALETTE.glowLantern })
  );
  lampGlass.position.y = 0.035;
  const lampCap = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.025, 10), brassMat);
  lampCap.position.y = 0.065;
  lampGroup.add(lampBase, lampGlass, lampCap);

  const lampLight = new THREE.PointLight(COZY_PALETTE.glowLantern, 0.8, 1.8, 2);
  lampLight.position.set(-0.32, 0.06, -0.06);

  // 7. Steaming Ceramic Coffee / Tea Mug in Dash Cupholder
  const mugGroup = new THREE.Group();
  mugGroup.position.set(0.3, -0.07, 0.02);

  const holderRing = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.034, 0.03, 12), brassMat);
  const ceramicMat = new THREE.MeshStandardMaterial({ color: COZY_PALETTE.terracotta, roughness: 0.4 });
  const mugBody = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.024, 0.06, 12), ceramicMat);
  mugBody.position.y = 0.025;

  const coffeeSurface = new THREE.Mesh(
    new THREE.CircleGeometry(0.022, 12),
    new THREE.MeshBasicMaterial({ color: COZY_PALETTE.coffeeBrown })
  );
  coffeeSurface.rotation.x = -Math.PI / 2;
  coffeeSurface.position.y = 0.052;

  // Mug handle
  const handleGeom = new THREE.TorusGeometry(0.016, 0.005, 6, 10, Math.PI);
  handleGeom.rotateY(Math.PI / 2);
  const mugHandle = new THREE.Mesh(handleGeom, ceramicMat);
  mugHandle.position.set(0.028, 0.025, 0);

  // Coffee steam vapor puffs
  const steamGroup = new THREE.Group();
  steamGroup.name = 'coffee-steam';
  for (let i = 0; i < 5; i++) {
    const steamMat = new THREE.MeshBasicMaterial({ color: 0xffeedd, transparent: true, opacity: 0.35 });
    const puff = new THREE.Mesh(new THREE.SphereGeometry(0.009, 6, 6), steamMat);
    puff.position.y = 0.06 + i * 0.015;
    steamGroup.add(puff);
  }

  mugGroup.add(holderRing, mugBody, coffeeSurface, mugHandle, steamGroup);

  // 8. Tactile Flight Control Stick
  const flightStick = new THREE.Group();
  flightStick.name = 'flight-stick';
  flightStick.position.set(0, -0.16, 0.06);

  const stickBase = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.03, 10), brassMat);
  const stickShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.16, 8), woodMat);
  stickShaft.position.y = 0.08;
  const stickKnob = new THREE.Mesh(new THREE.SphereGeometry(0.022, 10, 10), brassMat);
  stickKnob.position.set(0, 0.16, 0);
  flightStick.add(stickBase, stickShaft, stickKnob);

  // 9. Soft Fabric Pilot Seat
  const seatMat = new THREE.MeshStandardMaterial({ color: COZY_PALETTE.seatFabric, roughness: 0.85 });
  const seatBase = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.09, 0.38), seatMat);
  seatBase.position.set(0, -0.28, 0.28);

  const seatBack = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.45, 0.08), seatMat);
  seatBack.position.set(0, -0.06, 0.45);
  seatBack.rotation.x = -0.1;

  const headRest = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.07), seatMat);
  headRest.position.set(0, 0.2, 0.48);

  // 10. Warm Ambient Cabin Lighting
  const warmCabinLight = new THREE.PointLight(COZY_PALETTE.glowLantern, 0.65, 2.2, 2);
  warmCabinLight.position.set(0, 0.2, 0.05);

  group.add(
    frontArch,
    dashBase,
    dashAngled,
    centralDial,
    leftDial,
    rightDisplay,
    holoGlobe,
    lampGroup,
    lampLight,
    mugGroup,
    flightStick,
    seatBase,
    seatBack,
    headRest,
    warmCabinLight
  );

  return group;
}

/** Builds the cute seated pilot figure. */
function buildCozyPilot() {
  const group = new THREE.Group();
  group.name = 'pilot';

  const skin = new THREE.MeshStandardMaterial({ color: 0xdfb496, roughness: 0.7 });
  const sweater = new THREE.MeshStandardMaterial({ color: 0x6e4d3b, roughness: 0.85 });
  const beanie = new THREE.MeshStandardMaterial({ color: COZY_PALETTE.terracotta, roughness: 0.8 });

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.2, 4, 8), sweater);
  torso.position.y = 0.15;

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 14), skin);
  head.position.y = 0.33;

  const pilotBeanie = new THREE.Mesh(new THREE.SphereGeometry(0.088, 12, 12, 0, Math.PI * 2, 0, Math.PI / 1.7), beanie);
  pilotBeanie.position.set(0, 0.35, 0);

  const armGeom = new THREE.CapsuleGeometry(0.035, 0.18, 4, 8);
  const leftArm = new THREE.Mesh(armGeom, sweater);
  leftArm.position.set(-0.15, 0.14, -0.05);
  leftArm.rotation.set(0.5, 0, 0.25);

  const rightArm = new THREE.Mesh(armGeom, sweater);
  rightArm.position.set(0.15, 0.14, -0.05);
  rightArm.rotation.set(0.5, 0, -0.25);

  const legGeom = new THREE.CapsuleGeometry(0.045, 0.2, 4, 8);
  const leftLeg = new THREE.Mesh(legGeom, sweater);
  leftLeg.position.set(-0.07, -0.06, -0.04);
  leftLeg.rotation.x = Math.PI / 2.1;

  const rightLeg = leftLeg.clone();
  rightLeg.position.x = 0.07;

  group.add(torso, head, pilotBeanie, leftArm, rightArm, leftLeg, rightLeg);
  return group;
}
