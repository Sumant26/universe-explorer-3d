import { describe, it, expect } from "vitest";
import { predictOrbitalTrajectory } from "../../src/physics/OrbitalTrajectoryPredictor.js";

describe("OrbitalTrajectoryPredictor", () => {
  it("projects straight line in the absence of gravity", () => {
    const pos = { x: 0, y: 0, z: 0 };
    const vel = { x: 10, y: 0, z: 0 };
    const points = predictOrbitalTrajectory(pos, vel, [], 10, 0.1);

    expect(points.length).toBe(11); // Initial point + 10 steps
    expect(points[0].x).toBe(0);
    expect(points[10].x).toBeCloseTo(10, 1);
    expect(points[10].y).toBe(0);
    expect(points[10].z).toBe(0);
  });

  it("curves trajectory toward a massive body (gravity slingshot)", () => {
    const pos = { x: -10, y: 5, z: 0 };
    const vel = { x: 5, y: 0, z: 0 };
    const bodies = [{ position: { x: 0, y: 0, z: 0 }, mass: 50, safeRadius: 2.0 }];

    const points = predictOrbitalTrajectory(pos, vel, bodies, 20, 0.1);
    expect(points.length).toBeGreaterThan(5);

    // Body is at y = 0, initial ship at y = 5 moving +x. Gravity should pull y downward (negative delta y)
    const midPoint = points[Math.floor(points.length / 2)];
    expect(midPoint.y).toBeLessThan(5.0);
  });
});
