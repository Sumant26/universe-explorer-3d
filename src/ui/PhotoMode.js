/**
 * @file PhotoMode.js
 * In-game high-resolution camera photo mode and snapshot export studio.
 * Features:
 *  - Field of view (FOV) zoom control
 *  - Cinematic visual color filters (Cozy Film, Deep Cosmos, Retro Amber, Cyberpunk)
 *  - Freezes/unfreezes simulation time
 *  - High-res canvas screenshot snapshot download
 */

import { Actions } from "../state/StateActions.js";

export const PHOTO_FILTERS = [
  { id: "natural", name: "Natural", css: "none" },
  { id: "cozy-film", name: "Cozy Film", css: "sepia(0.25) contrast(1.1) brightness(1.05) saturate(1.15)" },
  { id: "deep-space", name: "Deep Cosmos", css: "contrast(1.25) brightness(0.95) saturate(1.3) hue-rotate(10deg)" },
  { id: "retro-amber", name: "Retro Amber", css: "sepia(0.65) saturate(1.4) hue-rotate(-15deg)" },
  { id: "cyberpunk", name: "Cyberpunk Neon", css: "contrast(1.3) saturate(1.7) hue-rotate(180deg)" },
];

export class PhotoMode {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   * @param {{
   *   canvas: HTMLCanvasElement,
   *   camera: import('three').PerspectiveCamera,
   *   onShowToast?: (msg: string) => void
   * }} options
   */
  constructor(root, store, options) {
    this.root = root;
    this.store = store;
    this.canvas = options.canvas;
    this.camera = options.camera;
    this.onShowToast = options.onShowToast;

    this.activeFilterIndex = 0;
    this.savedFov = this.camera?.fov ?? 60;
    this.isOpen = false;

    this._render();
    this._wireEvents();

    this.store.subscribe(
      (open) => this._onStateChange(open),
      (s) => s.ui.isPhotoModeOpen
    );
  }

  _render() {
    this.root.innerHTML = `
      <div id="photo-mode-overlay" class="photo-mode-container" hidden>
        <div class="photo-mode-frame">
          <div class="photo-grid"></div>
          <div class="photo-badge">📷 PHOTO STUDIO</div>
        </div>

        <div class="photo-mode-bar">
          <div class="photo-control-group">
            <label for="photo-fov-slider">FOV: <span id="photo-fov-val">${Math.round(this.camera?.fov ?? 60)}°</span></label>
            <input type="range" id="photo-fov-slider" min="30" max="105" value="${Math.round(this.camera?.fov ?? 60)}" />
          </div>

          <div class="photo-control-group">
            <label>Filter:</label>
            <div class="photo-filter-buttons">
              ${PHOTO_FILTERS.map(
                (f, idx) => `
                <button type="button" class="photo-filter-btn ${idx === 0 ? "active" : ""}" data-idx="${idx}">
                  ${f.name}
                </button>
              `
              ).join("")}
            </div>
          </div>

          <div class="photo-actions">
            <button type="button" id="photo-snap-btn" class="photo-btn-primary">📸 Capture Snapshot</button>
            <button type="button" id="photo-postcard-btn" class="photo-btn-postcard">💌 Travel Postcard</button>
            <button type="button" id="photo-close-btn" class="photo-btn-secondary">✕ Exit</button>
          </div>
        </div>
      </div>
    `;
  }

  _wireEvents() {
    const fovSlider = this.root.querySelector("#photo-fov-slider");
    const fovVal = this.root.querySelector("#photo-fov-val");
    const snapBtn = this.root.querySelector("#photo-snap-btn");
    const postcardBtn = this.root.querySelector("#photo-postcard-btn");
    const closeBtn = this.root.querySelector("#photo-close-btn");
    const filterBtns = this.root.querySelectorAll(".photo-filter-btn");

    fovSlider?.addEventListener("input", (e) => {
      const val = Number(e.target.value);
      if (fovVal) fovVal.textContent = `${val}°`;
      if (this.camera) {
        this.camera.fov = val;
        this.camera.updateProjectionMatrix();
      }
    });

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const idx = Number(btn.getAttribute("data-idx"));
        this.setFilter(idx);
      });
    });

    snapBtn?.addEventListener("click", () => this.capture());
    postcardBtn?.addEventListener("click", () => this.exportPostcard());
    closeBtn?.addEventListener("click", () => this.close());
  }

  setFilter(index) {
    this.activeFilterIndex = index;
    const filter = PHOTO_FILTERS[index];
    if (this.canvas && filter) {
      this.canvas.style.filter = filter.css;
    }
  }

  capture() {
    if (!this.canvas) return;
    try {
      const dataUrl = this.canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.download = `cosmos-cabin-snapshot-${Date.now()}.png`;
      a.href = dataUrl;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.onShowToast?.("📸 Snapshot saved to your downloads!");
    } catch (err) {
      console.warn("[PhotoMode] Capture failed:", err);
      this.onShowToast?.("Couldn't save snapshot directly.");
    }
  }

  exportPostcard() {
    if (!this.canvas) return;
    try {
      const state = this.store.getState();
      const destName = state.selectedObject ? state.selectedObject.toUpperCase() : "COSMOS CABIN";

      const card = document.createElement("canvas");
      const w = 1280;
      const h = 720;
      card.width = w;
      card.height = h;
      const ctx = card.getContext("2d");

      // Draw photo in center with cream Polaroid/Postcard border
      ctx.fillStyle = "#1b1715";
      ctx.fillRect(0, 0, w, h);

      // Draw 3D scene snapshot
      ctx.drawImage(this.canvas, 40, 40, w - 80, h - 140);

      // Vintage card border frame
      ctx.strokeStyle = "#d4a359";
      ctx.lineWidth = 4;
      ctx.strokeRect(30, 30, w - 60, h - 60);

      // Postcard Header & Stamp
      ctx.fillStyle = "#ffb854";
      ctx.font = "bold 28px sans-serif";
      ctx.fillText(`★ GREETINGS FROM ${destName} ★`, 60, h - 55);

      ctx.fillStyle = "#ffffff99";
      ctx.font = "16px monospace";
      ctx.fillText(`COSMOS CABIN EXPEDITION • ${new Date().toLocaleDateString()}`, 60, h - 30);

      // Postal stamp box
      ctx.strokeStyle = "#d4a35988";
      ctx.lineWidth = 2;
      ctx.strokeRect(w - 180, h - 95, 130, 55);
      ctx.fillStyle = "#d4a359";
      ctx.font = "12px monospace";
      ctx.fillText("INTERSTELLAR", w - 165, h - 70);
      ctx.fillText("POSTAGE PAID", w - 165, h - 50);

      const dataUrl = card.toDataURL("image/png");
      const a = document.createElement("a");
      a.download = `cosmos-cabin-postcard-${destName.toLowerCase()}-${Date.now()}.png`;
      a.href = dataUrl;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.onShowToast?.("💌 Vintage travel postcard generated & downloaded!");
    } catch (err) {
      console.warn("[PhotoMode] Postcard generation failed:", err);
      this.onShowToast?.("Couldn't generate postcard.");
    }
  }

  _onStateChange(open) {
    this.isOpen = Boolean(open);
    const overlay = this.root.querySelector("#photo-mode-overlay");
    if (overlay) overlay.hidden = !this.isOpen;

    if (this.isOpen) {
      this.savedFov = this.camera?.fov ?? 60;
      this.store.dispatch(Actions.toggleHud(false));
    } else {
      if (this.canvas) this.canvas.style.filter = "none";
      if (this.camera) {
        this.camera.fov = this.savedFov;
        this.camera.updateProjectionMatrix();
      }
      this.store.dispatch(Actions.toggleHud(true));
    }
  }

  open() {
    this.store.dispatch(Actions.togglePhotoMode(true));
  }

  close() {
    this.store.dispatch(Actions.togglePhotoMode(false));
  }
}
