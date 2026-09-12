/**
 * @file RadarCanvas.js
 * A small 2D top-down radar showing nearby objects relative to the ship,
 * drawn on a plain <canvas> for cheap, dependency-free rendering.
 */

export class RadarCanvas {
  /**
   * @param {HTMLElement} root
   * @param {{ range?: number }} [options] - range: scene units shown edge-to-edge.
   */
  constructor(root, { range = 20 } = {}) {
    if (!root) throw new Error("RadarCanvas requires a root element");
    this.root = root;
    this.range = range;
    this.root.innerHTML = '<canvas class="radar-canvas" width="140" height="140" aria-label="Radar"></canvas>';
    this.canvas = this.root.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  /**
   * @param {{x:number, z:number}} shipPos
   * @param {number} shipHeadingRad
   * @param {Array<{x:number, z:number, color?: string}>} blips
   */
  render(shipPos, shipHeadingRad, blips) {
    const ctx = this.ctx;
    if (!ctx) return;
    const { width, height } = this.canvas;
    const cx = width / 2;
    const cy = height / 2;
    const scale = (width / 2 - 8) / this.range;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(20, 18, 30, 0.55)";
    ctx.beginPath();
    ctx.arc(cx, cy, width / 2 - 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(255, 220, 180, 0.25)";
    ctx.beginPath();
    ctx.arc(cx, cy, width / 2 - 2, 0, Math.PI * 2);
    ctx.stroke();

    for (const blip of blips ?? []) {
      const relX = blip.x - shipPos.x;
      const relZ = blip.z - shipPos.z;
      const rotated = rotate(relX, relZ, -shipHeadingRad);
      const px = cx + rotated.x * scale;
      const py = cy + rotated.y * scale;
      if (Math.hypot(px - cx, py - cy) > width / 2 - 4) continue;
      ctx.fillStyle = blip.color ?? "#ffd27a";
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Ship marker at center.
    ctx.fillStyle = "#fff6e6";
    ctx.beginPath();
    ctx.moveTo(cx, cy - 5);
    ctx.lineTo(cx - 4, cy + 4);
    ctx.lineTo(cx + 4, cy + 4);
    ctx.closePath();
    ctx.fill();
  }
}

function rotate(x, z, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: x * cos - z * sin, y: x * sin + z * cos };
}
