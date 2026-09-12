/**
 * @file PlanetProceduralTextures.js
 * Generates rich, high-detail procedural canvas textures for astronomical bodies.
 * Works entirely offline using 2D canvas without external image asset dependencies,
 * ensuring high fidelity, fast loading, and crisp visual aesthetics.
 */

import * as THREE from 'three';

/** Pseudo-random noise helper based on coordinate hash */
function hash2D(x, y) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return n - Math.floor(n);
}

/** Smooth 2D value noise */
function noise2D(x, y) {
  const i = Math.floor(x);
  const j = Math.floor(y);
  const fx = x - i;
  const fy = y - j;
  const u = fx * fx * (3.0 - 2.0 * fx);
  const v = fy * fy * (3.0 - 2.0 * fy);

  const a = hash2D(i, j);
  const b = hash2D(i + 1, j);
  const c = hash2D(i, j + 1);
  const d = hash2D(i + 1, j + 1);

  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

/** Multi-octave Fractal Brownian Motion (FBM) noise */
function fbm(x, y, octaves = 4) {
  let val = 0;
  let amp = 0.5;
  let freq = 1.0;
  for (let o = 0; o < octaves; o++) {
    val += amp * noise2D(x * freq, y * freq);
    freq *= 2.0;
    amp *= 0.5;
  }
  return val;
}

/**
 * Creates a canvas texture for a specific celestial body by id.
 * @param {string} bodyId
 * @param {number} [size=512]
 * @returns {THREE.CanvasTexture}
 */
export function createCelestialTexture(bodyId, size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  switch (bodyId) {
    case 'earth':
      drawEarthTexture(ctx, size);
      break;
    case 'jupiter':
      drawJupiterTexture(ctx, size);
      break;
    case 'saturn':
      drawSaturnTexture(ctx, size);
      break;
    case 'mars':
      drawMarsTexture(ctx, size);
      break;
    case 'moon':
    case 'phobos':
    case 'ceres':
      drawMoonTexture(ctx, size);
      break;
    case 'venus':
      drawVenusTexture(ctx, size);
      break;
    case 'mercury':
      drawMercuryTexture(ctx, size);
      break;
    case 'europa':
      drawEuropaTexture(ctx, size);
      break;
    case 'titan':
      drawTitanTexture(ctx, size);
      break;
    case 'uranus':
      drawUranusTexture(ctx, size);
      break;
    case 'neptune':
      drawNeptuneTexture(ctx, size);
      break;
    default:
      drawGenericRockyTexture(ctx, size);
      break;
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Generates a separate alpha-mapped cloud texture for Earth.
 * @param {number} [size=512]
 * @returns {THREE.CanvasTexture}
 */
export function createEarthCloudTexture(size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.clearRect(0, 0, size, size);

  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    const lat = (y / size - 0.5) * Math.PI;
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const nx = (x / size) * 8.0;
      const ny = (y / size) * 4.0;

      // Swirling cloud noise with latitudinal trade winds
      const windShift = Math.sin(lat * 4) * 1.2;
      const n = fbm(nx + windShift, ny, 5);

      const cloudDensity = Math.max(0, (n - 0.46) * 2.8);
      const alpha = Math.min(Math.floor(cloudDensity * 220), 220);

      data[idx] = 255;     // R
      data[idx + 1] = 255; // G
      data[idx + 2] = 255; // B
      data[idx + 3] = alpha; // A
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Generates a high-detail multi-zoned Saturn ring texture (radial gradient with Cassini division).
 * @param {number} [size=512]
 * @returns {THREE.CanvasTexture}
 */
export function createSaturnRingTexture(size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const gradient = ctx.createLinearGradient(0, 0, size, 0);

  // C Ring (inner, faint, translucent dusky brown)
  gradient.addColorStop(0.00, 'rgba(140, 120, 95, 0.0)');
  gradient.addColorStop(0.08, 'rgba(160, 135, 105, 0.35)');
  gradient.addColorStop(0.22, 'rgba(180, 150, 115, 0.45)');

  // B Ring (brightest, dense golden-cream bands)
  gradient.addColorStop(0.24, 'rgba(230, 205, 160, 0.95)');
  gradient.addColorStop(0.38, 'rgba(245, 225, 185, 0.98)');
  gradient.addColorStop(0.54, 'rgba(215, 190, 145, 0.90)');

  // Cassini Division (dark gap)
  gradient.addColorStop(0.57, 'rgba(30, 25, 20, 0.05)');
  gradient.addColorStop(0.63, 'rgba(40, 32, 25, 0.08)');

  // A Ring (medium density, fine ringlets)
  gradient.addColorStop(0.66, 'rgba(210, 185, 145, 0.85)');
  gradient.addColorStop(0.78, 'rgba(225, 200, 160, 0.80)');
  gradient.addColorStop(0.88, 'rgba(195, 170, 130, 0.70)');

  // Encke Gap and outer edge
  gradient.addColorStop(0.92, 'rgba(60, 50, 40, 0.1)');
  gradient.addColorStop(0.96, 'rgba(170, 145, 115, 0.4)');
  gradient.addColorStop(1.00, 'rgba(120, 100, 80, 0.0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, 16);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Draws Earth texture with vibrant oceans, green/brown continents, and ice caps. */
function drawEarthTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    const latNorm = y / size; // 0 (north pole) to 1 (south pole)
    const latDistFromPole = Math.min(latNorm, 1.0 - latNorm);

    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const nx = (x / size) * 5.5;
      const ny = (y / size) * 2.8;

      const n = fbm(nx, ny, 6);

      // Polar Ice Caps
      if (latDistFromPole < 0.12 + (n * 0.06)) {
        data[idx] = 238;     // R
        data[idx + 1] = 245; // G
        data[idx + 2] = 255; // B
        data[idx + 3] = 255;
        continue;
      }

      // Land vs Ocean threshold
      if (n > 0.48) {
        // Continent landmass
        const elev = (n - 0.48) / 0.52;
        if (elev < 0.35) {
          // Lush green lowland / forest
          data[idx] = Math.floor(34 + elev * 40);
          data[idx + 1] = Math.floor(125 + elev * 30);
          data[idx + 2] = Math.floor(45 + elev * 20);
        } else if (elev < 0.7) {
          // Ochre savanna / highlands / desert
          data[idx] = Math.floor(168 + elev * 40);
          data[idx + 1] = Math.floor(140 + elev * 20);
          data[idx + 2] = Math.floor(75 + elev * 15);
        } else {
          // Mountain peaks (slate/snow)
          data[idx] = Math.floor(175 + elev * 60);
          data[idx + 1] = Math.floor(170 + elev * 65);
          data[idx + 2] = Math.floor(165 + elev * 70);
        }
      } else {
        // Ocean (deep sapphire to shallow azure coast)
        const depth = (0.48 - n) / 0.48;
        data[idx] = Math.floor(12 + (1 - depth) * 28);
        data[idx + 1] = Math.floor(45 + (1 - depth) * 65);
        data[idx + 2] = Math.floor(125 + (1 - depth) * 90);
      }
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

/** Draws Jupiter with alternating amber/tan/russet storm bands and the Great Red Spot. */
function drawJupiterTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  // Red Spot center coordinates in normalized UV
  const grsX = 0.62;
  const grsY = 0.65;
  const grsRadiusX = 0.11;
  const grsRadiusY = 0.055;

  for (let y = 0; y < size; y++) {
    const ny = y / size;
    const bandNoise = fbm(ny * 24.0, 0.5, 3) * 0.08;
    const bandIndex = Math.sin((ny + bandNoise) * Math.PI * 14);

    for (let x = 0; x < size; x++) {
      const nx = x / size;
      const idx = (y * size + x) * 4;

      // Turbulent cloud swirl noise
      const swirl = fbm(nx * 8.0, ny * 12.0, 4) * 0.25;

      // Base band colors (alternating light zone and dark belt)
      let r, g, b;
      if (bandIndex + swirl > 0.1) {
        // Cream / pale gold zone
        r = Math.floor(228 + swirl * 40);
        g = Math.floor(198 + swirl * 30);
        b = Math.floor(155 + swirl * 20);
      } else {
        // Russet / bronze belt
        r = Math.floor(180 - swirl * 50);
        g = Math.floor(115 - swirl * 35);
        b = Math.floor(70 - swirl * 25);
      }

      // Check Great Red Spot ellipse
      const dx = (nx - grsX) / grsRadiusX;
      const dy = (ny - grsY) / grsRadiusY;
      const distSq = dx * dx + dy * dy;

      if (distSq < 1.0) {
        const spotStrength = 1.0 - Math.sqrt(distSq);
        const spotSwirl = Math.sin(Math.atan2(dy, dx) * 3 + Math.sqrt(distSq) * 10) * 0.2;
        r = Math.floor(r * (1 - spotStrength) + (215 + spotSwirl * 30) * spotStrength);
        g = Math.floor(g * (1 - spotStrength) + (80 + spotSwirl * 20) * spotStrength);
        b = Math.floor(b * (1 - spotStrength) + (50 + spotSwirl * 15) * spotStrength);
      }

      data[idx] = Math.min(255, Math.max(0, r));
      data[idx + 1] = Math.min(255, Math.max(0, g));
      data[idx + 2] = Math.min(255, Math.max(0, b));
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

/** Draws Saturn's atmospheric banded globe. */
function drawSaturnTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    const ny = y / size;
    const band = Math.sin(ny * Math.PI * 18) * 0.15;
    const fineBands = Math.sin(ny * Math.PI * 45) * 0.08;

    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const nx = x / size;
      const subtleNoise = fbm(nx * 4.0, ny * 8.0, 3) * 0.06;

      const t = band + fineBands + subtleNoise;
      const r = Math.floor(234 + t * 30);
      const g = Math.floor(212 + t * 25);
      const b = Math.floor(168 + t * 20);

      data[idx] = Math.min(255, Math.max(0, r));
      data[idx + 1] = Math.min(255, Math.max(0, g));
      data[idx + 2] = Math.min(255, Math.max(0, b));
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

/** Draws Mars with rusty red terrain, dark basalt plains, and polar ice caps. */
function drawMarsTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    const latNorm = y / size;
    const latDistFromPole = Math.min(latNorm, 1.0 - latNorm);

    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const nx = (x / size) * 6.0;
      const ny = (y / size) * 3.0;

      const n = fbm(nx, ny, 5);

      // Polar Ice Caps
      if (latDistFromPole < 0.09 + n * 0.03) {
        data[idx] = 245;
        data[idx + 1] = 245;
        data[idx + 2] = 250;
        data[idx + 3] = 255;
        continue;
      }

      if (n < 0.42) {
        // Dark basaltic plains (Syrtis Major / Acidalia Planitia)
        const dark = (0.42 - n) / 0.42;
        data[idx] = Math.floor(115 - dark * 30);
        data[idx + 1] = Math.floor(65 - dark * 20);
        data[idx + 2] = Math.floor(45 - dark * 15);
      } else {
        // Rust ochre desert highlands
        const elev = (n - 0.42) / 0.58;
        data[idx] = Math.floor(198 + elev * 35);
        data[idx + 1] = Math.floor(95 + elev * 25);
        data[idx + 2] = Math.floor(48 + elev * 15);
      }
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

/** Draws Moon / cratered bodies with dark basaltic lunar maria and bright ray craters. */
function drawMoonTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const nx = (x / size) * 8.0;
      const ny = (y / size) * 4.0;

      const macroNoise = fbm(nx * 0.5, ny * 0.5, 4);
      const microNoise = fbm(nx * 3.0, ny * 3.0, 4);

      let brightness = 150 + macroNoise * 55 + microNoise * 25;

      // Dark basalt maria regions
      if (macroNoise < 0.38) {
        brightness *= 0.65;
      }

      const val = Math.min(255, Math.max(30, Math.floor(brightness)));
      data[idx] = val;
      data[idx + 1] = Math.floor(val * 0.96);
      data[idx + 2] = Math.floor(val * 0.92);
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

/** Draws Venus with swirling sulfuric cream & amber cloud bands. */
function drawVenusTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    const ny = y / size;
    for (let x = 0; x < size; x++) {
      const nx = x / size;
      const idx = (y * size + x) * 4;

      const n = fbm(nx * 6.0 + Math.sin(ny * 8) * 1.5, ny * 4.0, 5);
      const r = Math.floor(225 + n * 28);
      const g = Math.floor(190 + n * 25);
      const b = Math.floor(125 + n * 20);

      data[idx] = Math.min(255, r);
      data[idx + 1] = Math.min(255, g);
      data[idx + 2] = Math.min(255, b);
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

/** Draws Mercury with sun-baked iron-gray crust. */
function drawMercuryTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const n = fbm((x / size) * 10, (y / size) * 5, 5);
      const val = Math.floor(120 + n * 70);
      data[idx] = val;
      data[idx + 1] = Math.floor(val * 0.94);
      data[idx + 2] = Math.floor(val * 0.88);
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

/** Draws Europa with smooth pale ice crust and reddish-brown tectonic fracture lineae. */
function drawEuropaTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const nx = (x / size) * 8.0;
      const ny = (y / size) * 4.0;

      const ice = fbm(nx, ny, 4);
      const cracks = Math.abs(Math.sin(nx * 4.0 + ny * 6.0 + ice * 3.0));

      let r = Math.floor(230 + ice * 25);
      let g = Math.floor(225 + ice * 25);
      let b = Math.floor(215 + ice * 25);

      if (cracks < 0.18) {
        // Reddish-brown mineral fracture lines
        const crackStrength = (0.18 - cracks) / 0.18;
        r = Math.floor(r * (1 - crackStrength) + 165 * crackStrength);
        g = Math.floor(g * (1 - crackStrength) + 95 * crackStrength);
        b = Math.floor(b * (1 - crackStrength) + 65 * crackStrength);
      }

      data[idx] = r;
      data[idx + 1] = g;
      data[idx + 2] = b;
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

/** Draws Titan with smooth dense orange photochemical haze. */
function drawTitanTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    const ny = y / size;
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const n = fbm((x / size) * 3, ny * 3, 3);
      const r = Math.floor(225 + n * 25);
      const g = Math.floor(145 + n * 20);
      const b = Math.floor(65 + n * 15);
      data[idx] = r;
      data[idx + 1] = g;
      data[idx + 2] = b;
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

/** Draws Uranus with soft pale aquamarine gas globe. */
function drawUranusTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    const ny = y / size;
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const n = Math.sin(ny * Math.PI * 8) * 0.05;
      data[idx] = Math.floor(175 + n * 30);
      data[idx + 1] = Math.floor(225 + n * 20);
      data[idx + 2] = Math.floor(235 + n * 20);
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

/** Draws Neptune with deep azure blue atmosphere and subtle cirrus cloud bands. */
function drawNeptuneTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    const ny = y / size;
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const n = fbm((x / size) * 6, ny * 8, 4);
      let r = Math.floor(45 + n * 25);
      let g = Math.floor(95 + n * 35);
      let b = Math.floor(215 + n * 35);

      // Bright white cirrus storm streaks
      if (n > 0.72) {
        const storm = (n - 0.72) / 0.28;
        r = Math.floor(r * (1 - storm) + 240 * storm);
        g = Math.floor(g * (1 - storm) + 245 * storm);
        b = Math.floor(b * (1 - storm) + 255 * storm);
      }

      data[idx] = r;
      data[idx + 1] = g;
      data[idx + 2] = b;
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

function drawGenericRockyTexture(ctx, size) {
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const n = fbm((x / size) * 6, (y / size) * 6, 4);
      const val = Math.floor(140 + n * 60);
      data[idx] = val;
      data[idx + 1] = Math.floor(val * 0.9);
      data[idx + 2] = Math.floor(val * 0.85);
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}
