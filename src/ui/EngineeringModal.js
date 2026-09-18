import { ShipUpgrades } from "../physics/ShipUpgrades.js";
import { TOGGLE_ENGINEERING_BAY, UNLOCK_SHIP_UPGRADE } from "../state/StateActions.js";

export class EngineeringModal {
  constructor(store) {
    this.store = store;
    this.container = null;
    this.isOpen = false;

    this.init();
    this.store.subscribe((state) => this.render(state));
  }

  init() {
    this.container = document.createElement("div");
    this.container.id = "engineering-modal";
    this.container.className = "engineering-modal-backdrop hidden";
    document.body.appendChild(this.container);

    this.container.addEventListener("click", (e) => {
      if (e.target === this.container) {
        this.store.dispatch({ type: TOGGLE_ENGINEERING_BAY });
      }
    });
  }

  render(state) {
    if (this.isOpen !== state.isEngineeringBayOpen) {
      this.isOpen = state.isEngineeringBayOpen;
      if (this.isOpen) {
        this.container.classList.remove("hidden");
      } else {
        this.container.classList.add("hidden");
        return;
      }
    }

    if (!this.isOpen) return;

    const catalog = ShipUpgrades.getCatalog();
    const points = state.discoveryPoints || 0;
    const installed = state.installedUpgrades || [];

    let cardsHtml = "";
    catalog.forEach((item) => {
      const isInstalled = installed.includes(item.id);
      const canBuy = points >= item.cost && !isInstalled;

      let actionBtn;
      if (isInstalled) {
        actionBtn = `<span class="eng-badge installed">INSTALLED & ACTIVE</span>`;
      } else if (canBuy) {
        actionBtn = `<button class="eng-btn unlock" data-upgrade-id="${item.id}">INSTALL (${item.cost} DP)</button>`;
      } else {
        actionBtn = `<button class="eng-btn locked" disabled>REQUIRES ${item.cost} DP</button>`;
      }

      cardsHtml += `
        <div class="eng-card ${isInstalled ? "card-installed" : ""}">
          <div class="eng-card-header">
            <span class="eng-icon">${item.icon}</span>
            <div class="eng-title-group">
              <span class="eng-category">${item.category.toUpperCase()}</span>
              <h3 class="eng-name">${item.name}</h3>
            </div>
          </div>
          <p class="eng-desc">${item.description}</p>
          <div class="eng-card-footer">
            <span class="eng-cost">Cost: <strong>${item.cost} DP</strong></span>
            ${actionBtn}
          </div>
        </div>
      `;
    });

    this.container.innerHTML = `
      <div class="engineering-panel glassmorphism">
        <div class="eng-header">
          <div class="eng-header-left">
            <span class="eng-header-icon">🛠️</span>
            <div>
              <h2 class="eng-main-title">SPACESHIP ENGINEERING BAY</h2>
              <p class="eng-subtitle">Modular Avionics & Hull Subsystem Upgrades</p>
            </div>
          </div>
          <div class="eng-header-right">
            <div class="eng-points-pill">
              <span class="eng-pts-label">DISCOVERY BALANCE:</span>
              <span class="eng-pts-value">${points} DP</span>
            </div>
            <button class="eng-close-btn" id="eng-close-btn">✕</button>
          </div>
        </div>

        <div class="eng-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    // Wire event listeners
    const closeBtn = this.container.querySelector("#eng-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        this.store.dispatch({ type: TOGGLE_ENGINEERING_BAY });
      });
    }

    const unlockButtons = this.container.querySelectorAll("button[data-upgrade-id]");
    unlockButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-upgrade-id");
        this.store.dispatch({ type: UNLOCK_SHIP_UPGRADE, payload: id });
      });
    });
  }
}
