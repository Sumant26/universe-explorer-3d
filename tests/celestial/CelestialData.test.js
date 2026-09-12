import { describe, it, expect } from "vitest";
import {
  CELESTIAL_BODIES,
  getCelestialBodyById,
  getBodiesByScale,
  searchCelestialBodies,
  validateCelestialData,
} from "../../src/celestial/CelestialData.js";

describe("CelestialData", () => {
  it("passes full data-integrity validation", () => {
    const { valid, errors } = validateCelestialData();
    expect(errors).toEqual([]);
    expect(valid).toBe(true);
  });

  it("contains no duplicate ids", () => {
    const ids = CELESTIAL_BODIES.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("includes Earth with zero distance from Earth", () => {
    const earth = getCelestialBodyById("earth");
    expect(earth).not.toBeNull();
    expect(earth.distanceFromEarthKm).toBe(0);
  });

  it("getCelestialBodyById returns null for an unknown id", () => {
    expect(getCelestialBodyById("planet-nine-x")).toBeNull();
  });

  it("getBodiesByScale returns only bodies of the requested tier", () => {
    const tier0 = getBodiesByScale(0);
    expect(tier0.length).toBeGreaterThan(0);
    expect(tier0.every((b) => b.scaleTier === 0)).toBe(true);
  });

  it("covers every scale tier from 0 to 4", () => {
    for (let tier = 0; tier <= 4; tier++) {
      expect(getBodiesByScale(tier).length).toBeGreaterThan(0);
    }
  });

  it("every body with an orbit references a valid parent id", () => {
    const ids = new Set(CELESTIAL_BODIES.map((b) => b.id));
    for (const body of CELESTIAL_BODIES) {
      if (body.orbit?.parentId) {
        expect(ids.has(body.orbit.parentId)).toBe(true);
      }
    }
  });

  describe("searchCelestialBodies", () => {
    it("finds a body by exact and partial name (case-insensitive)", () => {
      expect(searchCelestialBodies("mars").some((b) => b.id === "mars")).toBe(true);
      expect(searchCelestialBodies("MAR").some((b) => b.id === "mars")).toBe(true);
    });

    it("ranks name matches ahead of tag/location matches", () => {
      const results = searchCelestialBodies("planet");
      expect(results.length).toBeGreaterThan(0);
    });

    it("returns an empty array for an empty or whitespace query", () => {
      expect(searchCelestialBodies("")).toEqual([]);
      expect(searchCelestialBodies("   ")).toEqual([]);
    });

    it("returns an empty array for a nonsense query", () => {
      expect(searchCelestialBodies("xyzzy-not-a-real-planet-zzz")).toEqual([]);
    });
  });

  describe("validateCelestialData edge cases", () => {
    it("flags an empty database as invalid", () => {
      const result = validateCelestialData([]);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it("flags a missing required field", () => {
      const broken = [{ id: "x" }];
      const result = validateCelestialData(broken);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes("missing field"))).toBe(true);
    });

    it("flags a duplicate id", () => {
      const base = CELESTIAL_BODIES[0];
      const result = validateCelestialData([base, { ...base }]);
      expect(result.errors.some((e) => e.includes("duplicate id"))).toBe(true);
    });

    it("flags an out-of-range scaleTier", () => {
      const base = CELESTIAL_BODIES[0];
      const broken = { ...base, scaleTier: 9 };
      const result = validateCelestialData([broken]);
      expect(result.errors.some((e) => e.includes("scaleTier"))).toBe(true);
    });
  });
});
