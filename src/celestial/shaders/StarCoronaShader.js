/**
 * @file StarCoronaShader.js
 * Animated procedural-noise corona for stars — a gently shifting plasma
 * glow rather than a harsh flat sphere.
 */

import * as THREE from 'three';

/**
 * @param {{ color?: THREE.Color|number }} [options]
 * @returns {THREE.ShaderMaterial}
 */
export function createStarCoronaMaterial({ color = 0xffd27a } = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uTime: { value: 0 }
    },
    vertexShader: /* glsl */ `
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uTime;
      varying vec3 vPosition;

      // Cheap 3D value-noise approximation (no textures needed).
      float hash(vec3 p) {
        p = fract(p * 0.3183099 + 0.1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }

      void main() {
        vec3 p = normalize(vPosition) * 3.0 + vec3(0.0, uTime * 0.15, 0.0);
        float n = hash(floor(p * 4.0)) * 0.6 + hash(floor(p * 8.0)) * 0.4;
        vec3 color = uColor * (0.75 + n * 0.5);
        gl_FragColor = vec4(color, 1.0);
      }
    `
  });
}
