/**
 * @file BlackHoleShader.js
 * A stylized (non-physically-exact) event horizon + accretion disk glow:
 * a soft dark sphere haloed by a warm swirling ring.
 */

import * as THREE from "three";

/** @returns {THREE.ShaderMaterial} for the event-horizon sphere. */
export function createEventHorizonMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vNormal;
      void main() {
        float rim = pow(1.0 - abs(vNormal.z), 3.0);
        vec3 color = mix(vec3(0.0), vec3(0.15, 0.05, 0.25), rim);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
}

/** @returns {THREE.ShaderMaterial} for the accretion-disk ring plane. */
export function createAccretionDiskMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vec2 centered = vUv - 0.5;
        float radius = length(centered) * 2.0;
        float angle = atan(centered.y, centered.x) + uTime * 0.8;
        float swirl = sin(angle * 6.0 + radius * 12.0) * 0.5 + 0.5;
        float ring = smoothstep(0.32, 0.48, radius) * (1.0 - smoothstep(0.88, 1.0, radius));

        // Relativistic Doppler beaming: approaching side (left / -x) is blueshifted & brighter,
        // receding side (right / +x) is redshifted & dimmer
        float dopplerFactor = clamp(-centered.x * 2.2 + 0.5, 0.2, 1.8);
        vec3 blueShiftColor = vec3(0.5, 0.8, 1.4) * dopplerFactor;
        vec3 redShiftColor = vec3(1.4, 0.35, 0.1) * (2.0 - dopplerFactor);
        vec3 baseColor = mix(redShiftColor, blueShiftColor, clamp(-centered.x + 0.5, 0.0, 1.0));
        vec3 finalColor = mix(baseColor, vec3(1.0, 0.95, 0.8), swirl * 0.5);

        gl_FragColor = vec4(finalColor, ring * (0.6 + swirl * 0.4) * dopplerFactor);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}
