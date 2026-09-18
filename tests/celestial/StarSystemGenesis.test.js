import { describe, it, expect, beforeEach } from "vitest";
import * as THREE from "three";
import { StarSystemGenesis } from "../../src/celestial/StarSystemGenesis.js";
import { Store } from "../../src/state/Store.js";

describe("StarSystemGenesis", () => {
  let scene;
  let store;
  let genesis;

  beforeEach(() => {
    scene = new THREE.Scene();
    store = new Store();
    genesis = new StarSystemGenesis(scene, store);
  });

  it("calculates Goldilocks habitable zone for stars with different luminosities", () => {
    const solZone = genesis.calculateHabitableZone(1.0);
    expect(solZone.innerAU).toBeCloseTo(0.953, 2);
    expect(solZone.outerAU).toBeCloseTo(1.373, 2);

    const redGiantZone = genesis.calculateHabitableZone(100.0);
    expect(redGiantZone.innerAU).toBeGreaterThan(solZone.innerAU);
  });

  it("spawns a star with corona and habitable zone ring", () => {
    const result = genesis.spawnStar("YELLOW_DWARF");
    expect(result.star.type).toBe("YELLOW_DWARF");
    expect(genesis.group.children.length).toBeGreaterThanOrEqual(3);
  });

  it("adds planets with orbital rings and calculates position updates", () => {
    genesis.spawnStar("YELLOW_DWARF");
    const planet = genesis.addPlanet({
      typeKey: "TERRESTRIAL",
      name: "Test Terran",
      distance: 2500,
      speed: 0.5,
    });

    expect(planet).toBeDefined();
    expect(genesis.planets.length).toBe(1);

    const initialPos = planet.group.position.clone();
    genesis.tick(0.1);
    expect(planet.group.position.x !== initialPos.x || planet.group.position.z !== initialPos.z).toBe(true);
  });

  it("clears all celestial bodies cleanly", () => {
    genesis.spawnStar("RED_GIANT");
    genesis.addPlanet({ typeKey: "GAS_GIANT" });
    expect(genesis.planets.length).toBe(1);

    genesis.clearSystem();
    expect(genesis.planets.length).toBe(0);
    expect(genesis.group.children.length).toBe(0);
  });
});
