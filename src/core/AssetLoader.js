/**
 * @file AssetLoader.js
 * Loads textures with a timeout and always falls back to a procedurally
 * generated canvas texture on failure, so a slow network or a missing file
 * never breaks the visuals — it just looks slightly simpler.
 */

import * as THREE from "three";

const loader = new THREE.TextureLoader();

/**
 * @param {string} url
 * @param {number} [timeoutMs=8000]
 * @returns {Promise<THREE.Texture>} resolves with a loaded texture, or a
 *   procedural fallback if loading fails or times out.
 */
export function loadTextureWithFallback(url, timeoutMs = 8000) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (texture) => {
      if (settled) return;
      settled = true;
      resolve(texture);
    };

    const timer = setTimeout(() => finish(makeProceduralFallbackTexture()), timeoutMs);

    if (!url) {
      clearTimeout(timer);
      finish(makeProceduralFallbackTexture());
      return;
    }

    loader.load(
      url,
      (texture) => {
        clearTimeout(timer);
        texture.colorSpace = THREE.SRGBColorSpace;
        finish(texture);
      },
      undefined,
      () => {
        clearTimeout(timer);
        finish(makeProceduralFallbackTexture());
      }
    );
  });
}

/**
 * Generates a soft, warm procedural marble-noise texture on a canvas, used
 * whenever a real texture isn't available. Deterministic-ish and cheap.
 * @param {{ baseColor?: string, accentColor?: string, size?: number }} [options]
 * @returns {THREE.CanvasTexture}
 */
export function makeProceduralFallbackTexture({ baseColor = "#8f8fae", accentColor = "#c9c9e6", size = 256 } = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, size, size);

  ctx.globalAlpha = 0.35;
  ctx.fillStyle = accentColor;
  for (let i = 0; i < 40; i++) {
    const x = pseudoRandom(i * 7.1) * size;
    const y = pseudoRandom(i * 13.7) * size;
    const r = 6 + pseudoRandom(i * 3.3) * (size / 8);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}
