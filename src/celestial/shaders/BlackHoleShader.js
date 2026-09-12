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
        float angle = atan(centered.y, centered.x) + uTime * 0.6;
        float swirl = sin(angle * 6.0 + radius * 10.0) * 0.5 + 0.5;
        float ring = smoothstep(0.35, 0.5, radius) * (1.0 - smoothstep(0.9, 1.0, radius));
        vec3 color = mix(vec3(1.0, 0.55, 0.2), vec3(1.0, 0.85, 0.6), swirl);
        gl_FragColor = vec4(color, ring * (0.55 + swirl * 0.3));
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}
