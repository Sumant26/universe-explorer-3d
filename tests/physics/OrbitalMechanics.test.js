import { describe, it, expect } from "vitest";
import { computeOrbitPosition, computeRotationAngle } from "../../src/physics/OrbitalMechanics.js";

describe("OrbitalMechanics", () => {
  it("produces a position at distance ~= semiMajorAxis for a circular orbit", () => {
    const pos = computeOrbitPosition({ semiMajorAxis: 10, eccentricity: 0, periodSeconds: 100, timeSeconds: 0 });
    const distance = Math.hypot(pos.x, pos.y, pos.z);
    expect(distance).toBeGreaterThan(8);
    expect(distance).toBeLessThan(12);
  });

  it("returns to the same position after a full period", () => {
    const params = { semiMajorAxis: 5, eccentricity: 0.2, periodSeconds: 50, timeSeconds: 0 };
    const start = computeOrbitPosition(params);
    const afterOnePeriod = computeOrbitPosition({ ...params, timeSeconds: 50 });
    expect(afterOnePeriod.x).toBeCloseTo(start.x, 4);
    expect(afterOnePeriod.z).toBeCloseTo(start.z, 4);
  });

  it("never divides by zero when periodSeconds is 0", () => {
    expect(() => computeOrbitPosition({ semiMajorAxis: 5, periodSeconds: 0, timeSeconds: 10 })).not.toThrow();
    const pos = computeOrbitPosition({ semiMajorAxis: 5, periodSeconds: 0, timeSeconds: 10 });
    expect(Number.isFinite(pos.x)).toBe(true);
  });

  it("clamps extreme eccentricity to avoid a degenerate ellipse", () => {
    const pos = computeOrbitPosition({ semiMajorAxis: 5, eccentricity: 5, periodSeconds: 10, timeSeconds: 1 });
    expect(Number.isFinite(pos.x)).toBe(true);
    expect(Number.isFinite(pos.z)).toBe(true);
  });

  it("computeRotationAngle wraps into [0, 2*PI)", () => {
    const angle = computeRotationAngle(1000, 7);
    expect(angle).toBeGreaterThanOrEqual(0);
    expect(angle).toBeLessThan(Math.PI * 2 + 1e-9);
  });

  it("computeRotationAngle returns 0 for a zero rotation period (non-rotating body)", () => {
    expect(computeRotationAngle(100, 0)).toBe(0);
  });
});
