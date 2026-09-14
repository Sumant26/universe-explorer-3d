import { describe, it, expect } from "vitest";
import * as THREE from "three";
import { ConstellationOverlay, CONSTELLATIONS_DATA } from "../../src/celestial/ConstellationOverlay.js";

describe("ConstellationOverlay", () => {
  it("defines standard constellations with stars and edges", () => {
    expect(CONSTELLATIONS_DATA.length).toBeGreaterThan(3);
    for (const c of CONSTELLATIONS_DATA) {
      expect(c.stars.length).toBeGreaterThan(2);
      expect(c.edges.length).toBeGreaterThan(1);
    }
  });

  it("builds Three.js group and toggles visibility", () => {
    const scene = new THREE.Scene();
    const overlay = new ConstellationOverlay(scene);

    expect(overlay.visible).toBe(false);
    expect(overlay.group.visible).toBe(false);

    overlay.toggle(true);
    expect(overlay.visible).toBe(true);
    expect(overlay.group.visible).toBe(true);

    overlay.toggle();
    expect(overlay.visible).toBe(false);
  });
});
