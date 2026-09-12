/**
 * @file AtmosphereShader.js
 * A soft Fresnel-based atmospheric rim-glow shader, used on habitable /
 * atmosphere-bearing planets for a warm, believable halo.
 */

import * as THREE from "three";

/**
 * @param {{ color?: THREE.Color|number, intensity?: number }} [options]
 * @returns {THREE.ShaderMaterial}
 */
export function createAtmosphereMaterial({ color = 0x6db3ff, intensity = 1.0 } = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uIntensity: { value: intensity },
    },
    vertexShader: /* glsl */ `
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vViewDir = normalize(-viewPosition.xyz);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uIntensity;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        float fresnel = pow(1.0 - clamp(dot(vNormal, vViewDir), 0.0, 1.0), 2.5);
        vec3 glow = uColor * fresnel * uIntensity;
        gl_FragColor = vec4(glow, fresnel * 0.85);
      }
    `,
    transparent: true,
    depthWrite: false,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
  });
}
