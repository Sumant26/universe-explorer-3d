/**
 * @file ViewSwitcher.js
 * Camera view mode buttons (Cockpit, 3rd-Person, Cinematic) plus quick utility buttons
 * for Constellations (O), Photo Mode (P), Expedition Logbook (L), and Space Radio (R).
 */

import { Actions, CameraMode } from "../state/StateActions.js";

const VIEW_ORDER = [CameraMode.COCKPIT, CameraMode.THIRD_PERSON, CameraMode.CINEMATIC];
const VIEW_LABELS = {
  [CameraMode.COCKPIT]: "Cockpit",
  [CameraMode.THIRD_PERSON]: "3rd Person",
  [CameraMode.CINEMATIC]: "Cinematic",
};

export class ViewSwitcher {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   * @param {{ onToggleRadio?: () => void }} [options]
   */
  constructor(root, store, options = {}) {
    if (!root) throw new Error("ViewSwitcher requires a root element");
    this.root = root;
    this.store = store;
    this.onToggleRadio = options.onToggleRadio;
    this._render();
    this._unsubscribe = store.subscribe(
      ({ mode, constellations }) => {
        this._highlight(mode);
        this._highlightConstellations(constellations);
      },
      (s) => ({
        mode: s.cameraMode,
        constellations: s.ui.constellationsVisible,
      })
    );
    this._highlight(store.getState().cameraMode);
  }

  /** @private */
  _render() {
    this.root.innerHTML = `
      <div class="view-switcher-container">
        <div class="view-switcher" role="group" aria-label="Camera view">
          ${VIEW_ORDER.map(
            (mode) => `<button type="button" class="view-btn" data-mode="${mode}">${VIEW_LABELS[mode]}</button>`
          ).join("")}
        </div>

        <div class="quick-tools-bar" role="group" aria-label="Exploration Tools">
          <button type="button" class="tool-btn" id="btn-toggle-constellations" title="Toggle Constellation Star Charts (O)">✨ Charts</button>
          <button type="button" class="tool-btn" id="btn-toggle-photo" title="Open Photo Studio (P)">📷 Photo</button>
          <button type="button" class="tool-btn" id="btn-toggle-logbook" title="Expedition Journal (L)">📖 Journal</button>
          <button type="button" class="tool-btn" id="btn-toggle-radio" title="Space Radio (R)">📻 Radio</button>
          <button type="button" class="tool-btn" id="btn-toggle-seti" title="SETI Waterfall Scanner (U)">📡 SETI</button>
          <button type="button" class="tool-btn" id="btn-toggle-eng" title="Ship Engineering Bay (E)">🛠️ Upgrades</button>
          <button type="button" class="tool-btn" id="btn-toggle-genesis" title="Star System Genesis (G)">🌟 Genesis</button>
        </div>
      </div>
    `;

    this.root.querySelectorAll(".view-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.store.dispatch(Actions.setCameraMode(btn.getAttribute("data-mode")));
      });
    });

    this.root.querySelector("#btn-toggle-constellations")?.addEventListener("click", () => {
      this.store.dispatch(Actions.toggleConstellations());
    });

    this.root.querySelector("#btn-toggle-photo")?.addEventListener("click", () => {
      this.store.dispatch(Actions.togglePhotoMode(true));
    });

    this.root.querySelector("#btn-toggle-logbook")?.addEventListener("click", () => {
      this.store.dispatch(Actions.toggleLogbook(true));
    });

    this.root.querySelector("#btn-toggle-radio")?.addEventListener("click", () => {
      this.onToggleRadio?.();
    });

    this.root.querySelector("#btn-toggle-seti")?.addEventListener("click", () => {
      this.store.dispatch({ type: "TOGGLE_SETI_SCANNER" });
    });

    this.root.querySelector("#btn-toggle-eng")?.addEventListener("click", () => {
      this.store.dispatch({ type: "TOGGLE_ENGINEERING_BAY" });
    });

    this.root.querySelector("#btn-toggle-genesis")?.addEventListener("click", () => {
      this.store.dispatch({ type: "TOGGLE_SANDBOX_MODE" });
    });
  }

  /** Cycles to the next camera mode, used by the <kbd>C</kbd> shortcut. */
  cycle() {
    const current = this.store.getState().cameraMode;
    const idx = VIEW_ORDER.indexOf(current);
    const next = VIEW_ORDER[(idx + 1) % VIEW_ORDER.length];
    this.store.dispatch(Actions.setCameraMode(next));
  }

  /** @private @param {string} mode */
  _highlight(mode) {
    this.root.querySelectorAll(".view-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-mode") === mode);
    });
  }

  /** @private @param {boolean} visible */
  _highlightConstellations(visible) {
    const btn = this.root.querySelector("#btn-toggle-constellations");
    if (btn) btn.classList.toggle("active", Boolean(visible));
  }

  dispose() {
    this._unsubscribe?.();
  }
}
