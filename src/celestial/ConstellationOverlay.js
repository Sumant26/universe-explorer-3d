/**
 * @file ConstellationOverlay.js
 * 3D Skybox Constellation Star Charts and Asterisms.
 * Renders glowing celestial line networks connecting major real-world star patterns:
 *  - Ursa Major (Big Dipper)
 *  - Orion (The Hunter & Belt)
 *  - Cassiopeia (The Queen)
 *  - Crux (Southern Cross)
 *  - Pegasus (Winged Horse)
 *  - Cygnus (The Swan)
 */

import * as THREE from "three";

export const CONSTELLATIONS_DATA = [
  {
    id: "ursa-major",
    name: "Ursa Major (Big Dipper)",
    color: "#6ce3ff",
    stars: [
      { name: "Dubhe", pos: [150, 220, -280] },
      { name: "Merak", pos: [120, 180, -290] },
      { name: "Phecda", pos: [70, 170, -300] },
      { name: "Megrez", pos: [90, 210, -290] },
      { name: "Alioth", pos: [50, 240, -280] },
      { name: "Mizar", pos: [10, 260, -270] },
      { name: "Alkaid", pos: [-35, 275, -260] },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0], // Bowl
      [3, 4],
      [4, 5],
      [5, 6], // Handle
    ],
  },
  {
    id: "orion",
    name: "Orion",
    color: "#ffd27a",
    stars: [
      { name: "Betelgeuse", pos: [-180, 120, 260] },
      { name: "Bellatrix", pos: [-120, 110, 275] },
      { name: "Alnitak", pos: [-160, 40, 280] },
      { name: "Alnilam", pos: [-145, 38, 285] },
      { name: "Mintaka", pos: [-130, 36, 290] },
      { name: "Saiph", pos: [-175, -50, 270] },
      { name: "Rigel", pos: [-115, -60, 285] },
    ],
    edges: [
      [0, 1],
      [0, 2],
      [1, 4], // Shoulders to belt
      [2, 3],
      [3, 4], // Orion's Belt
      [2, 5],
      [4, 6],
      [5, 6], // Belt to knees/feet
    ],
  },
  {
    id: "cassiopeia",
    name: "Cassiopeia",
    color: "#ff9ee2",
    stars: [
      { name: "Caph", pos: [220, 190, 160] },
      { name: "Schedar", pos: [260, 180, 120] },
      { name: "Navi", pos: [290, 210, 80] },
      { name: "Ruchbah", pos: [310, 195, 30] },
      { name: "Segin", pos: [330, 230, -10] },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4], // Iconic 'W' shape
    ],
  },
  {
    id: "crux",
    name: "Crux (Southern Cross)",
    color: "#85ffb5",
    stars: [
      { name: "Acrux", pos: [40, -290, -140] },
      { name: "Mimosa", pos: [70, -270, -120] },
      { name: "Gacrux", pos: [50, -230, -150] },
      { name: "Delta Crucis", pos: [20, -255, -165] },
    ],
    edges: [
      [0, 2], // Long axis
      [1, 3], // Crossbar
    ],
  },
  {
    id: "cygnus",
    name: "Cygnus (The Northern Cross)",
    color: "#c0b2ff",
    stars: [
      { name: "Deneb", pos: [-240, 220, -120] },
      { name: "Sadr", pos: [-210, 180, -150] },
      { name: "Gienah", pos: [-260, 160, -170] },
      { name: "Delta Cygni", pos: [-160, 195, -135] },
      { name: "Albireo", pos: [-180, 130, -180] },
    ],
    edges: [
      [0, 1],
      [1, 4], // Spine
      [2, 1],
      [1, 3], // Wings
    ],
  },
];

export class ConstellationOverlay {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = "constellation-overlay";
    this.visible = false;
    this.group.visible = false;

    this._buildConstellations();
    if (this.scene) {
      this.scene.add(this.group);
    }
  }

  _buildConstellations() {
    for (const c of CONSTELLATIONS_DATA) {
      const linePositions = [];
      for (const [startIdx, endIdx] of c.edges) {
        const start = c.stars[startIdx].pos;
        const end = c.stars[endIdx].pos;
        linePositions.push(start[0], start[1], start[2]);
        linePositions.push(end[0], end[1], end[2]);
      }

      const lineGeom = new THREE.BufferGeometry();
      lineGeom.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));

      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(c.color),
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      });

      const lines = new THREE.LineSegments(lineGeom, lineMat);
      this.group.add(lines);

      // Star node spheres
      const starGeom = new THREE.SphereGeometry(2.2, 8, 8);
      const starMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(c.color),
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });

      for (const star of c.stars) {
        const starMesh = new THREE.Mesh(starGeom, starMat);
        starMesh.position.set(star.pos[0], star.pos[1], star.pos[2]);
        this.group.add(starMesh);
      }
    }
  }

  toggle(force) {
    this.visible = force !== undefined ? force : !this.visible;
    this.group.visible = this.visible;
    return this.visible;
  }
}
