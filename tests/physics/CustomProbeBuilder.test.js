import { describe, it, expect } from "vitest";
import {
  calculateSignalLatency,
  calculateSolarPower,
  computeCustomOrbitalPosition,
  PROBE_CHASSIS,
} from "../../src/physics/CustomProbeBuilder.js";

describe("CustomProbeBuilder", () => {
  it("defines 3 probe chassis archetypes", () => {
    expect(Object.keys(PROBE_CHASSIS).length).toBe(3);
    expect(PROBE_CHASSIS.CUBESAT.name).toBeDefined();
    expect(PROBE_CHASSIS.ORBITER.massKg).toBeGreaterThan(0);
  });

  describe("calculateSignalLatency", () => {
    it("returns zero for zero distance", () => {
      const res = calculateSignalLatency(0);
      expect(res.oneWaySeconds).toBe(0);
      expect(res.roundTripSeconds).toBe(0);
      expect(res.formatted).toBe("0 ms");
    });

    it("calculates Moon-distance latency accurately (~1.28s)", () => {
      const moonDist = 384400;
      const res = calculateSignalLatency(moonDist);
      expect(res.oneWaySeconds).toBeCloseTo(1.28, 1);
      expect(res.roundTripSeconds).toBeCloseTo(2.56, 1);
      expect(res.formatted).toContain("sec");
    });

    it("calculates Mars-distance latency in minutes", () => {
      const marsDist = 225000000;
      const res = calculateSignalLatency(marsDist);
      expect(res.oneWaySeconds).toBeGreaterThan(60);
      expect(res.formatted).toContain("m");
    });
  });

  describe("calculateSolarPower", () => {
    it("calculates nominal 1 AU power", () => {
      const res = calculateSolarPower(1.0, 200);
      expect(res.currentPowerW).toBe(200);
      expect(res.status).toBe("OPTIMAL");
    });

    it("reduces power at Jupiter distance (5.2 AU)", () => {
      const res = calculateSolarPower(5.2, 200);
      expect(res.currentPowerW).toBeLessThan(10);
      expect(res.status).toBe("RTG_ONLY");
    });
  });

  describe("computeCustomOrbitalPosition", () => {
    it("computes periodic 3D positions", () => {
      const p0 = computeCustomOrbitalPosition(5.0, 0, 0, 3600);
      expect(p0.x).toBeCloseTo(5.0, 2);
      expect(p0.y).toBeCloseTo(0, 2);
      expect(p0.z).toBeCloseTo(0, 2);

      const pQuarter = computeCustomOrbitalPosition(5.0, 0, 900, 3600);
      expect(pQuarter.x).toBeCloseTo(0, 2);
      expect(pQuarter.z).toBeCloseTo(5.0, 2);
    });
  });
});
