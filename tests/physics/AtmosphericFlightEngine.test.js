import { describe, it, expect } from "vitest";
import { calculateAtmosphericDensity, calculateReentryHeating } from "../../src/physics/AtmosphericFlightEngine.js";

describe("AtmosphericFlightEngine", () => {
  it("calculates zero density in deep space far from atmosphere", () => {
    const result = calculateAtmosphericDensity(50000, 6371, 10, 1.0);
    expect(result.inAtmosphere).toBe(false);
    expect(result.densityFraction).toBe(0);
    expect(result.pressureAtm).toBe(0);
  });

  it("calculates full surface density at planet radius", () => {
    const result = calculateAtmosphericDensity(6371, 6371, 10, 1.0);
    expect(result.inAtmosphere).toBe(true);
    expect(result.densityFraction).toBeCloseTo(1.0, 3);
    expect(result.pressureAtm).toBeCloseTo(1.0, 3);
  });

  it("calculates exponential decay of atmospheric pressure with altitude", () => {
    const scaleHeight = 10;
    const result = calculateAtmosphericDensity(6371 + scaleHeight, 6371, scaleHeight, 1.0);
    expect(result.inAtmosphere).toBe(true);
    expect(result.densityFraction).toBeCloseTo(1 / Math.E, 2);
  });

  it("calculates re-entry plasma heating and drag at high velocity", () => {
    const slowReentry = calculateReentryHeating(5, 0.8, 15);
    expect(slowReentry.heatIntensity).toBe(0);
    expect(slowReentry.dragForce).toBeGreaterThan(0);

    const fastReentry = calculateReentryHeating(60, 0.8, 15);
    expect(fastReentry.heatIntensity).toBeGreaterThan(0.5);
    expect(fastReentry.turbulenceShake).toBeGreaterThan(0);
    expect(typeof fastReentry.plasmaColor).toBe("string");
  });
});
