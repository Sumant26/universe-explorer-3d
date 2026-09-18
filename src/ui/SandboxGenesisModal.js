import { STAR_PRESETS, PLANET_PRESETS } from "../celestial/StarSystemGenesis.js";
import { TOGGLE_SANDBOX_MODE, ADD_SANDBOX_BODY, CLEAR_SANDBOX } from "../state/StateActions.js";

export class SandboxGenesisModal {
  constructor(store, genesisEngine) {
    this.store = store;
    this.genesis = genesisEngine;
    this.container = null;
    this.isOpen = false;
    this.selectedStarKey = "YELLOW_DWARF";
    this.selectedPlanetKey = "TERRESTRIAL";
    this.selectedDistance = 2500;

    this.init();
    this.store.subscribe((state) => this.render(state));
  }

  init() {
    this.container = document.createElement("div");
    this.container.id = "sandbox-genesis-modal";
    this.container.className = "sandbox-modal-backdrop hidden";
    document.body.appendChild(this.container);

    this.container.addEventListener("click", (e) => {
      if (e.target === this.container) {
        this.store.dispatch({ type: TOGGLE_SANDBOX_MODE });
      }
    });
  }

  render(state) {
    if (this.isOpen !== state.isSandboxModeOpen) {
      this.isOpen = state.isSandboxModeOpen;
      if (this.isOpen) {
        this.container.classList.remove("hidden");
      } else {
        this.container.classList.add("hidden");
        return;
      }
    }

    if (!this.isOpen) return;

    const star = STAR_PRESETS[this.selectedStarKey];
    const hz = this.genesis.calculateHabitableZone(star.luminosity);

    let starOptions = "";
    Object.entries(STAR_PRESETS).forEach(([key, s]) => {
      const isSelected = key === this.selectedStarKey;
      starOptions += `<option value="${key}" ${isSelected ? "selected" : ""}>${s.name}</option>`;
    });

    let planetOptions = "";
    Object.entries(PLANET_PRESETS).forEach(([key, p]) => {
      const isSelected = key === this.selectedPlanetKey;
      planetOptions += `<option value="${key}" ${isSelected ? "selected" : ""}>${p.name}</option>`;
    });

    const planetCount = this.genesis.planets.length;

    this.container.innerHTML = `
      <div class="sandbox-panel glassmorphism">
        <div class="sandbox-header">
          <div class="sandbox-header-left">
            <span class="sandbox-icon">🌟</span>
            <div>
              <h2 class="sandbox-main-title">STAR SYSTEM GENESIS</h2>
              <p class="sandbox-subtitle">Procedural Planetary Sandbox & Habitable Zone Simulator</p>
            </div>
          </div>
          <button class="sandbox-close-btn" id="sandbox-close-btn">✕</button>
        </div>

        <div class="sandbox-body">
          <!-- Star Forge Section -->
          <div class="sandbox-section">
            <h3 class="sandbox-section-title">1. STELLAR CORE FORGE</h3>
            <div class="sandbox-control-row">
              <label class="sandbox-label">Select Spectral Class:</label>
              <select class="sandbox-select" id="star-select">
                ${starOptions}
              </select>
            </div>

            <div class="sandbox-metrics-grid">
              <div class="sandbox-metric">
                <span class="m-label">Mass:</span>
                <span class="m-val">${star.mass} M☉</span>
              </div>
              <div class="sandbox-metric">
                <span class="m-label">Luminosity:</span>
                <span class="m-val">${star.luminosity} L☉</span>
              </div>
              <div class="sandbox-metric">
                <span class="m-label">Surface Temp:</span>
                <span class="m-val">${star.temperature}</span>
              </div>
              <div class="sandbox-metric highlight-green">
                <span class="m-label">Goldilocks Zone:</span>
                <span class="m-val">${hz.innerAU.toFixed(2)} - ${hz.outerAU.toFixed(2)} AU</span>
              </div>
            </div>

            <button class="sandbox-btn primary" id="spawn-star-btn">☀️ IGNITE STAR</button>
          </div>

          <!-- Planetary Accretion Section -->
          <div class="sandbox-section">
            <h3 class="sandbox-section-title">2. PLANETARY ACCRETION DISK</h3>
            <div class="sandbox-control-row">
              <label class="sandbox-label">Planet Composition:</label>
              <select class="sandbox-select" id="planet-select">
                ${planetOptions}
              </select>
            </div>

            <div class="sandbox-control-row">
              <label class="sandbox-label">Orbital Semi-Major Axis: <span id="dist-display">${this.selectedDistance} units (${(this.selectedDistance / 2500).toFixed(2)} AU)</span></label>
              <input type="range" min="800" max="8000" step="100" value="${this.selectedDistance}" class="sandbox-slider" id="dist-slider" />
            </div>

            <div class="sandbox-actions-row">
              <button class="sandbox-btn accent" id="add-planet-btn">🪐 ACCRETE PLANET</button>
              <button class="sandbox-btn danger" id="clear-sandbox-btn">💥 CLEAR SYSTEM (${planetCount})</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Wire listeners
    const closeBtn = this.container.querySelector("#sandbox-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        this.store.dispatch({ type: TOGGLE_SANDBOX_MODE });
      });
    }

    const starSelect = this.container.querySelector("#star-select");
    if (starSelect) {
      starSelect.addEventListener("change", (e) => {
        this.selectedStarKey = e.target.value;
        this.render(this.store.getState());
      });
    }

    const planetSelect = this.container.querySelector("#planet-select");
    if (planetSelect) {
      planetSelect.addEventListener("change", (e) => {
        this.selectedPlanetKey = e.target.value;
      });
    }

    const distSlider = this.container.querySelector("#dist-slider");
    const distDisplay = this.container.querySelector("#dist-display");
    if (distSlider && distDisplay) {
      distSlider.addEventListener("input", (e) => {
        this.selectedDistance = parseInt(e.target.value, 10);
        distDisplay.textContent = `${this.selectedDistance} units (${(this.selectedDistance / 2500).toFixed(2)} AU)`;
      });
    }

    const spawnStarBtn = this.container.querySelector("#spawn-star-btn");
    if (spawnStarBtn) {
      spawnStarBtn.addEventListener("click", () => {
        this.genesis.spawnStar(this.selectedStarKey);
        this.render(this.store.getState());
      });
    }

    const addPlanetBtn = this.container.querySelector("#add-planet-btn");
    if (addPlanetBtn) {
      addPlanetBtn.addEventListener("click", () => {
        this.genesis.addPlanet({
          typeKey: this.selectedPlanetKey,
          distance: this.selectedDistance,
          speed: 0.15 + (3000 / this.selectedDistance) * 0.1,
        });
        this.store.dispatch({
          type: ADD_SANDBOX_BODY,
          payload: { type: this.selectedPlanetKey, distance: this.selectedDistance },
        });
        this.render(this.store.getState());
      });
    }

    const clearBtn = this.container.querySelector("#clear-sandbox-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        this.genesis.clearSystem();
        this.store.dispatch({ type: CLEAR_SANDBOX });
        this.render(this.store.getState());
      });
    }
  }
}
