/**
 * @file WarpStreakShader.js
 * Star-streak "warp tunnel" material for instanced line/quad streaks that
 * radiate past the cockpit during warp travel. Intensity is driven by the
 * `uSpeedFraction` uniform (0 = stationary stars, 1 = full warp streak).
 */

import * as THREE from 'three';

/**
 * @param {{ color?: THREE.Color|number }} [options]
 * @returns {THREE.ShaderMaterial}
 */
export function createWarpStreakMaterial({ color = 0xdfe9ff } = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uSpeedFraction: { value: 0 }
    },
    vertexShader: /* glsl */ `
      uniform float uSpeedFraction;
      varying float vAlpha;
      void main() {
        vAlpha = 0.4 + uSpeedFraction * 0.6;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = mix(1.5, 5.0, uSpeedFraction) * (300.0 / -mvPosition.z);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        vec2 centered = gl_PointCoord - 0.5;
        float d = length(centered);
        float alpha = smoothstep(0.5, 0.0, d) * vAlpha;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
}
