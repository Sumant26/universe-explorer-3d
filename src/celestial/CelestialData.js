/**
 * @file CelestialData.js
 * Curated database of real astronomical objects spanning five scale tiers,
 * from planets to the observable universe. This is intentionally a
 * hand-picked, well-organized set rather than an exhaustive catalog, so
 * every object can carry rich, accurate, presentable detail.
 *
 * Each object stores raw physical parameters; derived values (habitability
 * score, travel-time breakdowns) are computed on demand by the physics
 * engines so the data and the scoring logic never drift out of sync.
 *
 * @typedef {object} CelestialBody
 * @property {string} id - unique, lowercase, hyphen-free key.
 * @property {string} name - display name.
 * @property {'star'|'planet'|'dwarfPlanet'|'moon'|'asteroidBelt'|'blackHole'|'nebula'|'galaxy'|'structure'} type
 * @property {0|1|2|3|4} scaleTier - 0 Planetary, 1 Solar System, 2 Stellar, 3 Galactic, 4 Extragalactic.
 * @property {string} location - human-readable position description.
 * @property {string} galaxy - host galaxy name ("Milky Way", "Andromeda", "Local Group", ...).
 * @property {?string} solarSystem - host star system name, or null if not applicable.
 * @property {number} distanceFromEarthKm - straight-line distance from Earth, km.
 * @property {number} radiusKm - mean radius, km.
 * @property {number} colorHex - base render color.
 * @property {?{ parentId: ?string, semiMajorAxisAu: number, eccentricity?: number, periodDays: number, inclinationDeg?: number, phaseOffset?: number }} orbit
 * @property {{
 *   surfaceTempC: number, atmosphericPressureAtm: number, surfaceGravityG: number,
 *   radiationIndex: number, hasLiquidWater: boolean, isGasGiant: boolean,
 *   composition: Record<string, number>
 * }} environment
 * @property {string} description - short, warm, plain-language blurb.
 * @property {string[]} tags - extra search keywords.
 */

/** @type {CelestialBody[]} */
export const CELESTIAL_BODIES = [
  // ---------- Scale 0-1: Sun & the Solar System ----------
  {
    id: 'sun', name: 'The Sun', type: 'star', scaleTier: 1,
    location: 'Center of the Solar System', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 149_597_870, radiusKm: 696_340, colorHex: 0xffd27a,
    orbit: null,
    environment: { surfaceTempC: 5500, atmosphericPressureAtm: 0, surfaceGravityG: 27.9, radiationIndex: 10, hasLiquidWater: false, isGasGiant: false, composition: { Hydrogen: 73, Helium: 25, Other: 2 } },
    description: 'A warm, steady G-type star and the heart of our home system.',
    tags: ['star', 'sol', 'home star']
  },
  {
    id: 'mercury', name: 'Mercury', type: 'planet', scaleTier: 0,
    location: '1st planet from the Sun', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 91_700_000, radiusKm: 2439.7, colorHex: 0x9c9287,
    orbit: { parentId: 'sun', semiMajorAxisAu: 0.387, eccentricity: 0.205, periodDays: 88, inclinationDeg: 7 },
    environment: { surfaceTempC: 167, atmosphericPressureAtm: 0, surfaceGravityG: 0.38, radiationIndex: 8, hasLiquidWater: false, isGasGiant: false, composition: { Oxygen: 42, Sodium: 29, Hydrogen: 22, Other: 7 } },
    description: 'The swift, sun-scorched little world closest to our star.',
    tags: ['planet']
  },
  {
    id: 'venus', name: 'Venus', type: 'planet', scaleTier: 0,
    location: '2nd planet from the Sun', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 41_400_000, radiusKm: 6051.8, colorHex: 0xe8c98a,
    orbit: { parentId: 'sun', semiMajorAxisAu: 0.723, eccentricity: 0.007, periodDays: 225, inclinationDeg: 3.4 },
    environment: { surfaceTempC: 464, atmosphericPressureAtm: 92, surfaceGravityG: 0.9, radiationIndex: 3, hasLiquidWater: false, isGasGiant: false, composition: { CO2: 96.5, N2: 3.5 } },
    description: "Earth's cloud-veiled twin, hidden under a crushing, scorching sky.",
    tags: ['planet']
  },
  {
    id: 'earth', name: 'Earth', type: 'planet', scaleTier: 0,
    location: '3rd planet from the Sun', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 0, radiusKm: 6371, colorHex: 0x4d90fe,
    orbit: { parentId: 'sun', semiMajorAxisAu: 1.0, eccentricity: 0.0167, periodDays: 365.25, inclinationDeg: 0 },
    environment: { surfaceTempC: 15, atmosphericPressureAtm: 1, surfaceGravityG: 1, radiationIndex: 1, hasLiquidWater: true, isGasGiant: false, composition: { N2: 78, O2: 21, Argon: 0.9, CO2: 0.04 } },
    description: 'Home. A small, blue, living world — the starting point of every voyage.',
    tags: ['planet', 'home']
  },
  {
    id: 'moon', name: 'The Moon', type: 'moon', scaleTier: 0,
    location: 'Orbiting Earth', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 384_400, radiusKm: 1737.4, colorHex: 0xbbbbbb,
    orbit: { parentId: 'earth', semiMajorAxisAu: 0.00257, eccentricity: 0.055, periodDays: 27.3, inclinationDeg: 5.1 },
    environment: { surfaceTempC: -20, atmosphericPressureAtm: 0, surfaceGravityG: 0.166, radiationIndex: 6, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: "Earth's quiet, cratered companion, and humanity's first step off-world.",
    tags: ['moon', 'luna']
  },
  {
    id: 'mars', name: 'Mars', type: 'planet', scaleTier: 0,
    location: '4th planet from the Sun', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 78_300_000, radiusKm: 3389.5, colorHex: 0xc1440e,
    orbit: { parentId: 'sun', semiMajorAxisAu: 1.524, eccentricity: 0.093, periodDays: 687, inclinationDeg: 1.85 },
    environment: { surfaceTempC: -63, atmosphericPressureAtm: 0.006, surfaceGravityG: 0.38, radiationIndex: 5, hasLiquidWater: false, isGasGiant: false, composition: { CO2: 95, N2: 2.8, Argon: 2 } },
    description: 'The rust-red desert world, and the most talked-about next home for us.',
    tags: ['planet', 'red planet']
  },
  {
    id: 'phobos', name: 'Phobos', type: 'moon', scaleTier: 0,
    location: 'Orbiting Mars', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 78_300_000, radiusKm: 11.3, colorHex: 0x8a7a6a,
    orbit: { parentId: 'mars', semiMajorAxisAu: 0.0000626, eccentricity: 0.015, periodDays: 0.32, inclinationDeg: 1 },
    environment: { surfaceTempC: -40, atmosphericPressureAtm: 0, surfaceGravityG: 0.0057, radiationIndex: 6, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'A lumpy little moon of Mars, slowly spiraling closer over millions of years.',
    tags: ['moon']
  },
  {
    id: 'ceres', name: 'Ceres', type: 'dwarfPlanet', scaleTier: 1,
    location: 'Asteroid Belt', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 263_000_000, radiusKm: 469.7, colorHex: 0xa9a297,
    orbit: { parentId: 'sun', semiMajorAxisAu: 2.77, eccentricity: 0.076, periodDays: 1682, inclinationDeg: 10.6 },
    environment: { surfaceTempC: -105, atmosphericPressureAtm: 0, surfaceGravityG: 0.029, radiationIndex: 5, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'The largest object in the asteroid belt — icy, dusty, and quietly fascinating.',
    tags: ['dwarf planet', 'asteroid belt']
  },
  {
    id: 'asteroid-belt', name: 'The Asteroid Belt', type: 'asteroidBelt', scaleTier: 1,
    location: 'Between Mars and Jupiter', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 329_000_000, radiusKm: 0, colorHex: 0x8f8578,
    orbit: { parentId: 'sun', semiMajorAxisAu: 2.7, eccentricity: 0.08, periodDays: 1600, inclinationDeg: 6 },
    environment: { surfaceTempC: -100, atmosphericPressureAtm: 0, surfaceGravityG: 0, radiationIndex: 5, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'A vast, sparse ring of rock and ice drifting between Mars and Jupiter.',
    tags: ['asteroids', 'belt']
  },
  {
    id: 'jupiter', name: 'Jupiter', type: 'planet', scaleTier: 1,
    location: '5th planet from the Sun', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 628_700_000, radiusKm: 69_911, colorHex: 0xd8ae7e,
    orbit: { parentId: 'sun', semiMajorAxisAu: 5.2, eccentricity: 0.049, periodDays: 4333, inclinationDeg: 1.3 },
    environment: { surfaceTempC: -108, atmosphericPressureAtm: 0, surfaceGravityG: 2.53, radiationIndex: 9, hasLiquidWater: false, isGasGiant: true, composition: { H2: 90, Helium: 10 } },
    description: 'A colossal, storm-swirled giant, its Great Red Spot older than most nations.',
    tags: ['planet', 'gas giant']
  },
  {
    id: 'europa', name: 'Europa', type: 'moon', scaleTier: 1,
    location: 'Orbiting Jupiter', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 628_300_000, radiusKm: 1560.8, colorHex: 0xe4d8c4,
    orbit: { parentId: 'jupiter', semiMajorAxisAu: 0.0045, eccentricity: 0.009, periodDays: 3.55, inclinationDeg: 0.47 },
    environment: { surfaceTempC: -160, atmosphericPressureAtm: 0, surfaceGravityG: 0.134, radiationIndex: 7, hasLiquidWater: true, isGasGiant: false, composition: { O2: 100 } },
    description: 'An icy moon hiding a vast liquid ocean — one of our best bets for alien life.',
    tags: ['moon', 'ocean world']
  },
  {
    id: 'saturn', name: 'Saturn', type: 'planet', scaleTier: 1,
    location: '6th planet from the Sun', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 1_275_000_000, radiusKm: 58_232, colorHex: 0xead6a8,
    orbit: { parentId: 'sun', semiMajorAxisAu: 9.58, eccentricity: 0.057, periodDays: 10_759, inclinationDeg: 2.5 },
    environment: { surfaceTempC: -139, atmosphericPressureAtm: 0, surfaceGravityG: 1.06, radiationIndex: 8, hasLiquidWater: false, isGasGiant: true, composition: { H2: 96, Helium: 3, Other: 1 } },
    description: 'The ringed jewel of the Solar System, wrapped in delicate bands of ice.',
    tags: ['planet', 'rings', 'gas giant']
  },
  {
    id: 'titan', name: 'Titan', type: 'moon', scaleTier: 1,
    location: 'Orbiting Saturn', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 1_275_000_000, radiusKm: 2574.7, colorHex: 0xe0a95c,
    orbit: { parentId: 'saturn', semiMajorAxisAu: 0.00817, eccentricity: 0.028, periodDays: 15.9, inclinationDeg: 0.35 },
    environment: { surfaceTempC: -179, atmosphericPressureAtm: 1.45, surfaceGravityG: 0.14, radiationIndex: 3, hasLiquidWater: false, isGasGiant: false, composition: { N2: 95, CH4: 5 } },
    description: 'A hazy orange moon with rivers and lakes — but of liquid methane, not water.',
    tags: ['moon']
  },
  {
    id: 'uranus', name: 'Uranus', type: 'planet', scaleTier: 1,
    location: '7th planet from the Sun', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 2_720_000_000, radiusKm: 25_362, colorHex: 0xa9d8d8,
    orbit: { parentId: 'sun', semiMajorAxisAu: 19.2, eccentricity: 0.047, periodDays: 30_687, inclinationDeg: 0.77 },
    environment: { surfaceTempC: -197, atmosphericPressureAtm: 0, surfaceGravityG: 0.89, radiationIndex: 7, hasLiquidWater: false, isGasGiant: true, composition: { H2: 82.5, Helium: 15.2, CH4: 2.3 } },
    description: 'A tilted, pale-cyan ice giant that rolls around the Sun on its side.',
    tags: ['planet', 'ice giant']
  },
  {
    id: 'neptune', name: 'Neptune', type: 'planet', scaleTier: 1,
    location: '8th planet from the Sun', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 4_350_000_000, radiusKm: 24_622, colorHex: 0x5b7fe0,
    orbit: { parentId: 'sun', semiMajorAxisAu: 30.05, eccentricity: 0.009, periodDays: 60_190, inclinationDeg: 1.77 },
    environment: { surfaceTempC: -201, atmosphericPressureAtm: 0, surfaceGravityG: 1.14, radiationIndex: 7, hasLiquidWater: false, isGasGiant: true, composition: { H2: 80, Helium: 19, CH4: 1 } },
    description: 'The deep-blue, windswept edge of the known Solar System.',
    tags: ['planet', 'ice giant']
  },
  {
    id: 'pluto', name: 'Pluto', type: 'dwarfPlanet', scaleTier: 1,
    location: 'Kuiper Belt', galaxy: 'Milky Way', solarSystem: 'Sol',
    distanceFromEarthKm: 5_900_000_000, radiusKm: 1188.3, colorHex: 0xcbb193,
    orbit: { parentId: 'sun', semiMajorAxisAu: 39.5, eccentricity: 0.249, periodDays: 90_560, inclinationDeg: 17.2 },
    environment: { surfaceTempC: -229, atmosphericPressureAtm: 0.00001, surfaceGravityG: 0.063, radiationIndex: 5, hasLiquidWater: false, isGasGiant: false, composition: { N2: 98, CH4: 1.5, CO: 0.5 } },
    description: 'A small, heart-marked world at the frosty edge of the Kuiper Belt.',
    tags: ['dwarf planet', 'kuiper belt']
  },

  // ---------- Scale 2: Stellar neighborhood & deep space ----------
  {
    id: 'proxima-centauri', name: 'Proxima Centauri', type: 'star', scaleTier: 2,
    location: 'Nearest star system to the Sun', galaxy: 'Milky Way', solarSystem: 'Alpha Centauri',
    distanceFromEarthKm: 39_920_000_000_000, radiusKm: 107_000, colorHex: 0xff6b4a,
    orbit: null,
    environment: { surfaceTempC: 2800, atmosphericPressureAtm: 0, surfaceGravityG: 45, radiationIndex: 9, hasLiquidWater: false, isGasGiant: false, composition: { Hydrogen: 74, Helium: 25, Other: 1 } },
    description: 'A dim, flare-prone red dwarf — our nearest stellar neighbor, 4.24 light-years out.',
    tags: ['star', 'red dwarf']
  },
  {
    id: 'proxima-b', name: 'Proxima Centauri b', type: 'planet', scaleTier: 2,
    location: 'Orbiting Proxima Centauri', galaxy: 'Milky Way', solarSystem: 'Alpha Centauri',
    distanceFromEarthKm: 39_920_000_000_000, radiusKm: 7000, colorHex: 0x8fa4c9,
    orbit: { parentId: 'proxima-centauri', semiMajorAxisAu: 0.0485, eccentricity: 0.02, periodDays: 11.2, inclinationDeg: 0 },
    environment: { surfaceTempC: -39, atmosphericPressureAtm: 0.6, surfaceGravityG: 1.1, radiationIndex: 7, hasLiquidWater: true, isGasGiant: false, composition: { N2: 60, CO2: 30, Other: 10 } },
    description: "A rocky exoplanet in Proxima's habitable zone — tantalizingly close, cosmically speaking.",
    tags: ['exoplanet', 'planet']
  },
  {
    id: 'alpha-centauri-a', name: 'Alpha Centauri A', type: 'star', scaleTier: 2,
    location: 'Alpha Centauri system', galaxy: 'Milky Way', solarSystem: 'Alpha Centauri',
    distanceFromEarthKm: 41_100_000_000_000, radiusKm: 855_000, colorHex: 0xfff2d0,
    orbit: null,
    environment: { surfaceTempC: 5800, atmosphericPressureAtm: 0, surfaceGravityG: 24, radiationIndex: 10, hasLiquidWater: false, isGasGiant: false, composition: { Hydrogen: 71, Helium: 27, Other: 2 } },
    description: "A sun-like star, sibling to Alpha Centauri B, 4.37 light-years from home.",
    tags: ['star']
  },
  {
    id: 'sirius-a', name: 'Sirius A', type: 'star', scaleTier: 2,
    location: 'Canis Major', galaxy: 'Milky Way', solarSystem: 'Sirius',
    distanceFromEarthKm: 81_500_000_000_000, radiusKm: 1_192_000, colorHex: 0xcfe8ff,
    orbit: null,
    environment: { surfaceTempC: 9940, atmosphericPressureAtm: 0, surfaceGravityG: 4.5, radiationIndex: 10, hasLiquidWater: false, isGasGiant: false, composition: { Hydrogen: 70, Helium: 28, Other: 2 } },
    description: 'The brightest star in Earth’s night sky, blazing blue-white 8.6 light-years away.',
    tags: ['star', 'brightest star']
  },
  {
    id: 'betelgeuse', name: 'Betelgeuse', type: 'star', scaleTier: 2,
    location: 'Orion', galaxy: 'Milky Way', solarSystem: null,
    distanceFromEarthKm: 3_781_000_000_000_000, radiusKm: 617_000_000, colorHex: 0xff6a3c,
    orbit: null,
    environment: { surfaceTempC: 3500, atmosphericPressureAtm: 0, surfaceGravityG: 0.02, radiationIndex: 9, hasLiquidWater: false, isGasGiant: false, composition: { Hydrogen: 60, Helium: 38, Other: 2 } },
    description: 'A vast, dying red supergiant in Orion’s shoulder, due to end in a supernova someday.',
    tags: ['star', 'supergiant', 'orion']
  },
  {
    id: 'sagittarius-a-star', name: 'Sagittarius A*', type: 'blackHole', scaleTier: 2,
    location: 'Galactic Center', galaxy: 'Milky Way', solarSystem: null,
    distanceFromEarthKm: 2.466e17, radiusKm: 12_000_000, colorHex: 0x1a1a22,
    orbit: null,
    environment: { surfaceTempC: NaN, atmosphericPressureAtm: 0, surfaceGravityG: Infinity, radiationIndex: 10, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'The supermassive black hole anchoring the Milky Way, 26,000 light-years away.',
    tags: ['black hole', 'galactic center']
  },
  {
    id: 'eagle-nebula', name: 'Eagle Nebula (Pillars of Creation)', type: 'nebula', scaleTier: 2,
    location: 'Serpens', galaxy: 'Milky Way', solarSystem: null,
    distanceFromEarthKm: 6.803e16, radiusKm: 4.5e13, colorHex: 0xd88b5a,
    orbit: null,
    environment: { surfaceTempC: NaN, atmosphericPressureAtm: 0, surfaceGravityG: 0, radiationIndex: 6, hasLiquidWater: false, isGasGiant: false, composition: { Hydrogen: 90, Dust: 10 } },
    description: 'Towering columns of gas and dust where new stars are quietly being born.',
    tags: ['nebula', 'star nursery']
  },
  {
    id: 'orion-nebula', name: 'Orion Nebula', type: 'nebula', scaleTier: 2,
    location: 'Orion', galaxy: 'Milky Way', solarSystem: null,
    distanceFromEarthKm: 1.29e16, radiusKm: 1.2e13, colorHex: 0xff9ad1,
    orbit: null,
    environment: { surfaceTempC: NaN, atmosphericPressureAtm: 0, surfaceGravityG: 0, radiationIndex: 6, hasLiquidWater: false, isGasGiant: false, composition: { Hydrogen: 92, Dust: 8 } },
    description: 'A glowing stellar nursery, visible to the naked eye as a soft smudge in Orion’s sword.',
    tags: ['nebula', 'star nursery']
  },

  // ---------- Scale 3: Galactic ----------
  {
    id: 'milky-way', name: 'The Milky Way', type: 'galaxy', scaleTier: 3,
    location: 'Local Group', galaxy: 'Milky Way', solarSystem: null,
    distanceFromEarthKm: 0, radiusKm: 4.73e17, colorHex: 0xd9c9ff,
    orbit: null,
    environment: { surfaceTempC: NaN, atmosphericPressureAtm: 0, surfaceGravityG: 0, radiationIndex: 0, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'Our own barred spiral galaxy — 100-400 billion stars, and every world we’ve named, all inside it.',
    tags: ['galaxy', 'home galaxy']
  },
  {
    id: 'andromeda', name: 'Andromeda Galaxy (M31)', type: 'galaxy', scaleTier: 3,
    location: 'Local Group', galaxy: 'Local Group', solarSystem: null,
    distanceFromEarthKm: 2.365e19, radiusKm: 1.1e18, colorHex: 0xbcd4ff,
    orbit: null,
    environment: { surfaceTempC: NaN, atmosphericPressureAtm: 0, surfaceGravityG: 0, radiationIndex: 0, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'Our nearest large galactic neighbor, quietly approaching for a future merger.',
    tags: ['galaxy']
  },
  {
    id: 'triangulum', name: 'Triangulum Galaxy (M33)', type: 'galaxy', scaleTier: 3,
    location: 'Local Group', galaxy: 'Local Group', solarSystem: null,
    distanceFromEarthKm: 2.727e19, radiusKm: 3e17, colorHex: 0xc9e3ff,
    orbit: null,
    environment: { surfaceTempC: NaN, atmosphericPressureAtm: 0, surfaceGravityG: 0, radiationIndex: 0, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'The third-largest galaxy in the Local Group, a soft spiral pinwheel in Triangulum.',
    tags: ['galaxy']
  },

  // ---------- Scale 4: Extragalactic / universe-scale ----------
  {
    id: 'laniakea', name: 'Laniakea Supercluster', type: 'structure', scaleTier: 4,
    location: 'Local Supercluster', galaxy: 'Laniakea', solarSystem: null,
    distanceFromEarthKm: 0, radiusKm: 4.7e21, colorHex: 0xffe9c2,
    orbit: null,
    environment: { surfaceTempC: NaN, atmosphericPressureAtm: 0, surfaceGravityG: 0, radiationIndex: 0, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'The vast supercluster of galaxies that contains the Milky Way — "immense heaven" in Hawaiian.',
    tags: ['supercluster', 'structure']
  },
  {
    id: 'cosmic-web', name: 'The Cosmic Web', type: 'structure', scaleTier: 4,
    location: 'Observable Universe', galaxy: 'Observable Universe', solarSystem: null,
    distanceFromEarthKm: 0, radiusKm: 4.4e23, colorHex: 0x9fd6ff,
    orbit: null,
    environment: { surfaceTempC: NaN, atmosphericPressureAtm: 0, surfaceGravityG: 0, radiationIndex: 0, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'The immense filament-and-void scaffolding along which every galaxy is strung.',
    tags: ['cosmic web', 'structure']
  },
  {
    id: 'cmb-horizon', name: 'Cosmic Microwave Background Horizon', type: 'structure', scaleTier: 4,
    location: 'Edge of the observable universe', galaxy: 'Observable Universe', solarSystem: null,
    distanceFromEarthKm: 4.4e23, radiusKm: 0, colorHex: 0xffd7a8,
    orbit: null,
    environment: { surfaceTempC: -270.4, atmosphericPressureAtm: 0, surfaceGravityG: 0, radiationIndex: 0, hasLiquidWater: false, isGasGiant: false, composition: { Trace: 100 } },
    description: 'The faint afterglow of the Big Bang itself — the farthest light we can ever see.',
    tags: ['cmb', 'big bang', 'structure']
  }
];

/** @type {Map<string, CelestialBody>} */
const bodiesById = new Map(CELESTIAL_BODIES.map((b) => [b.id, b]));

/** @param {string} id @returns {?CelestialBody} */
export function getCelestialBodyById(id) {
  return bodiesById.get(id) ?? null;
}

/** @param {number} scaleTier @returns {CelestialBody[]} */
export function getBodiesByScale(scaleTier) {
  return CELESTIAL_BODIES.filter((b) => b.scaleTier === scaleTier);
}

/**
 * Case-insensitive substring/tag search across the database.
 * @param {string} query
 * @param {CelestialBody[]} [source]
 * @returns {CelestialBody[]} matches, best (name-match) first.
 */
export function searchCelestialBodies(query, source = CELESTIAL_BODIES) {
  const q = String(query ?? '').trim().toLowerCase();
  if (!q) return [];
  const nameMatches = [];
  const otherMatches = [];
  for (const body of source) {
    const name = body.name.toLowerCase();
    if (name.includes(q)) {
      nameMatches.push(body);
    } else if (body.tags.some((t) => t.toLowerCase().includes(q)) || body.location.toLowerCase().includes(q)) {
      otherMatches.push(body);
    }
  }
  nameMatches.sort((a, b) => a.name.length - b.name.length);
  return [...nameMatches, ...otherMatches];
}

const REQUIRED_FIELDS = [
  'id', 'name', 'type', 'scaleTier', 'location', 'galaxy', 'solarSystem',
  'distanceFromEarthKm', 'radiusKm', 'colorHex', 'orbit', 'environment', 'description', 'tags'
];
const REQUIRED_ENV_FIELDS = [
  'surfaceTempC', 'atmosphericPressureAtm', 'surfaceGravityG', 'radiationIndex',
  'hasLiquidWater', 'isGasGiant', 'composition'
];

/**
 * Validates the whole database for required fields and sane numeric bounds.
 * Used by data-integrity tests, and defensively by the app on boot.
 * @param {CelestialBody[]} [bodies]
 * @returns {{valid: boolean, errors: string[]}}
 */
export function validateCelestialData(bodies = CELESTIAL_BODIES) {
  const errors = [];
  const seenIds = new Set();

  if (!Array.isArray(bodies) || bodies.length === 0) {
    return { valid: false, errors: ['Celestial database is empty'] };
  }

  for (const body of bodies) {
    const label = body?.id ?? '(missing id)';
    for (const field of REQUIRED_FIELDS) {
      if (!(field in (body ?? {}))) errors.push(`${label}: missing field "${field}"`);
    }
    if (body?.id) {
      if (seenIds.has(body.id)) errors.push(`${label}: duplicate id`);
      seenIds.add(body.id);
    }
    if (typeof body?.scaleTier !== 'number' || body.scaleTier < 0 || body.scaleTier > 4) {
      errors.push(`${label}: scaleTier out of range [0,4]`);
    }
    if (typeof body?.distanceFromEarthKm !== 'number' || body.distanceFromEarthKm < 0) {
      errors.push(`${label}: distanceFromEarthKm must be >= 0`);
    }
    if (typeof body?.radiusKm !== 'number' || body.radiusKm < 0) {
      errors.push(`${label}: radiusKm must be >= 0`);
    }
    if (body?.orbit) {
      if (typeof body.orbit.semiMajorAxisAu !== 'number') errors.push(`${label}: orbit.semiMajorAxisAu must be a number`);
      if (typeof body.orbit.periodDays !== 'number' || body.orbit.periodDays <= 0) {
        errors.push(`${label}: orbit.periodDays must be > 0`);
      }
    }
    const env = body?.environment;
    if (!env) {
      errors.push(`${label}: missing environment`);
    } else {
      for (const field of REQUIRED_ENV_FIELDS) {
        if (!(field in env)) errors.push(`${label}: environment missing "${field}"`);
      }
    }
    if (!Array.isArray(body?.tags)) errors.push(`${label}: tags must be an array`);
  }

  return { valid: errors.length === 0, errors };
}
