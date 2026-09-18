/**
 * @file CelestialFactory.js
 * Builds Three.js Object3D representations of celestial bodies and
 * satellites from the plain-data records in CelestialData.js / SatelliteData.js.
 * Centralizing construction here keeps geometry/material choices in one
 * place and makes disposal predictable (every mesh this factory creates is
 * tracked by the caller via Engine#track).
 */

import * as THREE from "three";
import { createAtmosphereMaterial } from "./shaders/AtmosphereShader.js";
import { createStarCoronaMaterial } from "./shaders/StarCoronaShader.js";
import { createEventHorizonMaterial, createAccretionDiskMaterial } from "./shaders/BlackHoleShader.js";
import {
  createCelestialTexture,
  createEarthCloudTexture,
  createEarthNightLightsTexture,
  createSaturnRingTexture,
} from "./PlanetProceduralTextures.js";
import { buildVolumetricNebula } from "./VolumetricNebulaFactory.js";

const SEGMENTS = 48;

/**
 * @param {import('./CelestialData.js').CelestialBody} body
 * @returns {THREE.Group} a group named after the body id, userData.bodyId set.
 */
export function buildCelestialObject(body) {
  const group = new THREE.Group();
  group.name = `celestial:${body.id}`;
  group.userData.bodyId = body.id;
  group.userData.kind = "celestial";

  const radius = visualRadius(body);
  const isSolidBody = ["star", "planet", "dwarfPlanet", "moon", "blackHole"].includes(body.type);
  const safeRadius = isSolidBody
    ? body.type === "star"
      ? Math.max(radius * 1.4, 0.7)
      : Math.max(radius * 1.25, 0.25)
    : 0;
  group.userData.visualRadius = radius;
  group.userData.safeRadius = safeRadius;

  switch (body.type) {
    case "star":
      group.add(buildStar(body));
      break;
    case "blackHole":
      group.add(buildBlackHole(body));
      break;
    case "nebula":
      group.add(buildNebula(body));
      break;
    case "galaxy":
      group.add(buildGalaxy(body));
      break;
    case "structure":
      group.add(buildStructure(body));
      break;
    case "asteroidBelt":
      group.add(buildAsteroidBelt(body));
      break;
    default:
      group.add(buildRockyBody(body));
      break;
  }

  return group;
}

export function visualRadius(body) {
  // Compresses the enormous real radius range into a comfortable render scale.
  const km = Math.max(body.radiusKm, 1);
  return Math.max(0.14, Math.log10(km) * 0.16);
}

function buildRockyBody(body) {
  const radius = visualRadius(body);
  const geometry = new THREE.SphereGeometry(radius, SEGMENTS, SEGMENTS);
  const texture = createCelestialTexture(body.id, 512);

  const matConfig = {
    map: texture,
    roughness: body.environment.isGasGiant ? 0.85 : 0.7,
    metalness: body.environment.isGasGiant ? 0.0 : 0.08,
  };

  if (body.id === "earth") {
    matConfig.emissiveMap = createEarthNightLightsTexture(512);
    matConfig.emissive = new THREE.Color(0xffe0aa);
    matConfig.emissiveIntensity = 0.95;
  }

  const material = new THREE.MeshStandardMaterial(matConfig);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = `surface:${body.id}`;

  const group = new THREE.Group();
  group.add(mesh);

  // 1. Earth Atmosphere and Rotating Cloud Sphere
  if (body.id === "earth") {
    const cloudGeom = new THREE.SphereGeometry(radius * 1.025, SEGMENTS, SEGMENTS);
    const cloudMat = new THREE.MeshStandardMaterial({
      map: createEarthCloudTexture(512),
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      roughness: 0.9,
    });
    const cloudMesh = new THREE.Mesh(cloudGeom, cloudMat);
    cloudMesh.name = `clouds:${body.id}`;
    group.add(cloudMesh);
  }

  // 2. Saturn Iconic Multi-Ring System
  if (body.id === "saturn") {
    const ringGeom = new THREE.RingGeometry(radius * 1.35, radius * 2.5, 64);
    ringGeom.rotateX(Math.PI / 2);
    const ringMat = new THREE.MeshStandardMaterial({
      map: createSaturnRingTexture(512),
      transparent: true,
      side: THREE.DoubleSide,
      roughness: 0.65,
      metalness: 0.1,
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.name = `rings:${body.id}`;
    ringMesh.rotation.z = 0.47; // ~27 deg axial tilt
    ringMesh.rotation.x = 0.12;
    group.add(ringMesh);
  }

  // 3. Uranus Thin Vertical Rings
  if (body.id === "uranus") {
    const uranusRingGeom = new THREE.RingGeometry(radius * 1.35, radius * 1.75, 48);
    uranusRingGeom.rotateX(Math.PI / 2);
    const uranusRingMat = new THREE.MeshStandardMaterial({
      color: 0xa8e6ff,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
      roughness: 0.7,
    });
    const uranusRing = new THREE.Mesh(uranusRingGeom, uranusRingMat);
    uranusRing.name = `rings:${body.id}`;
    uranusRing.rotation.x = Math.PI / 2.1; // ~98 deg tilt
    group.add(uranusRing);
  }

  // 4. Haumea Crystalline Ice Ring & Ellipsoid Shape
  if (body.id === "haumea") {
    mesh.scale.set(1.4, 0.9, 0.7);
    const haumeaRingGeom = new THREE.RingGeometry(radius * 1.6, radius * 1.9, 48);
    haumeaRingGeom.rotateX(Math.PI / 2);
    const haumeaRingMat = new THREE.MeshStandardMaterial({
      color: 0xd9e3eb,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
      roughness: 0.8,
    });
    const haumeaRing = new THREE.Mesh(haumeaRingGeom, haumeaRingMat);
    haumeaRing.name = `rings:${body.id}`;
    group.add(haumeaRing);
  }

  // Atmospheric Fresnel Rim Glow
  const hasAtmosphere = body.environment.atmosphericPressureAtm > 0.01;
  if (hasAtmosphere) {
    const atmosphereGeometry = new THREE.SphereGeometry(radius * 1.14, SEGMENTS, SEGMENTS);
    const atmosphereMaterial = createAtmosphereMaterial({
      color: body.environment.hasLiquidWater ? 0x5da8ff : body.id === "venus" ? 0xffdf99 : 0xe0b98f,
      intensity: body.id === "venus" ? 1.4 : 1.1,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphereMesh.name = `atmosphere:${body.id}`;
    group.add(atmosphereMesh);
  }

  // Polar Aurora Ribbons for Earth, Jupiter, and Saturn
  if (body.id === "earth" || body.id === "jupiter" || body.id === "saturn") {
    const auroraColor = body.id === "earth" ? 0x55ffaa : body.id === "jupiter" ? 0x88e0ff : 0xaa88ff;
    const auroraMat = new THREE.MeshBasicMaterial({
      color: auroraColor,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const auroraGeom = new THREE.TorusGeometry(radius * 0.35, radius * 0.04, 8, 32);
    auroraGeom.rotateX(Math.PI / 2);

    const northAurora = new THREE.Mesh(auroraGeom, auroraMat);
    northAurora.position.y = radius * 0.94;
    northAurora.name = `aurora-north:${body.id}`;

    const southAurora = new THREE.Mesh(auroraGeom, auroraMat);
    southAurora.position.y = -radius * 0.94;
    southAurora.name = `aurora-south:${body.id}`;

    group.add(northAurora, southAurora);
  }

  return group;
}

function buildStar(body) {
  const radius = Math.max(visualRadius(body), 0.48);
  const geometry = new THREE.SphereGeometry(radius, SEGMENTS, SEGMENTS);
  const material = createStarCoronaMaterial({ color: body.colorHex });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = `star:${body.id}`;
  mesh.userData.animatedUniforms = ["uTime"];

  // Prominence flare outer halo
  const flareGeom = new THREE.SphereGeometry(radius * 1.22, 32, 32);
  const flareMat = new THREE.MeshBasicMaterial({
    color: 0xffaa33,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  });
  const flareMesh = new THREE.Mesh(flareGeom, flareMat);
  flareMesh.name = `flare:${body.id}`;

  const light = new THREE.PointLight(body.colorHex, 2.8, 0, 1.8);
  light.name = `starlight:${body.id}`;

  const group = new THREE.Group();
  group.add(mesh, flareMesh, light);

  // Relativistic Pulsar / Magnetar polar light cones
  if (body.tags.includes("pulsar") || body.id.includes("pulsar") || body.tags.includes("magnetar")) {
    const beamGeom = new THREE.ConeGeometry(radius * 0.45, radius * 6, 24, 1, true);
    beamGeom.translate(0, radius * 3, 0);
    const beamMat = new THREE.MeshBasicMaterial({
      color: body.colorHex,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const northBeam = new THREE.Mesh(beamGeom, beamMat);
    const southBeam = new THREE.Mesh(beamGeom, beamMat);
    southBeam.rotation.x = Math.PI;
    group.add(northBeam, southBeam);
  }

  return group;
}

function buildBlackHole(body) {
  const radius = Math.max(visualRadius(body) * 0.55, 0.35);
  const horizonGeometry = new THREE.SphereGeometry(radius, SEGMENTS, SEGMENTS);
  const horizonMesh = new THREE.Mesh(horizonGeometry, createEventHorizonMaterial());
  horizonMesh.name = `horizon:${body.id}`;
  horizonMesh.userData.animatedUniforms = ["uTime"];

  // Relativistic glowing photon sphere ring
  const photonGeom = new THREE.RingGeometry(radius * 1.02, radius * 1.12, 48);
  const photonMat = new THREE.MeshBasicMaterial({
    color: 0xffeedd,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const photonMesh = new THREE.Mesh(photonGeom, photonMat);
  photonMesh.rotation.x = Math.PI / 2.3;

  const diskGeometry = new THREE.RingGeometry(radius * 1.25, radius * 3.6, 64);
  const diskMesh = new THREE.Mesh(diskGeometry, createAccretionDiskMaterial());
  diskMesh.name = `disk:${body.id}`;
  diskMesh.rotation.x = Math.PI / 2.3;
  diskMesh.userData.animatedUniforms = ["uTime"];

  const group = new THREE.Group();
  group.add(horizonMesh, photonMesh, diskMesh);
  return group;
}

function buildNebula(body) {
  return buildVolumetricNebula(body, visualRadius(body));
}

function buildGalaxy(body) {
  const count = 6000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const baseColor = new THREE.Color(body.colorHex);
  const armRadius = Math.max(visualRadius(body) * 6, 6);

  for (let i = 0; i < count; i++) {
    const armIndex = i % 3;
    const t = Math.random();
    const angle = t * Math.PI * 6 + (armIndex * (Math.PI * 2)) / 3;
    const radius = t * armRadius;
    const spread = (Math.random() - 0.5) * 0.6;
    positions[i * 3] = Math.cos(angle) * radius + spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
    positions[i * 3 + 2] = Math.sin(angle) * radius + spread;

    const shade = 0.6 + Math.random() * 0.4;
    colors[i * 3] = baseColor.r * shade;
    colors[i * 3 + 1] = baseColor.g * shade;
    colors[i * 3 + 2] = baseColor.b * shade;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 0.18,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const points = new THREE.Points(geometry, material);
  points.name = `galaxy:${body.id}`;

  const coreGeometry = new THREE.SphereGeometry(Math.max(armRadius * 0.08, 0.3), 24, 24);
  const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xfff3d6 });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  core.name = `galaxy-core:${body.id}`;

  const group = new THREE.Group();
  group.add(points, core);

  // Relativistic Plasma Jet for Active Galaxies (M87 / Centaurus A)
  if (body.id === "messier-87" || body.id === "centaurus-a") {
    const jetGeom = new THREE.CylinderGeometry(0.04, 0.4, armRadius * 0.85, 16);
    jetGeom.translate(0, armRadius * 0.42, 0);
    const jetMat = new THREE.MeshBasicMaterial({
      color: 0x88ddff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const jetMesh = new THREE.Mesh(jetGeom, jetMat);
    jetMesh.rotation.z = 0.55;
    group.add(jetMesh);
  }

  return group;
}

function buildStructure(body) {
  // A soft glowing wireframe shell — used for superclusters / the cosmic web
  // / the CMB horizon, where "the object" is really a vast-scale concept.
  const radius = Math.max(visualRadius(body) * 3, 3);
  const geometry = new THREE.IcosahedronGeometry(radius, 2);
  const material = new THREE.MeshBasicMaterial({
    color: body.colorHex,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = `structure:${body.id}`;
  return mesh;
}

function buildAsteroidBelt(body) {
  const count = 1500;
  const geometry = new THREE.IcosahedronGeometry(0.05, 0);
  const material = new THREE.MeshStandardMaterial({ color: body.colorHex, roughness: 1 });
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  mesh.name = `asteroid-belt:${body.id}`;

  const dummy = new THREE.Object3D();
  const innerRadius = 6;
  const outerRadius = 8;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
    dummy.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 0.4, Math.sin(angle) * radius);
    dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    const scale = 0.5 + Math.random() * 1.5;
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  return mesh;
}

/**
 * @param {import('./SatelliteData.js').SatelliteRecord} satellite
 * @returns {THREE.Group}
 */
export function buildSatelliteMarker(satellite) {
  const group = new THREE.Group();
  group.name = `satellite:${satellite.id}`;
  group.userData.satelliteId = satellite.id;
  group.userData.kind = "satellite";

  const bodyGeometry = new THREE.BoxGeometry(0.06, 0.06, 0.12);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: satellite.colorHex, metalness: 0.6, roughness: 0.4 });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);

  const panelGeometry = new THREE.BoxGeometry(0.22, 0.005, 0.08);
  const panelMaterial = new THREE.MeshStandardMaterial({ color: 0x2244aa, metalness: 0.3, roughness: 0.6 });
  const leftPanel = new THREE.Mesh(panelGeometry, panelMaterial);
  leftPanel.position.x = -0.16;
  const rightPanel = new THREE.Mesh(panelGeometry, panelMaterial);
  rightPanel.position.x = 0.16;

  const beacon = new THREE.PointLight(satellite.colorHex, 0.6, 2, 2);

  group.add(body, leftPanel, rightPanel, beacon);
  return group;
}

/** Builds a distant, non-interactive background starfield for visual depth. */
export function buildStarfield(count = 4000, spread = 400) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ color: 0xfff6e6, size: 0.6, sizeAttenuation: true });
  const points = new THREE.Points(geometry, material);
  points.name = "background-starfield";
  return points;
}
