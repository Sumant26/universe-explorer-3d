import { describe, it, expect } from "vitest";
import {
  kmToAu,
  kmToLy,
  auToKm,
  lyToKm,
  distanceKmToSceneUnits,
  sceneUnitsToDistanceKm,
  sphericalToCartesian,
  degToRad,
  radToDeg,
  formatDistance,
  KM_PER_AU,
  KM_PER_LY,
} from "../../src/physics/CoordinateSystem.js";

describe("CoordinateSystem", () => {
  it("converts km <-> AU and km <-> ly round-trip", () => {
    expect(kmToAu(KM_PER_AU)).toBeCloseTo(1, 6);
    expect(auToKm(1)).toBeCloseTo(KM_PER_AU, 3);
    expect(kmToLy(KM_PER_LY)).toBeCloseTo(1, 6);
    expect(lyToKm(1)).toBeCloseTo(KM_PER_LY, 3);
  });

  it("handles non-finite input defensively", () => {
    expect(kmToAu(NaN)).toBe(0);
    expect(kmToLy(undefined)).toBe(0);
  });

  it("distanceKmToSceneUnits is 0 at 0 distance and increases monotonically", () => {
    expect(distanceKmToSceneUnits(0)).toBe(0);
    const near = distanceKmToSceneUnits(1_000_000);
    const far = distanceKmToSceneUnits(1_000_000_000_000);
    expect(far).toBeGreaterThan(near);
  });

  it("distanceKmToSceneUnits compresses huge distances (sub-linear growth)", () => {
    const d1 = distanceKmToSceneUnits(1e12);
    const d2 = distanceKmToSceneUnits(1e18); // a million times farther
    expect(d2 / d1).toBeLessThan(10); // log-scale, not linear
  });

  it("sceneUnitsToDistanceKm approximately inverts distanceKmToSceneUnits", () => {
    const km = 42_000_000;
    const units = distanceKmToSceneUnits(km);
    const roundTrip = sceneUnitsToDistanceKm(units);
    expect(roundTrip).toBeCloseTo(km, -2); // within a reasonable tolerance
  });

  it("sphericalToCartesian returns finite coordinates for valid input", () => {
    const p = sphericalToCartesian(45, 30, 1_000_000);
    expect(Number.isFinite(p.x)).toBe(true);
    expect(Number.isFinite(p.y)).toBe(true);
    expect(Number.isFinite(p.z)).toBe(true);
  });

  it("sphericalToCartesian clamps declination out of range without throwing", () => {
    expect(() => sphericalToCartesian(0, 500, 1000)).not.toThrow();
  });

  it("degToRad and radToDeg are inverses", () => {
    expect(radToDeg(degToRad(90))).toBeCloseTo(90, 6);
  });

  it("formatDistance chooses km for near, AU for solar-system scale, ly for far", () => {
    expect(formatDistance(1000)).toMatch(/km/);
    expect(formatDistance(auToKm(50))).toMatch(/AU/);
    expect(formatDistance(lyToKm(10))).toMatch(/ly/);
  });

  it("formatDistance handles negative distance gracefully", () => {
    expect(formatDistance(-5)).toBe("unknown");
  });
});
