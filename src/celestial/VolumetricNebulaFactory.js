/**
 * @file VolumetricNebulaFactory.js
 * Builds multi-layered, glowing volumetric 3D particle nebulae with smooth
 * camera fly-through clipping, internal color gradients, and stellar ionization cores.
 */

import * as THREE from "three";

/**
 * Builds a glowing 3D volumetric nebula group.
 *
 * @param {import('./CelestialData.js').CelestialBody} body
 * @param {number} visualRadius
 * @returns {THREE.Group}
 */
export function buildVolumetricNebula(body, visualRadius) {
  const group = new THREE.Group();
  group.name = `volumetric-nebula:${body.id}`;

  const baseColor = new THREE.Color(body.colorHex || 0xda70d6);
  const coreColor = new THREE.Color(0xffeedd);
  const outerColor = new THREE.Color(body.colorHex || 0x9370db).offsetHSL(0.08, 0.2, -0.15);

  const radius = Math.max(visualRadius * 4.5, 4.2);
  const particleCount = 1800;

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const scales = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    // Clustered multi-arm distribution for organic filament structure
    const u = Math.random();
    const r = radius * Math.pow(u, 0.45); // Denser towards center

    const theta = Math.random() * Math.PI * 2;
    const phi = (Math.random() - 0.5) * Math.PI * 0.85;

    // Organic noise disturbance
    const noise = Math.sin(theta * 3) * 0.25 + Math.cos(phi * 4) * 0.15;
    const currentR = r * (1 + noise);

    positions[i * 3] = currentR * Math.cos(theta) * Math.cos(phi);
    positions[i * 3 + 1] = currentR * Math.sin(phi) * 0.65; // Slightly flattened disk
    positions[i * 3 + 2] = currentR * Math.sin(theta) * Math.cos(phi);

    // Color gradient from bright white-gold ionization core to deep cosmic violet/magenta edges
    const distFrac = Math.min(r / radius, 1.0);
    const particleColor = new THREE.Color();

    if (distFrac < 0.25) {
      particleColor.lerpColors(coreColor, baseColor, distFrac * 4);
    } else {
      particleColor.lerpColors(baseColor, outerColor, (distFrac - 0.25) / 0.75);
    }

    colors[i * 3] = particleColor.r;
    colors[i * 3 + 1] = particleColor.g;
    colors[i * 3 + 2] = particleColor.b;

    scales[i] = (1.0 - distFrac * 0.4) * (Math.random() * 0.4 + 0.8);
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Soft glowing particle shader
  const material = new THREE.PointsMaterial({
    size: 0.85,
    vertexColors: true,
    transparent: true,
    opacity: 0.52,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const nebulaCloud = new THREE.Points(geom, material);
  nebulaCloud.name = "nebula-particles";

  // Central glowing ionization point light
  const coreLight = new THREE.PointLight(body.colorHex || 0xda70d6, 1.8, radius * 3.5, 1.5);
  coreLight.position.set(0, 0, 0);

  group.add(nebulaCloud, coreLight);
  return group;
}
