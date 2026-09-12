/**
 * @file HabitabilityMatrix.js
 * An expandable breakdown of the habitability sub-scores (temperature,
 * pressure, gravity, radiation, water) for the selected object, so the
 * headline score in DetailPanel can be explained rather than just trusted.
 */

import { getCelestialBodyById } from "../celestial/CelestialData.js";
import { computeHabitability } from "../physics/HabitabilityEngine.js";
import { Actions } from "../state/StateActions.js";

const FACTOR_LABELS = {
  temperature: "Temperature",
  pressure: "Atmospheric pressure",
  gravity: "Surface gravity",
  radiation: "Radiation shielding",
  water: "Liquid water",
};

export class HabitabilityMatrix {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   */
  constructor(root, store) {
    if (!root) throw new Error("HabitabilityMatrix requires a root element");
    this.root = root;
    this.store = store;
    this._unsubscribe = store.subscribe(
      () => this._render(),
      (s) => `${s.selectedObject}|${s.ui.isHabitabilityOpen}`
    );
    this._render();
  }

  /** @private */
  _render() {
    const state = this.store.getState();
    if (!state.ui.isHabitabilityOpen) {
      this.root.innerHTML = "";
      this.root.hidden = true;
      return;
    }
    const body = getCelestialBodyById(state.selectedObject);
    if (!body) {
      this.root.hidden = true;
      return;
    }

    let result;
    try {
      result = computeHabitability(body.environment);
    } catch (err) {
      console.error("[HabitabilityMatrix] compute failed:", err);
      this.root.hidden = true;
      return;
    }

    this.root.hidden = false;
    this.root.innerHTML = `
      <div class="habitability-matrix">
        <button type="button" class="matrix-close" aria-label="Close habitability breakdown">&times;</button>
        <h3>Habitability breakdown — ${escapeHtml(body.name)}</h3>
        <p class="matrix-classification">${escapeHtml(result.classification)}</p>
        <ul class="matrix-factors">
          ${Object.entries(result.factors)
            .map(
              ([key, value]) => `
              <li>
                <span class="factor-label">${escapeHtml(FACTOR_LABELS[key] ?? key)}</span>
                <div class="factor-bar"><div class="factor-bar-fill" style="width:${Math.round(value * 100)}%"></div></div>
              </li>`
            )
            .join("")}
        </ul>
      </div>
    `;
    this.root.querySelector(".matrix-close")?.addEventListener("click", () => {
      this.store.dispatch(Actions.toggleHabitability(false));
    });
  }

  dispose() {
    this._unsubscribe?.();
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}
