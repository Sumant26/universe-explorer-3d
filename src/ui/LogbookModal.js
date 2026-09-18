/**
 * @file LogbookModal.js
 * Expedition Journal and Discovery Logbook.
 * Displays visited celestial worlds, satellites, arrival timestamps,
 * exploration statistics, and unlockable discovery badges.
 */

import { Actions } from "../state/StateActions.js";
import { CELESTIAL_BODIES } from "../celestial/CelestialData.js";
import { SATELLITES } from "../celestial/SatelliteData.js";
import { EXPEDITIONS } from "../celestial/ExpeditionsData.js";

export const BADGES = [
  {
    id: "home-planet",
    name: "🌍 Home Base",
    desc: "Began journey from Earth orbit",
    condition: (disc) => disc.some((d) => d.id === "earth"),
  },
  {
    id: "lunar-reach",
    name: "🌕 Lunar Footsteps",
    desc: "Explored Earth's Moon",
    condition: (disc) => disc.some((d) => d.id === "moon"),
  },
  {
    id: "red-planet",
    name: "🔴 Red Sands",
    desc: "Traveled to Mars",
    condition: (disc) => disc.some((d) => d.id === "mars"),
  },
  {
    id: "gas-giant",
    name: "🪐 Ring & Storms",
    desc: "Visited Jupiter or Saturn",
    condition: (disc) => disc.some((d) => d.id === "jupiter" || d.id === "saturn"),
  },
  {
    id: "singularity",
    name: "🕳️ Event Horizon",
    desc: "Approached Sagittarius A*",
    condition: (disc) => disc.some((d) => d.id === "sagittarius-a-star"),
  },
  {
    id: "satellite-chaser",
    name: "🛰️ Spacecraft Historian",
    desc: "Located at least 2 historical satellites",
    condition: (disc) => disc.filter((d) => d.kind === "satellite").length >= 2,
  },
  {
    id: "badge-voyager",
    name: "🚀 Voyager Pioneer",
    desc: "Completed The Grand Tour: In the Wake of Voyager",
    condition: (disc, state) => state?.completedExpeditions?.some((c) => c.expeditionId === "voyager-grand-tour"),
  },
  {
    id: "badge-astrobiologist",
    name: "🌱 Master Astrobiologist",
    desc: "Completed Habitable Horizons: Searching for Earth 2.0",
    condition: (disc, state) => state?.completedExpeditions?.some((c) => c.expeditionId === "habitable-horizons"),
  },
  {
    id: "badge-singularity",
    name: "🌀 Singularity Navigator",
    desc: "Completed Cosmic Leviathans: Relativistic Monsters",
    condition: (disc, state) => state?.completedExpeditions?.some((c) => c.expeditionId === "cosmic-leviathans"),
  },
];

export class LogbookModal {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   * @param {{ onSelectTarget?: (id: string, kind: string) => void }} options
   */
  constructor(root, store, options = {}) {
    this.root = root;
    this.store = store;
    this.onSelectTarget = options.onSelectTarget;
    this.activeTab = "discoveries";
    this.activeFilter = "all";

    this._render();
    this._wireEvents();

    this.store.subscribe(
      ({ isOpen }) => this._onStateChange(isOpen),
      (s) => ({ isOpen: s.ui.isLogbookOpen, discoveries: s.discoveries, completedExpeditions: s.completedExpeditions })
    );
  }

  _render() {
    this.root.innerHTML = `
      <div id="logbook-modal-backdrop" class="modal-backdrop" hidden>
        <div class="logbook-modal">
          <header class="logbook-header">
            <div class="logbook-title-group">
              <span class="logbook-icon">📖</span>
              <div>
                <h2>Expedition Journal & Tours</h2>
                <p class="logbook-sub">Your ship’s discovery chronicle, story tours, and achievements</p>
              </div>
            </div>
            <button type="button" id="logbook-close-btn" class="modal-close-btn" aria-label="Close Journal">✕</button>
          </header>

          <div class="logbook-nav-tabs">
            <button type="button" class="tab-btn active" data-tab="discoveries">Logbook & Badges</button>
            <button type="button" class="tab-btn" data-tab="expeditions">Guided Expeditions</button>
          </div>

          <div id="tab-content-discoveries" class="logbook-tab-content">
            <section class="logbook-stats-bar">
              <div class="stat-card">
                <span class="stat-label">Worlds Discovered</span>
                <span id="logbook-stat-discovered" class="stat-value">1 / ${CELESTIAL_BODIES.length + SATELLITES.length}</span>
              </div>
              <div class="stat-card">
                <span class="stat-label">Badges Unlocked</span>
                <span id="logbook-stat-badges" class="stat-value">1 / ${BADGES.length}</span>
              </div>
            </section>

            <section class="logbook-badges-section">
              <h3>Discovery Badges</h3>
              <div id="logbook-badges-grid" class="badges-grid"></div>
            </section>

            <section class="logbook-entries-section">
              <div class="entries-filter-bar">
                <button type="button" class="filter-chip active" data-filter="all">All Discovered</button>
                <button type="button" class="filter-chip" data-filter="celestial">Celestial Bodies</button>
                <button type="button" class="filter-chip" data-filter="satellite">Satellites & Probes</button>
              </div>
              <div id="logbook-list" class="logbook-cards-grid"></div>
            </section>
          </div>

          <div id="tab-content-expeditions" class="logbook-tab-content" hidden>
            <section class="expeditions-list-section">
              <h3>Story Tours & Expeditions</h3>
              <div id="expeditions-container" class="expeditions-grid"></div>
            </section>
          </div>
        </div>
      </div>
    `;
  }

  _wireEvents() {
    const backdrop = this.root.querySelector("#logbook-modal-backdrop");
    const closeBtn = this.root.querySelector("#logbook-close-btn");
    const tabBtns = this.root.querySelectorAll(".tab-btn");
    const filterBtns = this.root.querySelectorAll(".filter-chip");

    closeBtn?.addEventListener("click", () => this.close());
    backdrop?.addEventListener("click", (e) => {
      if (e.target === backdrop) this.close();
    });

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeTab = btn.getAttribute("data-tab") || "discoveries";

        const discTab = this.root.querySelector("#tab-content-discoveries");
        const expTab = this.root.querySelector("#tab-content-expeditions");
        if (discTab) discTab.hidden = this.activeTab !== "discoveries";
        if (expTab) expTab.hidden = this.activeTab !== "expeditions";
        if (this.activeTab === "expeditions") this._renderExpeditions();
      });
    });

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeFilter = btn.getAttribute("data-filter") || "all";
        this._updateList();
      });
    });
  }

  _onStateChange(isOpen) {
    const backdrop = this.root.querySelector("#logbook-modal-backdrop");
    if (backdrop) backdrop.hidden = !isOpen;
    if (isOpen) {
      this._updateContent();
      this._renderExpeditions();
    }
  }

  _updateContent() {
    const state = this.store.getState();
    const discoveries = state.discoveries || [];

    const discoveredCountEl = this.root.querySelector("#logbook-stat-discovered");
    if (discoveredCountEl) {
      discoveredCountEl.textContent = `${discoveries.length} / ${CELESTIAL_BODIES.length + SATELLITES.length}`;
    }

    // Render Badges
    const badgesGrid = this.root.querySelector("#logbook-badges-grid");
    if (badgesGrid) {
      let unlockedCount = 0;
      badgesGrid.innerHTML = BADGES.map((b) => {
        const unlocked = b.condition(discoveries, state);
        if (unlocked) unlockedCount++;
        return `
          <div class="badge-item ${unlocked ? "unlocked" : "locked"}">
            <span class="badge-icon">${unlocked ? b.name.split(" ")[0] : "🔒"}</span>
            <div class="badge-info">
              <strong>${b.name}</strong>
              <p>${b.desc}</p>
            </div>
          </div>
        `;
      }).join("");

      const badgeStatEl = this.root.querySelector("#logbook-stat-badges");
      if (badgeStatEl) {
        badgeStatEl.textContent = `${unlockedCount} / ${BADGES.length}`;
      }
    }

    this._updateList();
  }

  _renderExpeditions() {
    const container = this.root.querySelector("#expeditions-container");
    if (!container) return;

    const state = this.store.getState();
    const activeExp = state.activeExpedition;
    const completed = state.completedExpeditions || [];

    container.innerHTML = EXPEDITIONS.map((exp) => {
      const isCompleted = completed.some((c) => c.expeditionId === exp.id);
      const isActive = activeExp && activeExp.id === exp.id;
      const currentStep = isActive ? activeExp.currentStepIndex : 0;

      const waypointsHtml = exp.waypoints
        .map((wp, idx) => {
          const stepDone = isCompleted || (isActive && idx < currentStep);
          const stepActive = isActive && idx === currentStep;
          return `
            <div class="expedition-waypoint ${stepDone ? "done" : stepActive ? "active" : ""}">
              <span class="wp-dot">${stepDone ? "✓" : idx + 1}</span>
              <div class="wp-info">
                <strong>${wp.title}</strong>
                <p>${wp.briefing}</p>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <div class="expedition-card ${isActive ? "card-active" : isCompleted ? "card-completed" : ""}">
          <div class="expedition-card-header">
            <span class="exp-icon">${exp.icon}</span>
            <div>
              <h4>${exp.title}</h4>
              <p class="exp-sub">${exp.subtitle}</p>
            </div>
            ${isCompleted ? '<span class="status-pill completed">Completed 🏆</span>' : isActive ? '<span class="status-pill active">In Progress 🚀</span>' : ""}
          </div>
          <p class="exp-desc">${exp.description}</p>
          <div class="expedition-waypoints-list">${waypointsHtml}</div>
          <div class="expedition-card-footer">
            <div class="exp-reward">
              <span>Reward:</span> <strong>${exp.badge.name} ${exp.badge.icon}</strong>
            </div>
            <button type="button" class="exp-action-btn" data-exp-id="${exp.id}" ${isCompleted ? "disabled" : ""}>
              ${isActive ? "Continue Tour ➔" : isCompleted ? "Tour Finished" : "Start Expedition"}
            </button>
          </div>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".exp-action-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const expId = btn.getAttribute("data-exp-id");
        if (!expId) return;
        const exp = EXPEDITIONS.find((e) => e.id === expId);
        if (!exp) return;

        const state = this.store.getState();
        if (!state.activeExpedition || state.activeExpedition.id !== expId) {
          this.store.dispatch(Actions.startExpedition(expId));
        }

        const activeTarget = exp.waypoints[0].targetId;
        this.close();
        this.onSelectTarget?.(activeTarget, "celestial");
      });
    });
  }

  _updateList() {
    const listEl = this.root.querySelector("#logbook-list");
    if (!listEl) return;

    const state = this.store.getState();
    const discoveries = state.discoveries || [];

    const filtered = discoveries.filter((d) => {
      if (this.activeFilter === "all") return true;
      if (this.activeFilter === "satellite") return d.kind === "satellite";
      return d.kind !== "satellite";
    });

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="logbook-empty">No discoveries in this category yet. Take flight and explore the stars!</div>`;
      return;
    }

    listEl.innerHTML = filtered
      .map((item) => {
        const dateStr = item.discoveredAt
          ? new Date(item.discoveredAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          : "Initial";
        return `
          <div class="logbook-card">
            <div class="logbook-card-header">
              <span class="card-name">${item.name}</span>
              <span class="card-tag ${item.kind === "satellite" ? "tag-satellite" : "tag-body"}">${item.kind || "World"}</span>
            </div>
            <div class="logbook-card-footer">
              <span class="card-time">Discovered at: ${dateStr}</span>
              <button type="button" class="logbook-fly-btn" data-id="${item.id}" data-kind="${item.kind || "celestial"}">Fly There ➔</button>
            </div>
          </div>
        `;
      })
      .join("");

    listEl.querySelectorAll(".logbook-fly-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const kind = btn.getAttribute("data-kind");
        if (id) {
          this.close();
          this.onSelectTarget?.(id, kind);
        }
      });
    });
  }

  open() {
    this.store.dispatch(Actions.toggleLogbook(true));
  }

  close() {
    this.store.dispatch(Actions.toggleLogbook(false));
  }
}
