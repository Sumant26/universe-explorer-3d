import * as THREE from "three";

export const STAR_PRESETS = {
  YELLOW_DWARF: {
    type: "YELLOW_DWARF",
    name: "G-Type Yellow Dwarf (Sol Analog)",
    mass: 1.0, // Solar masses
    luminosity: 1.0, // Solar luminosity
    color: 0xffe680,
    radius: 120,
    temperature: "5,778 K",
  },
  RED_GIANT: {
    type: "RED_GIANT",
    name: "M-Type Red Giant (Betelgeuse Class)",
    mass: 3.5,
    luminosity: 120.0,
    color: 0xff4500,
    radius: 280,
    temperature: "3,400 K",
  },
  BLUE_SUPERGIANT: {
    type: "BLUE_SUPERGIANT",
    name: "O-Type Blue Supergiant (Rigel Class)",
    mass: 18.0,
    luminosity: 2500.0,
    color: 0x88ccff,
    radius: 400,
    temperature: "25,000 K",
  },
  BINARY_STAR: {
    type: "BINARY_STAR",
    name: "Twin Binary System (Alpha Centauri Analog)",
    mass: 2.1,
    luminosity: 2.4,
    color: 0xffaa44,
    radius: 160,
    temperature: "5,800 K / 4,400 K",
  },
};

export const PLANET_PRESETS = {
  TERRESTRIAL: {
    type: "TERRESTRIAL",
    name: "Terran Rocky World",
    radius: 22,
    color: 0x2a9d8f,
    hasAtmosphere: true,
    hasRings: false,
  },
  LAVA_WORLD: {
    type: "LAVA_WORLD",
    name: "Molten Core Planet",
    radius: 18,
    color: 0xe76f51,
    hasAtmosphere: false,
    hasRings: false,
  },
  GAS_GIANT: {
    type: "GAS_GIANT",
    name: "Jovian Gas Giant",
    radius: 65,
    color: 0xe9c46a,
    hasAtmosphere: true,
    hasRings: true,
  },
  ICE_GIANT: {
    type: "ICE_GIANT",
    name: "Neptunian Ice Giant",
    radius: 45,
    color: 0x48cae4,
    hasAtmosphere: true,
    hasRings: false,
  },
};

export class StarSystemGenesis {
  constructor(scene, store) {
    this.scene = scene;
    this.store = store;
    this.group = new THREE.Group();
    this.group.name = "star_system_genesis";
    this.scene.add(this.group);

    this.currentStar = null;
    this.starMesh = null;
    this.starLight = null;
    this.habitableRings = null;
    this.planets = [];
  }

  calculateHabitableZone(luminosity = 1.0) {
    // Standard stellar astrophysics: r_inner = sqrt(L / 1.1) AU, r_outer = sqrt(L / 0.53) AU
    // Scale 1 AU = 2500 simulation units
    const AU = 2500;
    const innerAU = Math.sqrt(luminosity / 1.1);
    const outerAU = Math.sqrt(luminosity / 0.53);

    return {
      innerAU,
      outerAU,
      innerRadius: innerAU * AU,
      outerRadius: outerAU * AU,
    };
  }

  spawnStar(starKey = "YELLOW_DWARF", position = new THREE.Vector3(0, 0, 0)) {
    this.clearSystem();

    const starData = STAR_PRESETS[starKey] || STAR_PRESETS.YELLOW_DWARF;
    this.currentStar = starData;
    this.group.position.copy(position);

    // Star Core
    const geo = new THREE.SphereGeometry(starData.radius, 32, 32);
    const mat = new THREE.MeshBasicMaterial({
      color: starData.color,
    });
    this.starMesh = new THREE.Mesh(geo, mat);
    this.group.add(this.starMesh);

    // Point Light
    this.starLight = new THREE.PointLight(starData.color, 2.5, 100000);
    this.group.add(this.starLight);

    // Star Corona Glow
    const coronaGeo = new THREE.SphereGeometry(starData.radius * 1.3, 32, 32);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: starData.color,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const corona = new THREE.Mesh(coronaGeo, coronaMat);
    this.group.add(corona);

    // Habitable Goldilocks Zone Visualizer
    const hz = this.calculateHabitableZone(starData.luminosity);
    const hzGeo = new THREE.RingGeometry(hz.innerRadius, hz.outerRadius, 64);
    const hzMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    this.habitableRings = new THREE.Mesh(hzGeo, hzMat);
    this.habitableRings.rotation.x = Math.PI / 2;
    this.group.add(this.habitableRings);

    return {
      star: starData,
      habitableZone: hz,
    };
  }

  addPlanet({ typeKey = "TERRESTRIAL", name = "Proxima b", distance = 2500, _eccentricity = 0.0, speed = 0.2 } = {}) {
    if (!this.currentStar) {
      this.spawnStar("YELLOW_DWARF");
    }

    const pData = PLANET_PRESETS[typeKey] || PLANET_PRESETS.TERRESTRIAL;
    const planetGroup = new THREE.Group();

    // Planet mesh
    const geo = new THREE.SphereGeometry(pData.radius, 32, 32);
    const mat = new THREE.MeshStandardMaterial({
      color: pData.color,
      roughness: 0.7,
      metalness: 0.1,
    });
    const mesh = new THREE.Mesh(geo, mat);
    planetGroup.add(mesh);

    // Rings if applicable
    if (pData.hasRings) {
      const ringGeo = new THREE.RingGeometry(pData.radius * 1.4, pData.radius * 2.3, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: pData.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2.5;
      planetGroup.add(ringMesh);
    }

    // Orbit trail line
    const orbitGeo = new THREE.BufferGeometry();
    const orbitPoints = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      orbitPoints.push(Math.cos(theta) * distance, 0, Math.sin(theta) * distance);
    }
    orbitGeo.setAttribute("position", new THREE.Float32BufferAttribute(orbitPoints, 3));
    const orbitMat = new THREE.LineBasicMaterial({
      color: 0x445566,
      transparent: true,
      opacity: 0.4,
    });
    const orbitLine = new THREE.Line(orbitGeo, orbitMat);
    this.group.add(orbitLine);

    this.group.add(planetGroup);

    const planetEntry = {
      name,
      type: pData.type,
      distance,
      speed,
      angle: Math.random() * Math.PI * 2,
      group: planetGroup,
      mesh,
      orbitLine,
    };

    this.planets.push(planetEntry);
    return planetEntry;
  }

  tick(delta) {
    this.planets.forEach((p) => {
      p.angle += delta * p.speed * 0.5;
      p.group.position.set(Math.cos(p.angle) * p.distance, 0, Math.sin(p.angle) * p.distance);
      p.mesh.rotation.y += delta * 1.0;
    });

    if (this.starMesh) {
      this.starMesh.rotation.y += delta * 0.2;
    }
  }

  clearSystem() {
    while (this.group.children.length > 0) {
      const obj = this.group.children[0];
      this.group.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    }
    this.planets = [];
    this.currentStar = null;
    this.starMesh = null;
    this.starLight = null;
    this.habitableRings = null;
  }
}
