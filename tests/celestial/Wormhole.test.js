import { describe, it, expect, beforeEach } from "vitest";
import * as THREE from "three";
import { WormholeFactory } from "../../src/celestial/WormholeFactory.js";
import { Store } from "../../src/state/Store.js";

describe("WormholeFactory", () => {
  let scene;
  let store;
  let factory;

  beforeEach(() => {
    scene = new THREE.Scene();
    store = new Store();
    factory = new WormholeFactory(scene, store);
  });

  it("spawns a 3D wormhole singularity with event horizon and accretion disk", () => {
    const wh = factory.createWormhole({
      position: new THREE.Vector3(1000, 0, 1000),
      destinationName: "Andromeda",
    });

    expect(wh).toBeDefined();
    expect(wh.name).toBe("Einstein-Rosen Bridge Alpha");
    expect(wh.group.children.length).toBeGreaterThanOrEqual(4);
    expect(scene.children).toContain(wh.group);
  });

  it("accurately calculates ship proximity threshold", () => {
    factory.createWormhole({
      position: new THREE.Vector3(1000, 0, 0),
    });

    const farShip = new THREE.Vector3(5000, 0, 0);
    const nearShip = new THREE.Vector3(1300, 0, 0);

    expect(factory.checkProximity(farShip, 800).inRange).toBe(false);
    expect(factory.checkProximity(nearShip, 800).inRange).toBe(true);
  });

  it("ticks rotation and pulsation without error", () => {
    factory.createWormhole();
    expect(() => factory.tick(0.016)).not.toThrow();
  });
});
