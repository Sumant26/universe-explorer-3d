import { describe, it, expect } from "vitest";
import { EXPEDITIONS } from "../../src/celestial/ExpeditionsData.js";
import { CELESTIAL_BODIES } from "../../src/celestial/CelestialData.js";
import { SATELLITES } from "../../src/celestial/SatelliteData.js";

describe("ExpeditionsData", () => {
  it("defines at least 3 curated expeditions", () => {
    expect(EXPEDITIONS.length).toBeGreaterThanOrEqual(3);
  });

  it("every expedition has valid metadata, a badge, and at least 3 waypoints", () => {
    const allKnownIds = new Set([...CELESTIAL_BODIES.map((c) => c.id), ...SATELLITES.map((s) => s.id)]);

    for (const exp of EXPEDITIONS) {
      expect(typeof exp.id).toBe("string");
      expect(typeof exp.title).toBe("string");
      expect(typeof exp.description).toBe("string");
      expect(exp.badge).toBeDefined();
      expect(typeof exp.badge.name).toBe("string");
      expect(exp.waypoints.length).toBeGreaterThanOrEqual(3);

      for (const wp of exp.waypoints) {
        expect(typeof wp.targetId).toBe("string");
        expect(typeof wp.title).toBe("string");
        expect(typeof wp.briefing).toBe("string");
        expect(allKnownIds.has(wp.targetId)).toBe(true);
      }
    }
  });
});
