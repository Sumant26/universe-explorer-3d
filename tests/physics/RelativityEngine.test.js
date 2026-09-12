import { describe, it, expect } from "vitest";
import {
  lorentzFactor,
  properTime,
  travelTimeSeconds,
  computeTravelBreakdown,
  formatDuration,
  SPEED_OF_LIGHT_KM_S,
} from "../../src/physics/RelativityEngine.js";

describe("RelativityEngine", () => {
  it("returns gamma = 1 at rest", () => {
    expect(lorentzFactor(0)).toBeCloseTo(1, 6);
  });

  it("increases gamma as speed approaches c", () => {
    const slow = lorentzFactor(0.1);
    const fast = lorentzFactor(0.9);
    const veryFast = lorentzFactor(0.999);
    expect(fast).toBeGreaterThan(slow);
    expect(veryFast).toBeGreaterThan(fast);
  });

  it("never returns NaN or Infinity even at v = c or beyond", () => {
    expect(Number.isFinite(lorentzFactor(1))).toBe(true);
    expect(Number.isFinite(lorentzFactor(1.5))).toBe(true);
    expect(Number.isFinite(lorentzFactor(-5))).toBe(true);
    expect(Number.isFinite(lorentzFactor(NaN))).toBe(true);
  });

  it("proper time is less than or equal to Earth-frame time", () => {
    const earthSeconds = 1000;
    expect(properTime(earthSeconds, 0.9)).toBeLessThan(earthSeconds);
    expect(properTime(earthSeconds, 0)).toBeCloseTo(earthSeconds, 6);
  });

  it("proper time handles negative/invalid input safely", () => {
    expect(properTime(-10, 0.5)).toBe(0);
    expect(properTime(NaN, 0.5)).toBe(0);
  });

  it("travelTimeSeconds computes distance / speed", () => {
    expect(travelTimeSeconds(SPEED_OF_LIGHT_KM_S, SPEED_OF_LIGHT_KM_S)).toBeCloseTo(1, 6);
  });

  it("travelTimeSeconds guards against zero/negative inputs", () => {
    expect(travelTimeSeconds(0, SPEED_OF_LIGHT_KM_S)).toBe(0);
    expect(travelTimeSeconds(-100, SPEED_OF_LIGHT_KM_S)).toBe(0);
    expect(travelTimeSeconds(100, 0)).toBe(Infinity);
  });

  it("computeTravelBreakdown returns all four propulsion methods, light speed fastest", () => {
    const breakdown = computeTravelBreakdown(1_000_000_000);
    expect(breakdown.lightSpeed.seconds).toBeLessThan(breakdown.relativistic999c.seconds);
    expect(breakdown.relativistic999c.seconds).toBeLessThan(breakdown.fusionDrive01c.seconds);
    expect(breakdown.fusionDrive01c.seconds).toBeLessThan(breakdown.chemicalRocket.seconds);
    // Ship-experienced time under time dilation should be less than Earth-frame time.
    expect(breakdown.relativistic999c.shipSeconds).toBeLessThan(breakdown.relativistic999c.seconds);
  });

  it("computeTravelBreakdown handles zero distance without throwing", () => {
    expect(() => computeTravelBreakdown(0)).not.toThrow();
    expect(computeTravelBreakdown(0).lightSpeed.seconds).toBe(0);
  });

  it("formatDuration picks a sensible unit", () => {
    expect(formatDuration(5)).toMatch(/sec/);
    expect(formatDuration(120)).toMatch(/min/);
    expect(formatDuration(7200)).toMatch(/hr/);
    expect(formatDuration(86400 * 3)).toMatch(/days/);
    expect(formatDuration(86400 * 400)).toMatch(/yr/);
  });

  it("formatDuration handles non-finite and negative input gracefully", () => {
    expect(formatDuration(Infinity)).toBe("effectively forever");
    expect(formatDuration(-5)).toBe("0 seconds");
    expect(formatDuration(NaN)).toBe("effectively forever");
  });
});
