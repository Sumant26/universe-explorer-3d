/**
 * @file SatelliteList.js
 * A browsable panel of every real satellite/probe humanity has launched
 * that's included in this app. Clicking one selects it as the travel target,
 * same as picking it from the search bar.
 */

import { SATELLITES } from "../celestial/SatelliteData.js";
import { Actions } from "../state/StateActions.js";

export class SatelliteList {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   * @param {{ onSelect?: (satelliteId: string) => void }} [handlers]
   */
  constructor(root, store, handlers = {}) {
    if (!root) throw new Error("SatelliteList requires a root element");
    this.root = root;
    this.store = store;
    this._onSelect = handlers.onSelect ?? (() => {});
    this._unsubscribe = store.subscribe(
      (open) => this._render(open),
      (s) => s.ui.isSatelliteListOpen
    );
    this._render(store.getState().ui.isSatelliteListOpen);
  }

  toggle(force) {
    this.store.dispatch(Actions.toggleSatelliteList(force));
  }

  /** @private @param {boolean} open */
  _render(open) {
    if (!open) {
      this.root.innerHTML = "";
      this.root.hidden = true;
      return;
    }
    this.root.hidden = false;
    this.root.innerHTML = `
      <div class="satellite-list">
        <div class="satellite-list-header">
          <h3>Launched satellites &amp; probes</h3>
          <button type="button" class="satellite-list-close" aria-label="Close satellite list">&times;</button>
        </div>
        <ul>
          ${SATELLITES.map(
            (s) => `
            <li class="satellite-item" data-id="${s.id}">
              <span class="satellite-name">${escapeHtml(s.name)}</span>
              <span class="satellite-meta">${escapeHtml(s.agency)} · ${s.launchYear} · ${escapeHtml(s.status)}</span>
            </li>`
          ).join("")}
        </ul>
      </div>
    `;
    this.root.querySelector(".satellite-list-close")?.addEventListener("click", () => this.toggle(false));
    this.root.querySelectorAll(".satellite-item").forEach((el) => {
      el.addEventListener("click", () => this._onSelect(el.getAttribute("data-id")));
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
