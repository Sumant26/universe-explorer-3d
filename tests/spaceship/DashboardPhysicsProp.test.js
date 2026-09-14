import { describe, it, expect } from "vitest";
import { DashboardPhysicsProp } from "../../src/spaceship/DashboardPhysicsProp.js";

describe("DashboardPhysicsProp", () => {
  it("initializes at rest", () => {
    const prop = new DashboardPhysicsProp();
    expect(prop.rotationX).toBe(0);
    expect(prop.rotationZ).toBe(0);
  });

  it("responds to forward acceleration and turning forces", () => {
    const prop = new DashboardPhysicsProp({ stiffness: 100, damping: 5, mass: 1 });
    // Ship accelerates forward (accZ > 0)
    const result = prop.update(0.05, { accZ: 10, yawRate: 5 });
    expect(result.rotationX).toBeGreaterThan(0);
    expect(result.rotationZ).toBeLessThan(0);
  });

  it("responds to impulse nudges and damps over time", () => {
    const prop = new DashboardPhysicsProp({ stiffness: 80, damping: 10, mass: 1 });
    prop.nudge(3.0, 3.0);

    // After stepping many times with 0 external force, it should damp back toward zero
    for (let i = 0; i < 80; i++) {
      prop.update(0.05, {});
    }

    expect(Math.abs(prop.rotationX)).toBeLessThan(0.05);
    expect(Math.abs(prop.rotationZ)).toBeLessThan(0.05);
  });
});
