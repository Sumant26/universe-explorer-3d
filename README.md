# 🌌 Cosmos Cabin — A Cozy 3D Universe Explorer

A warm, calm, [slowroads.io](https://slowroads.io)-inspired little spaceship cabin that drifts through a curated 3D universe. Search any real planet, moon, star, galaxy, or launched satellite; watch your ship travel there; and read its story when you arrive.

## ✨ Features

1. **A curated universe, five scales deep** — from the Moon and Mars up through nearby stars, black holes, nebulae, our own and neighboring galaxies, all the way to the cosmic web and the edge of the observable universe (`src/celestial/CelestialData.js`).
2. **An always-flying spaceship** — a cozy little cabin with a seated pilot, drifting endlessly, viewable in three ways (see below).
3. **A search bar** for any object or satellite, with keyboard navigation and live results.
4. **Autopilot warp travel** — pick a destination and the ship eases into warp, cruises, and decelerates smoothly into orbit.
5. **Arrival view** — the ship and the destination together, framed from whichever camera view is active.
6. **A full detail card** for every object: name, location, galaxy, solar system, distance from Earth, time to reach it, habitability, and atmosphere — plus a full multi-propulsion travel-time breakdown and an expandable habitability score breakdown.
7. **Every satellite we've launched** (well, a well-chosen selection) — the ISS, Hubble, JWST, the Voyagers, New Horizons, Parker Solar Probe, Perseverance, Cassini, Juno, and more — browsable in their own panel.
8. **Manual mode** — flip the search bar's mode toggle to "Manual," search a destination, and hand-fly there (WASD / arrow keys) guided by a compass arrow that always points the way.
9. **Three camera views** — Cockpit (first-person, with mouse look and a visible seated pilot), 3rd-Person (see your own ship), and Cinematic (a dramatic angled framing) — switchable with on-screen buttons or the <kbd>C</kbd> key.

## ⌨️ Controls

| Key / Action | Description |
| :--- | :--- |
| Type in the search bar | Find any object or satellite; <kbd>↑</kbd>/<kbd>↓</kbd> to navigate results, <kbd>Enter</kbd> to select |
| Mode toggle (next to search) | Switch between **Autopilot** and **Manual** flight |
| <kbd>W</kbd>/<kbd>↑</kbd>, <kbd>S</kbd>/<kbd>↓</kbd> | Manual mode: thrust forward / back |
| <kbd>A</kbd>/<kbd>←</kbd>, <kbd>D</kbd>/<kbd>→</kbd> | Manual mode: yaw left / right |
| <kbd>R</kbd> / <kbd>F</kbd> | Manual mode: pitch up / down |
| <kbd>Space</kbd> | Engage autopilot warp to the currently searched target |
| <kbd>C</kbd> | Cycle camera view (Cockpit → 3rd-Person → Cinematic) |
| <kbd>M</kbd> | Toggle audio mute |
| <kbd>H</kbd> | Toggle HUD visibility |
| <kbd>Esc</kbd> | Close detail / habitability / satellite panels |

## 🛠️ Architecture

```
src/
├── core/          Engine (renderer/scene/camera lifecycle), post-processing, texture loading with fallbacks
├── state/         Reactive Store + typed actions (no direct mutation, anywhere)
├── physics/       Coordinate scaling, special relativity, orbital mechanics, habitability scoring
├── celestial/     Curated data (bodies + satellites), search index, position resolver, mesh factory, shaders
├── spaceship/     Flight physics (manual + autopilot), manual navigator, warp timing, camera rig, ship/cockpit model
├── audio/         Procedural Web Audio ambience, engine hum, and UI chirps (no audio files)
├── ui/            Search bar, detail panel, habitability breakdown, satellite list, compass, view switcher, telemetry, radar
└── styles/        Warm, cozy CSS design system
```

**Design principles:** single-responsibility modules, pure/testable math kept separate from Three.js and the DOM wherever possible, no direct state mutation, and every Three.js resource tracked for disposal.

## 🛡️ Error handling & resilience

- A missing/failed WebGL context shows a friendly full-screen message instead of a blank page.
- Lost/restored WebGL contexts are handled gracefully (render loop pauses and resumes).
- Textures that fail to load fall back to a procedurally generated texture — visuals never break.
- All physics functions guard against NaN/Infinity/division-by-zero (e.g., the relativity engine clamps velocity below `c`).
- The celestial and satellite databases are validated for integrity at boot; a corrupted database shows a clear error rather than crashing silently.
- A single misbehaving UI subscriber or per-frame callback can't take down the whole render loop or state store.

## 🧪 Testing

135 automated tests across physics, state, data integrity, search, position resolution, and flight logic — everything that can be tested without a live WebGL context is tested.

```bash
npm test              # run once
npm run test:watch    # watch mode
npm run test:coverage # coverage report
```

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
# universe-explorer-3d
