import { describe, it, expect } from "vitest";
import { METEOR_STREAMS, TRANSIENT_ALERTS } from "../../src/celestial/CosmicEventsManager.js";

describe("CosmicEventsManager", () => {
  it("defines at least 3 major meteor streams with valid geometries", () => {
    expect(METEOR_STREAMS.length).toBeGreaterThanOrEqual(3);
    for (const stream of METEOR_STREAMS) {
      expect(typeof stream.id).toBe("string");
      expect(typeof stream.name).toBe("string");
      expect(stream.particleCount).toBeGreaterThan(50);
      expect(stream.radius).toBeGreaterThan(0);
      expect(stream.thickness).toBeGreaterThan(0);
    }
  });

  it("defines transient deep-space alerts", () => {
    expect(TRANSIENT_ALERTS.length).toBeGreaterThanOrEqual(2);
    for (const alert of TRANSIENT_ALERTS) {
      expect(typeof alert.id).toBe("string");
      expect(typeof alert.title).toBe("string");
      expect(typeof alert.type).toBe("string");
      expect(typeof alert.description).toBe("string");
    }
  });
});
