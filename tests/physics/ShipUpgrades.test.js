import { describe, it, expect } from "vitest";
import { ShipUpgrades } from "../../src/physics/ShipUpgrades.js";

describe("ShipUpgrades", () => {
  it("returns upgrade catalog with 4 engineering modules", () => {
    const catalog = ShipUpgrades.getCatalog();
    expect(catalog.length).toBe(4);
    expect(catalog.map((u) => u.id)).toContain("IONIZED_THERMAL_SHIELDS");
    expect(catalog.map((u) => u.id)).toContain("PHOTONIC_DRIFT_THRUSTERS");
  });

  it("checks unlock eligibility accurately", () => {
    expect(ShipUpgrades.canUnlock("IONIZED_THERMAL_SHIELDS", 100, [])).toBe(false);
    expect(ShipUpgrades.canUnlock("IONIZED_THERMAL_SHIELDS", 150, [])).toBe(true);
    expect(ShipUpgrades.canUnlock("IONIZED_THERMAL_SHIELDS", 200, ["IONIZED_THERMAL_SHIELDS"])).toBe(false);
    expect(ShipUpgrades.canUnlock("INVALID_ID", 500, [])).toBe(false);
  });

  it("computes active flight modifiers from installed modules", () => {
    const baseline = ShipUpgrades.computeActiveModifiers([]);
    expect(baseline.speedMultiplier).toBe(1.0);
    expect(baseline.heatReduction).toBe(1.0);
    expect(baseline.biosignatureEnabled).toBe(false);

    const upgraded = ShipUpgrades.computeActiveModifiers([
      "IONIZED_THERMAL_SHIELDS",
      "PHOTONIC_DRIFT_THRUSTERS",
      "QUANTUM_BIOSIGNATURE_SENSOR",
      "GRAVITON_STABILIZER",
    ]);
    expect(upgraded.heatReduction).toBe(0.5);
    expect(upgraded.speedMultiplier).toBe(1.5);
    expect(upgraded.maneuverabilityMultiplier).toBe(1.25);
    expect(upgraded.biosignatureEnabled).toBe(true);
    expect(upgraded.gravitonShielded).toBe(true);
  });
});
