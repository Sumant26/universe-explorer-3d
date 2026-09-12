import { describe, it, expect } from "vitest";
import { ManualNavigator } from "../../src/spaceship/ManualNavigator.js";

function baseState() {
  return {
    position: { x: 0, y: 0, z: 0 },
    velocity: { x: 0, y: 0, z: 0 },
    forward: { x: 0, y: 0, z: -1 },
  };
}

describe("ManualNavigator", () => {
  it("reads no input when no keys are pressed", () => {
    const nav = new ManualNavigator();
    expect(nav.readInput()).toEqual({ thrust: 0, yaw: 0, pitch: 0, strafe: 0, boost: false });
  });

  it("maps S/ArrowDown to forward thrust and W/ArrowUp to backward thrust", () => {
    const nav = new ManualNavigator();
    nav.handleKeyDown({ code: "KeyS" });
    expect(nav.readInput().thrust).toBe(1);
    nav.handleKeyUp({ code: "KeyS" });
    expect(nav.readInput().thrust).toBe(0);

    nav.handleKeyDown({ code: "KeyW" });
    expect(nav.readInput().thrust).toBe(-1);
    nav.handleKeyUp({ code: "KeyW" });
    expect(nav.readInput().thrust).toBe(0);
  });

  it("maps Shift/KeyB to boost", () => {
    const nav = new ManualNavigator();
    nav.handleKeyDown({ code: "ShiftLeft" });
    expect(nav.readInput().boost).toBe(true);
    nav.handleKeyUp({ code: "ShiftLeft" });
    expect(nav.readInput().boost).toBe(false);
  });

  it("maps Q and E to strafe left and right", () => {
    const nav = new ManualNavigator();
    nav.handleKeyDown({ code: "KeyQ" });
    expect(nav.readInput().strafe).toBe(-1);
    nav.handleKeyUp({ code: "KeyQ" });
    nav.handleKeyDown({ code: "KeyE" });
    expect(nav.readInput().strafe).toBe(1);
  });

  it("opposing keys held together cancel out", () => {
    const nav = new ManualNavigator();
    nav.handleKeyDown({ code: "KeyA" });
    nav.handleKeyDown({ code: "KeyD" });
    expect(nav.readInput().yaw).toBe(0);
  });

  it("resetInput() clears all held keys", () => {
    const nav = new ManualNavigator();
    nav.handleKeyDown({ code: "KeyW" });
    nav.resetInput();
    expect(nav.readInput().thrust).toBe(0);
  });

  it("ignores keyboard events with no code (defensive)", () => {
    const nav = new ManualNavigator();
    expect(() => nav.handleKeyDown({})).not.toThrow();
    expect(() => nav.handleKeyDown(undefined)).not.toThrow();
  });

  it("step() returns null bearing when no target is set", () => {
    const nav = new ManualNavigator();
    const { bearing } = nav.step(baseState(), 1 / 60);
    expect(bearing).toBeNull();
  });

  it("step() returns a bearing toward the target once one is set", () => {
    const nav = new ManualNavigator();
    nav.setTarget({ x: 0, y: 0, z: -100 });
    const { bearing } = nav.step(baseState(), 1 / 60);
    expect(bearing).not.toBeNull();
    expect(bearing.aligned).toBe(true); // already facing -z
  });

  it("step() detects arrival within the configured radius", () => {
    const nav = new ManualNavigator({ arrivalRadius: 5 });
    nav.setTarget({ x: 0, y: 0, z: -2 });
    const { bearing } = nav.step(baseState(), 1 / 60);
    expect(bearing.arrived).toBe(true);
  });

  it("flying forward under manual thrust reduces distance to a target ahead", () => {
    const nav = new ManualNavigator();
    nav.setTarget({ x: 0, y: 0, z: -50 });
    nav.handleKeyDown({ code: "KeyS" });
    let state = baseState();
    let bearing;
    for (let i = 0; i < 120; i++) {
      const result = nav.step(state, 1 / 60);
      state = result.state;
      bearing = result.bearing;
    }
    expect(bearing.distance).toBeLessThan(50);
  });

  it("clearing the target (null) stops producing a bearing", () => {
    const nav = new ManualNavigator();
    nav.setTarget({ x: 0, y: 0, z: -50 });
    nav.setTarget(null);
    const { bearing } = nav.step(baseState(), 1 / 60);
    expect(bearing).toBeNull();
  });
});
