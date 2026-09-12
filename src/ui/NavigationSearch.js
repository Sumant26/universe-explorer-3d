/**
 * @file NavigationSearch.js
 * The search bar: type an astronomical object or satellite name, pick a
 * result, and the ship starts traveling there (autopilot warp, or a manual
 * hand-flown cruise guided by the compass arrow, depending on flight mode).
 */

import { searchUniverse } from "../celestial/SearchIndex.js";
import { Actions, FlightMode } from "../state/StateActions.js";

export class NavigationSearch {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   * @param {{ onSelect?: (result: import('../celestial/SearchIndex.js').SearchResult) => void }} [handlers]
   */
  constructor(root, store, handlers = {}) {
    if (!root) throw new Error("NavigationSearch requires a root element");
    this.root = root;
    this.store = store;
    this._onSelect = handlers.onSelect ?? (() => {});
    this._results = [];
    this._activeIndex = -1;

    this._render();
    this._bindEvents();
    this._unsubscribe = store.subscribe(
      (mode) => this._updateModeButton(mode),
      (s) => s.flightMode
    );
  }

  /** @private */
  _render() {
    this.root.innerHTML = `
      <div class="nav-search" role="search">
        <label class="visually-hidden" for="search-input">Search an astronomical object or satellite</label>
        <input id="search-input" class="nav-search-input" type="text" autocomplete="off"
               placeholder="Search a planet, star, galaxy, or satellite…" />
        <button type="button" class="mode-toggle" title="Toggle autopilot / manual flight mode">
          Autopilot
        </button>
        <ul class="nav-search-results" hidden></ul>
      </div>
    `;
    this._input = this.root.querySelector(".nav-search-input");
    this._resultsEl = this.root.querySelector(".nav-search-results");
    this._modeButton = this.root.querySelector(".mode-toggle");
  }

  /** @private */
  _bindEvents() {
    this._input.addEventListener("input", () => this._handleInput());
    this._input.addEventListener("keydown", (event) => this._handleKeydown(event));
    this._modeButton.addEventListener("click", () => this._toggleMode());
    document.addEventListener("click", (event) => {
      if (!this.root.contains(event.target)) this._closeResults();
    });
  }

  /** @private */
  _handleInput() {
    const query = this._input.value;
    this.store.dispatch(Actions.setSearchQuery(query));
    try {
      this._results = searchUniverse(query);
    } catch (err) {
      console.error("[NavigationSearch] search failed:", err);
      this._results = [];
    }
    this._activeIndex = this._results.length > 0 ? 0 : -1;
    this._renderResults();
  }

  /** @private @param {KeyboardEvent} event */
  _handleKeydown(event) {
    if (this._results.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this._activeIndex = (this._activeIndex + 1) % this._results.length;
      this._renderResults();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this._activeIndex = (this._activeIndex - 1 + this._results.length) % this._results.length;
      this._renderResults();
    } else if (event.key === "Enter") {
      event.preventDefault();
      const chosen = this._results[this._activeIndex] ?? this._results[0];
      if (chosen) this._selectResult(chosen);
    } else if (event.key === "Escape") {
      this._closeResults();
    }
  }

  /** @private */
  _renderResults() {
    if (this._results.length === 0) {
      this._resultsEl.hidden = true;
      this._resultsEl.innerHTML = "";
      return;
    }
    this._resultsEl.hidden = false;
    this._resultsEl.innerHTML = this._results
      .map(
        (r, i) => `
        <li role="option" data-index="${i}" class="nav-result ${i === this._activeIndex ? "active" : ""}">
          <span class="nav-result-name">${escapeHtml(r.name)}</span>
          <span class="nav-result-sub">${escapeHtml(r.subtitle)}</span>
        </li>`
      )
      .join("");
    this._resultsEl.querySelectorAll(".nav-result").forEach((el) => {
      el.addEventListener("click", () => {
        const index = Number(el.getAttribute("data-index"));
        const result = this._results[index];
        if (result) this._selectResult(result);
      });
    });
  }

  /** @private */
  _selectResult(result) {
    this._input.value = result.name;
    this._closeResults();
    this._onSelect(result);
  }

  /** @private */
  _closeResults() {
    this._results = [];
    this._activeIndex = -1;
    this._resultsEl.hidden = true;
    this._resultsEl.innerHTML = "";
  }

  /** @private */
  _toggleMode() {
    const current = this.store.getState().flightMode;
    const next = current === FlightMode.AUTOPILOT ? FlightMode.MANUAL : FlightMode.AUTOPILOT;
    this.store.dispatch(Actions.setFlightMode(next));
  }

  /** @private @param {string} mode */
  _updateModeButton(mode) {
    const isManual = mode === FlightMode.MANUAL;
    this._modeButton.textContent = isManual ? "Manual" : "Autopilot";
    this._modeButton.classList.toggle("mode-manual", isManual);
    this._modeButton.setAttribute(
      "aria-label",
      isManual ? "Switch to autopilot flight" : "Switch to manual, hand-flown navigation"
    );
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
