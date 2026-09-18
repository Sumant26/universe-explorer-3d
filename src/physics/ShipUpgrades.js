export const UPGRADE_CATALOG = {
  IONIZED_THERMAL_SHIELDS: {
    id: "IONIZED_THERMAL_SHIELDS",
    name: "Ionized Thermal Shields",
    cost: 150,
    category: "Defense",
    icon: "🛡️",
    description: "Reduces re-entry heating and atmospheric drag friction by 50% for deep atmospheric skimming.",
    effects: {
      heatReduction: 0.5,
      dragTolerance: 1.5,
    },
  },
  QUANTUM_BIOSIGNATURE_SENSOR: {
    id: "QUANTUM_BIOSIGNATURE_SENSOR",
    name: "Quantum Biosignature Sensor",
    cost: 200,
    category: "Sensors",
    icon: "🔬",
    description: "Demodulates spectral absorption lines to highlight methane, oxygen, and organic biosignatures.",
    effects: {
      biosignatureRange: 25000,
      spectralDetail: 2.0,
    },
  },
  PHOTONIC_DRIFT_THRUSTERS: {
    id: "PHOTONIC_DRIFT_THRUSTERS",
    name: "Photonic Drift Thrusters",
    cost: 250,
    category: "Propulsion",
    icon: "⚡",
    description: "Boosts sublight engine cruise velocity by 50% and improves angular maneuverability.",
    effects: {
      speedMultiplier: 1.5,
      maneuverabilityMultiplier: 1.25,
    },
  },
  GRAVITON_STABILIZER: {
    id: "GRAVITON_STABILIZER",
    name: "Graviton Hull Stabilizer",
    cost: 300,
    category: "Hull",
    icon: "🌀",
    description:
      "Nullifies extreme tidal shear forces when traversing Einstein-Rosen bridges and black hole event horizons.",
    effects: {
      tidalResistance: 1.0,
      wormholeStability: 1.0,
    },
  },
};

export class ShipUpgrades {
  static getCatalog() {
    return Object.values(UPGRADE_CATALOG);
  }

  static getUpgrade(id) {
    return UPGRADE_CATALOG[id] || null;
  }

  static canUnlock(id, discoveryPoints, unlockedUpgrades = []) {
    const upgrade = this.getUpgrade(id);
    if (!upgrade) return false;
    if (unlockedUpgrades.includes(id)) return false;
    return discoveryPoints >= upgrade.cost;
  }

  static computeActiveModifiers(installedUpgrades = []) {
    const modifiers = {
      heatReduction: 1.0,
      speedMultiplier: 1.0,
      maneuverabilityMultiplier: 1.0,
      biosignatureEnabled: false,
      gravitonShielded: false,
    };

    installedUpgrades.forEach((id) => {
      const upgrade = UPGRADE_CATALOG[id];
      if (!upgrade) return;

      if (upgrade.effects.heatReduction) {
        modifiers.heatReduction *= upgrade.effects.heatReduction;
      }
      if (upgrade.effects.speedMultiplier) {
        modifiers.speedMultiplier *= upgrade.effects.speedMultiplier;
      }
      if (upgrade.effects.maneuverabilityMultiplier) {
        modifiers.maneuverabilityMultiplier *= upgrade.effects.maneuverabilityMultiplier;
      }
      if (upgrade.id === "QUANTUM_BIOSIGNATURE_SENSOR") {
        modifiers.biosignatureEnabled = true;
      }
      if (upgrade.id === "GRAVITON_STABILIZER") {
        modifiers.gravitonShielded = true;
      }
    });

    return modifiers;
  }
}
