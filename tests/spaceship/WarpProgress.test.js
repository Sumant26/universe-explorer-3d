import { describe, it, expect } from "vitest";
import { computeWarpProgress, chooseJumpDuration, WarpPhase } from "../../src/spaceship/WarpProgress.js";

describe("computeWarpProgress", () => {
  it("starts in the SPOOLING phase at t=0", () => {
    const p = computeWarpProgress(0, 10);
    expect(p.phase).toBe(WarpPhase.SPOOLING);
    expect(p.pathT).toBeCloseTo(0, 2);
  });

  it("reaches CRUISE phase in the middle of a long jump", () => {
    const p = computeWarpProgress(5, 10);
    expect(p.phase).toBe(WarpPhase.CRUISE);
    expect(p.speedFraction).toBeCloseTo(1, 6);
  });

  it("reaches DECELERATING near the end", () => {
    const p = computeWarpProgress(9, 10);
    expect(p.phase).toBe(WarpPhase.DECELERATING);
  });

  it("reports ARRIVED at or past the total duration", () => {
    const p = computeWarpProgress(10, 10);
    expect(p.phase).toBe(WarpPhase.ARRIVED);
    expect(p.pathT).toBe(1);
    expect(p.speedFraction).toBe(0);
  });

  it("pathT is monotonically non-decreasing over time", () => {
    let previous = -1;
    for (let t = 0; t <= 10; t += 0.5) {
      const p = computeWarpProgress(t, 10);
      expect(p.pathT).toBeGreaterThanOrEqual(previous - 1e-9);
      previous = p.pathT;
    }
  });

  it("pathT never exceeds 1 and never goes negative", () => {
    for (let t = -5; t <= 20; t += 1) {
      const p = computeWarpProgress(t, 10);
      expect(p.pathT).toBeGreaterThanOrEqual(0);
      expect(p.pathT).toBeLessThanOrEqual(1);
    }
  });

  it("handles a degenerate (too-short or invalid) total duration without throwing", () => {
    expect(() => computeWarpProgress(1, 0)).not.toThrow();
    expect(() => computeWarpProgress(1, -5)).not.toThrow();
    expect(() => computeWarpProgress(NaN, 10)).not.toThrow();
  });
});

describe("chooseJumpDuration", () => {
  it("returns a longer duration for a farther distance", () => {
    const near = chooseJumpDuration(1000);
    const far = chooseJumpDuration(1e18);
    expect(far).toBeGreaterThan(near);
  });

  it("never returns a duration shorter than the minimum spool+decel time", () => {
    expect(chooseJumpDuration(0)).toBeGreaterThanOrEqual(3);
  });

  it("caps the duration for absurdly large distances (never an unplayable wait)", () => {
    expect(chooseJumpDuration(1e30)).toBeLessThan(60);
  });

  it("handles negative/invalid distance safely", () => {
    expect(() => chooseJumpDuration(-100)).not.toThrow();
    expect(() => chooseJumpDuration(NaN)).not.toThrow();
  });
});
