/**
 * @file SatelliteData.js
 * Curated database of real human-launched satellites and probes, shown as
 * their own searchable, flyable category alongside natural celestial bodies.
 *
 * @typedef {object} SatelliteRecord
 * @property {string} id
 * @property {string} name
 * @property {string} agency - launching agency/consortium.
 * @property {number} launchYear
 * @property {string} status - 'Active' | 'Inactive' | 'Deorbited' | 'Interstellar'.
 * @property {string} purpose - short mission description.
 * @property {string} location - current whereabouts, human-readable.
 * @property {?string} orbitsBodyId - id of a CelestialBody it currently orbits, or null.
 * @property {number} distanceFromEarthKm - current approximate distance from Earth.
 * @property {number} colorHex
 * @property {string} description
 */

/** @type {SatelliteRecord[]} */
export const SATELLITES = [
  {
    id: "iss",
    name: "International Space Station",
    agency: "NASA / Roscosmos / ESA / JAXA / CSA",
    launchYear: 1998,
    status: "Active",
    purpose: "Continuously crewed orbital research laboratory",
    location: "Low Earth Orbit, ~400 km up",
    orbitsBodyId: "earth",
    distanceFromEarthKm: 400,
    colorHex: 0xdadada,
    description: "Humanity’s home in orbit since 2000 — a shared laboratory circling Earth every 93 minutes.",
  },
  {
    id: "hubble",
    name: "Hubble Space Telescope",
    agency: "NASA / ESA",
    launchYear: 1990,
    status: "Active",
    purpose: "Optical/UV space observatory",
    location: "Low Earth Orbit, ~540 km up",
    orbitsBodyId: "earth",
    distanceFromEarthKm: 540,
    colorHex: 0xf2e6c2,
    description: "The observatory that redefined our view of the cosmos, still capturing breathtaking images.",
  },
  {
    id: "jwst",
    name: "James Webb Space Telescope",
    agency: "NASA / ESA / CSA",
    launchYear: 2021,
    status: "Active",
    purpose: "Infrared space observatory",
    location: "Sun-Earth L2 point, ~1.5 million km from Earth",
    orbitsBodyId: null,
    distanceFromEarthKm: 1_500_000,
    colorHex: 0xf9d78c,
    description: "A giant golden-mirrored eye peering deep into infrared light and cosmic history.",
  },
  {
    id: "voyager-1",
    name: "Voyager 1",
    agency: "NASA",
    launchYear: 1977,
    status: "Interstellar",
    purpose: "Outer planet flybys, now interstellar exploration",
    location: "Interstellar space, beyond the heliopause",
    orbitsBodyId: null,
    distanceFromEarthKm: 24_000_000_000,
    colorHex: 0xb8c4d0,
    description: "Humanity’s farthest-flung object, still whispering data home from beyond the Sun’s bubble.",
  },
  {
    id: "voyager-2",
    name: "Voyager 2",
    agency: "NASA",
    launchYear: 1977,
    status: "Interstellar",
    purpose: "Grand Tour of the outer planets, now interstellar",
    location: "Interstellar space, southern sky",
    orbitsBodyId: null,
    distanceFromEarthKm: 20_000_000_000,
    colorHex: 0xb8c4d0,
    description: "The only spacecraft to have visited all four giant planets, now sailing beyond them all.",
  },
  {
    id: "new-horizons",
    name: "New Horizons",
    agency: "NASA",
    launchYear: 2006,
    status: "Active",
    purpose: "Pluto and Kuiper Belt reconnaissance",
    location: "Kuiper Belt, beyond Pluto",
    orbitsBodyId: null,
    distanceFromEarthKm: 8_800_000_000,
    colorHex: 0xd7c8a8,
    description: "The probe that finally showed us Pluto’s heart-shaped glacier up close in 2015.",
  },
  {
    id: "parker-solar-probe",
    name: "Parker Solar Probe",
    agency: "NASA",
    launchYear: 2018,
    status: "Active",
    purpose: "Touching the Sun's outer corona",
    location: "Looping close orbits around the Sun's corona",
    orbitsBodyId: "sun",
    distanceFromEarthKm: 145_000_000,
    colorHex: 0xffb347,
    description: "The fastest object we’ve ever built, diving repeatedly through the Sun’s scorching corona.",
  },
  {
    id: "perseverance",
    name: "Perseverance Rover",
    agency: "NASA",
    launchYear: 2020,
    status: "Active",
    purpose: "Mars surface geology & astrobiology, sample caching",
    location: "Jezero Crater, Mars",
    orbitsBodyId: "mars",
    distanceFromEarthKm: 78_300_000,
    colorHex: 0xc9773f,
    description: "A car-sized rover hunting for signs of ancient microbial life in an old Martian lakebed.",
  },
  {
    id: "cassini",
    name: "Cassini",
    agency: "NASA / ESA / ASI",
    launchYear: 1997,
    status: "Deorbited",
    purpose: "Saturn system orbiter (mission ended 2017)",
    location: "Vaporized in Saturn’s atmosphere (mission end, 2017)",
    orbitsBodyId: "saturn",
    distanceFromEarthKm: 1_275_000_000,
    colorHex: 0xd4c19c,
    description: "Spent 13 years unveiling Saturn’s rings and moons before a deliberate, fiery farewell dive.",
  },
  {
    id: "juno",
    name: "Juno",
    agency: "NASA",
    launchYear: 2011,
    status: "Active",
    purpose: "Jupiter's interior, magnetic field, and poles",
    location: "Polar orbit around Jupiter",
    orbitsBodyId: "jupiter",
    distanceFromEarthKm: 628_700_000,
    colorHex: 0xe8d9b0,
    description: "A solar-powered explorer looping over Jupiter’s poles to peer beneath its clouds.",
  },
  {
    id: "gps-iiif",
    name: "GPS Block IIIF (constellation)",
    agency: "US Space Force",
    launchYear: 2023,
    status: "Active",
    purpose: "Global positioning, navigation & timing",
    location: "Medium Earth Orbit, ~20,200 km up",
    orbitsBodyId: "earth",
    distanceFromEarthKm: 20_200,
    colorHex: 0x9fc8ff,
    description: "One of dozens of navigation satellites quietly telling billions of devices where they are.",
  },
  {
    id: "starlink-shell",
    name: "Starlink Constellation",
    agency: "SpaceX",
    launchYear: 2019,
    status: "Active",
    purpose: "Broadband internet mega-constellation",
    location: "Low Earth Orbit, ~550 km up",
    orbitsBodyId: "earth",
    distanceFromEarthKm: 550,
    colorHex: 0xdedede,
    description: "Thousands of small satellites working together to beam internet down to Earth.",
  },
];

/** @type {Map<string, SatelliteRecord>} */
const satellitesById = new Map(SATELLITES.map((s) => [s.id, s]));

/** @param {string} id @returns {?SatelliteRecord} */
export function getSatelliteById(id) {
  return satellitesById.get(id) ?? null;
}

/**
 * @param {string} query
 * @returns {SatelliteRecord[]}
 */
export function searchSatellites(query) {
  const q = String(query ?? "")
    .trim()
    .toLowerCase();
  if (!q) return [];
  return SATELLITES.filter(
    (s) => s.name.toLowerCase().includes(q) || s.agency.toLowerCase().includes(q) || s.purpose.toLowerCase().includes(q)
  );
}

const REQUIRED_FIELDS = [
  "id",
  "name",
  "agency",
  "launchYear",
  "status",
  "purpose",
  "location",
  "orbitsBodyId",
  "distanceFromEarthKm",
  "colorHex",
  "description",
];
const VALID_STATUSES = new Set(["Active", "Inactive", "Deorbited", "Interstellar"]);

/**
 * @param {SatelliteRecord[]} [satellites]
 * @returns {{valid: boolean, errors: string[]}}
 */
export function validateSatelliteData(satellites = SATELLITES) {
  const errors = [];
  const seenIds = new Set();
  if (!Array.isArray(satellites) || satellites.length === 0) {
    return { valid: false, errors: ["Satellite database is empty"] };
  }
  for (const sat of satellites) {
    const label = sat?.id ?? "(missing id)";
    for (const field of REQUIRED_FIELDS) {
      if (!(field in (sat ?? {}))) errors.push(`${label}: missing field "${field}"`);
    }
    if (sat?.id) {
      if (seenIds.has(sat.id)) errors.push(`${label}: duplicate id`);
      seenIds.add(sat.id);
    }
    if (!VALID_STATUSES.has(sat?.status)) errors.push(`${label}: invalid status "${sat?.status}"`);
    if (typeof sat?.launchYear !== "number" || sat.launchYear < 1957 || sat.launchYear > 2100) {
      errors.push(`${label}: launchYear out of plausible range`);
    }
    if (typeof sat?.distanceFromEarthKm !== "number" || sat.distanceFromEarthKm < 0) {
      errors.push(`${label}: distanceFromEarthKm must be >= 0`);
    }
  }
  return { valid: errors.length === 0, errors };
}
