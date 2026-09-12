# 🌌 Cosmos Warp Explorer - Project Specification & Architecture (SPEC)

## 1. Project Overview & Objectives
**Cosmos Warp Explorer** is an interactive, multi-scale 3D web application built with Three.js and Vite that renders the known universe from planetary scale up to the cosmic web, featuring an interactive first-person spaceship cockpit with relativistic warp travel simulation, real-time astrophysics calculations, habitability analysis, and comprehensive planetary data.

---

## 2. Architectural Principles & Code Standards

### 2.1 Code Quality & Best Practices
- **Modularity**: Strict separation of concerns across rendering, physics/math, state management, audio, and UI overlays.
- **Single Responsibility Principle (SRP)**: Each class/module handles a distinct domain (e.g., `CelestialBody`, `WarpController`, `AtmosphereShader`, `AudioManager`).
- **Memory & GPU Lifecycle Management**:
  - All Three.js Geometries, Materials, and Textures MUST be systematically tracked and disposed of via lifecycle hooks (`dispose()`) to prevent WebGL context leaks.
  - Event listeners and animation frames must be cleanly unbound upon unmount or transition.
- **Type Safety & JSDoc**: All functions, classes, and complex data structures must have complete JSDoc annotations detailing parameter types, return values, and behavior.
- **Performance Budget**: Target constant **60+ FPS** on standard GPUs. Use instancing for large particle systems (asteroid belts, cosmic web, starfields) and LOD (Level of Detail) scaling.

### 2.2 Project Directory Structure
```
universe-explorer-3d/
├── .agents/
│   └── rules/
│       └── project_spec.md        # AI Agent Behavioral & Architectural Rules
├── src/
│   ├── assets/                    # Static textures, fallback assets
│   ├── core/                      # Engine core
│   │   ├── Engine.js              # Three.js scene, renderer, camera setup
│   │   ├── PostProcessing.js      # Bloom, chromatic aberration, lens effects
│   │   └── AssetLoader.js         # Texture & asset loading with error handling
│   ├── state/                     # Centralized State Management
│   │   ├── Store.js               # Reactive Event-driven State Store
│   │   └── StateActions.js        # Action creators and state transitions
│   ├── physics/                   # Astrophysics, relativity & math
│   │   ├── CoordinateSystem.js    # Multi-scale logarithmic distance mapping
│   │   ├── RelativityEngine.js    # Lorentz factor, time dilation, travel times
│   │   ├── OrbitalMechanics.js    # Keplerian orbits & rotation math
│   │   └── HabitabilityEngine.js   # Atmosphere, colonization & habitability scoring
│   ├── celestial/                 # Celestial object generators & shaders
│   │   ├── CelestialData.js       # Curated database of universe objects
│   │   ├── CelestialFactory.js    # Builder for planets, stars, black holes, nebulae
│   │   ├── shaders/               # GLSL custom shaders
│   │   │   ├── AtmosphereShader.js# Rayleigh & Mie scattering glow
│   │   │   ├── StarCoronaShader.js# Animated solar flare & noise corona
│   │   │   ├── BlackHoleShader.js # Gravitational lensing & accretion disk
│   │   │   └── WarpStreakShader.js# Star-streak warp tunnel shader
│   │   └── systems/               # Compound systems (Asteroid Belt, Milky Way, Cosmic Web)
│   ├── spaceship/                 # Cockpit & Flight Systems
│   │   ├── Cockpit.js             # 3D Cockpit geometry, HUD displays, yoke/controls
│   │   ├── WarpController.js      # Warp transition, star-streak flight & deceleration
│   │   └── FlightCamera.js        # Cockpit free-look vs Orbit camera controller
│   ├── audio/                     # Sound design
│   │   └── SoundSynthesizer.js    # Web Audio API procedural sound engine
│   ├── ui/                        # Sci-Fi Holographic HUD & Overlays
│   │   ├── HUDController.js       # HUD view coordinator
│   │   ├── DetailPanel.js         # Astronomical data, distance & travel calculator
│   │   ├── HabitabilityMatrix.js  # Atmosphere composition & occupation rating
│   │   ├── NavigationSearch.js    # Auto-complete search bar & scale slider
│   │   ├── RadarCanvas.js         # 2D Canvas celestial radar
│   │   └── TelemetryHUD.js        # Cockpit flight instruments & speedometer
│   ├── styles/                    # Vanilla CSS Sci-Fi Design System
│   │   ├── main.css               # Reset & typography
│   │   ├── hud.css                # Glassmorphic panels, scanlines, neon glows
│   │   └── cockpit.css            # Telemetry overlays and cockpit widgets
│   ├── main.js                    # Entry point & bootstrap
│   └── index.html                 # Semantic HTML5 entry
├── tests/                         # Automated Unit & Integration Tests
│   ├── physics/                   # Tests for relativity, distances, habitability
│   │   ├── RelativityEngine.test.js
│   │   ├── CoordinateSystem.test.js
│   │   └── HabitabilityEngine.test.js
│   ├── state/                     # Tests for reactive store & transitions
│   │   └── Store.test.js
│   ├── celestial/                 # Tests for celestial database & factory
│   │   └── CelestialData.test.js
│   └── mocks/                     # WebGL & Audio mock environment
│       └── WebGLMock.js
├── README.md                      # Project documentation (auto-updated with features)
├── SPEC.md                        # Master Technical Specification
├── package.json                   # Dependencies & test runner configuration
└── vite.config.js                 # Vite bundler configuration
```

---

## 3. Centralized State Management System

### 3.1 State Pattern: Reactive Unidirectional Store
The application uses an observable state store (`Store.js`) with immutable updates and typed actions to ensure predictable state transitions.

```javascript
// Example State Schema
const InitialState = {
  currentScale: 0,                 // 0: Planetary, 1: Solar, 2: Stellar, 3: Galactic, 4: Universe
  cameraMode: 'COCKPIT',           // 'COCKPIT' | 'ORBIT' | 'CINEMATIC'
  selectedObject: 'earth',         // ID of currently focused celestial body
  targetObject: null,              // ID of travel destination
  flightStatus: 'IDLE',            // 'IDLE' | 'SPOOLING' | 'WARP' | 'DECELERATING' | 'ORBITING'
  flightTelemetry: {
    currentSpeedC: 0.0,            // Speed in fractions of c (0.0 to 99.999c)
    lorentzFactor: 1.0,            // Gamma factor
    distanceRemainingKm: 0,
    timeDilationShipSec: 0,
    timeDilationEarthSec: 0,
    etaSeconds: 0
  },
  ui: {
    isDetailPanelOpen: false,
    isHabitabilityOpen: false,
    searchQuery: '',
    audioMuted: false,
    hudVisible: true
  }
};
```

### 3.2 State Rules
1. **No Direct Mutation**: State can only be modified through dispatched actions (`dispatch(ActionTypes.SET_TARGET, payload)`).
2. **Subscribers / Observers**: UI components, audio generators, and rendering loops subscribe only to their relevant state slices.
3. **History / Telemetry Tracking**: All warp jumps and destination selections are logged for navigation history and replay.

---

## 4. Feature Specifications

### 4.1 Multi-Scale Universe Hierarchy
| Scale Tier | Typical Objects | Visual Implementation |
| :--- | :--- | :--- |
| **0. Planetary** | Earth, Moon, Mars, Jupiter, Saturn | Textured sphere + Normal/Specular maps + Rayleigh Atmosphere shader |
| **1. Solar System** | Sun, Asteroid Belt, Kuiper Belt, Planets | Keplerian orbit lines + instanced particle belt meshes + Solar flare shader |
| **2. Stellar / Deep Space**| Alpha Centauri, Betelgeuse, Sirius, Nebulae, Black Holes | Procedural corona shaders + Volumetric particle clouds + Gravitational lensing |
| **3. Galactic** | Milky Way, Sagittarius A*, Star Clusters | 200,000+ instanced spiral arm particles + galactic core glow |
| **4. Extragalactic / Universe**| Andromeda, Local Supercluster, Cosmic Web, CMB | Cosmic filament shader + Observable Universe boundary sphere |

### 4.2 Relativistic Flight & Warp Simulation
- **Warp Sequence**:
  1. User selects target $\rightarrow$ `flightStatus = 'SPOOLING'`.
  2. Cockpit locks target vector; HUD displays lock vector and calculated distance.
  3. Warp activation $\rightarrow$ Camera transitions to forward cockpit view.
  4. Hyperdrive acceleration $\rightarrow$ Stars stretch into relativistic streaks using custom GLSL geometry extrusion.
  5. Live relativistic time dilation calculation:
     $$\Delta t' = \Delta t \sqrt{1 - \frac{v^2}{c^2}}$$
     HUD displays **Ship Pilot Elapsed Time** vs **Earth Observer Elapsed Time**.
  6. Arrival & deceleration $\rightarrow$ Smooth exponential drop out of warp into destination orbit.

### 4.3 Astronomical Data & Habitability Engine
- **Metrics Calculated**:
  - Distance from Earth: Calculated live via 3D vector coordinates and calibrated astronomical lookup ($\text{km}$, $\text{AU}$, $\text{Light-Years}$).
  - Travel Time:
    - At speed of light ($c$)
    - At relativistic speed ($0.999c$)
    - Standard chemical rocket (~$40,000\text{ km/h}$)
    - Futuristic fusion drive ($0.1c$)
  - Atmosphere Composition: Bar breakdown ($N_2, O_2, CO_2, CH_4$, Noble Gases, Toxic Elements).
  - Habitability & Occupation Assessment:
    - **Score (0–100%)** based on atmospheric pressure, temperature envelope, gravity, radiation, and water presence.
    - **Occupation Feasibility Report**: Colonization classification (e.g. *Directly Habitable*, *Dome Required*, *Subterranean/Radiation Shielded*, *Extreme Terraforming Required*, *Gas Giant Outpost*).

---

## 5. Testing & Quality Assurance Standard

### 5.1 Test Coverage Requirements
- **100% Core Math & Physics Coverage**: Every mathematical formula (relativity, coordinate transformation, distance formulas, habitability scoring) must have automated unit tests.
- **State Store Coverage**: All state transitions, actions, and subscription callbacks must be tested with edge cases.
- **Data Integrity Tests**: Celestial database must be validated for required fields, valid numerical bounds, and proper asset references.

### 5.2 Test Framework
- **Vitest**: Fast, modern test runner integrated with Vite.
- Test commands configured in `package.json`:
  - `npm run test` (single pass test suite)
  - `npm run test:watch` (watch mode for development)
  - `npm run test:coverage` (code coverage reporting)

---

## 6. Error Handling & Resilience Strategy

1. **WebGL Context Loss & Recovery**:
   - Register `webglcontextlost` and `webglcontextrestored` event listeners on the canvas.
   - Graceful fallback messaging if WebGL 2.0 / WebGL is unavailable on older hardware.
2. **Texture / Asset Loading Fallback**:
   - `AssetLoader` contains procedural canvas-generated fallback textures for all celestial bodies in case high-res texture assets fail to load or timeout.
3. **User Input & Flight Interruptions**:
   - If user changes target mid-warp, flight controller cancels previous trajectory smoothly and recalculates new intercept vector without NaN coordinate errors.
4. **Boundary & Math Validation**:
   - Protect all relativistic calculations against division by zero (e.g. $v = c$ singularity handled with asymptotic limits).

---

## 7. Living Documentation Protocol (README & Test Maintenance)

### Mandatory Maintenance Rules:
1. **Synchronized Documentation**: Whenever a new feature, component, or celestial body is added, the `README.md` MUST be immediately updated with:
   - Feature summary & usage instructions
   - Updated screenshot/diagram or telemetry guide
   - New controls or keyboard shortcuts
2. **Synchronized Unit Tests**: No feature is considered complete until corresponding unit tests in `tests/` are written and passing.
3. **Spec Alignment**: If architectural patterns change, this `SPEC.md` must be updated to reflect the new state.
