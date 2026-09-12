import { describe, it, expect } from "vitest";
import {
  SATELLITES,
  getSatelliteById,
  searchSatellites,
  validateSatelliteData,
} from "../../src/celestial/SatelliteData.js";

describe("SatelliteData", () => {
  it("passes full data-integrity validation", () => {
    const { valid, errors } = validateSatelliteData();
    expect(errors).toEqual([]);
    expect(valid).toBe(true);
  });

  it("includes real, well-known satellites/probes", () => {
    expect(getSatelliteById("iss")).not.toBeNull();
    expect(getSatelliteById("voyager-1")).not.toBeNull();
    expect(getSatelliteById("hubble")).not.toBeNull();
  });

  it("has no duplicate ids", () => {
    const ids = SATELLITES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("getSatelliteById returns null for an unknown id", () => {
    expect(getSatelliteById("not-a-real-satellite")).toBeNull();
  });

  it("every launchYear is plausible (1957 or later, not in the far future)", () => {
    for (const sat of SATELLITES) {
      expect(sat.launchYear).toBeGreaterThanOrEqual(1957);
      expect(sat.launchYear).toBeLessThanOrEqual(new Date().getFullYear() + 2);
    }
  });

  describe("searchSatellites", () => {
    it("finds a satellite by partial name", () => {
      expect(searchSatellites("voyager").length).toBeGreaterThanOrEqual(2);
    });

    it("finds a satellite by agency", () => {
      expect(searchSatellites("nasa").length).toBeGreaterThan(0);
    });

    it("returns an empty array for an empty query", () => {
      expect(searchSatellites("")).toEqual([]);
    });
  });

  describe("validateSatelliteData edge cases", () => {
    it("flags an invalid status", () => {
      const broken = { ...SATELLITES[0], status: "Exploded" };
      const result = validateSatelliteData([broken]);
      expect(result.errors.some((e) => e.includes("invalid status"))).toBe(true);
    });

    it("flags an implausible launch year", () => {
      const broken = { ...SATELLITES[0], launchYear: 1800 };
      const result = validateSatelliteData([broken]);
      expect(result.errors.some((e) => e.includes("launchYear"))).toBe(true);
    });

    it("flags an empty database", () => {
      expect(validateSatelliteData([]).valid).toBe(false);
    });
  });
});
