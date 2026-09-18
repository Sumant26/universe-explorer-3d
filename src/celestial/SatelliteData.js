/**
 * @file SatelliteData.js
 * Curated database of real human-launched satellites, space telescopes, and interplanetary probes,
 * shown as their own searchable, flyable category alongside natural celestial bodies.
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
    purpose: "Optical / UV / Near-IR space observatory",
    location: "Low Earth Orbit, ~540 km up",
    orbitsBodyId: "earth",
    distanceFromEarthKm: 540,
    colorHex: 0xf2e6c2,
    description: "The legendary observatory that transformed our understanding of cosmic age and expansion.",
  },
  {
    id: "jwst",
    name: "James Webb Space Telescope",
    agency: "NASA / ESA / CSA",
    launchYear: 2021,
    status: "Active",
    purpose: "Deep infrared space observatory",
    location: "Sun-Earth L2 Lagrange point, ~1.5M km from Earth",
    orbitsBodyId: null,
    distanceFromEarthKm: 1_500_000,
    colorHex: 0xf9d78c,
    description: "Humanity's golden-mirrored infrared eye peering back to the very first galaxies after the Big Bang.",
  },
  {
    id: "parker-solar-probe",
    name: "Parker Solar Probe",
    agency: "NASA",
    launchYear: 2018,
    status: "Active",
    purpose: "Solar corona in-situ exploration",
    location: "Inner Solar System / Solar Corona",
    orbitsBodyId: "sun",
    distanceFromEarthKm: 130_000_000,
    colorHex: 0xffaa44,
    description:
      "The fastest human-made craft ever built (700,000 km/h), repeatedly 'touching' the Sun's blistering corona.",
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
    description: "Humanity’s farthest-flung emissary, carrying the Golden Record beyond our Sun’s protective bubble.",
  },
  {
    id: "voyager-2",
    name: "Voyager 2",
    agency: "NASA",
    launchYear: 1977,
    status: "Interstellar",
    purpose: "Grand Tour of Jupiter, Saturn, Uranus, and Neptune",
    location: "Interstellar space, southern celestial hemisphere",
    orbitsBodyId: null,
    distanceFromEarthKm: 20_000_000_000,
    colorHex: 0xb8c4d0,
    description: "The only spacecraft to date to have visited all four outer gas and ice giant worlds.",
  },
  {
    id: "new-horizons",
    name: "New Horizons",
    agency: "NASA",
    launchYear: 2006,
    status: "Active",
    purpose: "Pluto system and Kuiper Belt reconnaissance",
    location: "Kuiper Belt, beyond Pluto and Arrokoth",
    orbitsBodyId: null,
    distanceFromEarthKm: 8_800_000_000,
    colorHex: 0xd7c8a8,
    description:
      "The intrepid probe that unveiled the high-resolution glaciers, mountains, and heart of Pluto in 2015.",
  },
  {
    id: "cassini-huygens",
    name: "Cassini-Huygens",
    agency: "NASA / ESA / ASI",
    launchYear: 1997,
    status: "Deorbited",
    purpose: "Saturn system orbital exploration and Titan landing",
    location: "Atmosphere of Saturn (Grand Finale dive)",
    orbitsBodyId: "saturn",
    distanceFromEarthKm: 1_275_000_000,
    colorHex: 0xd4af37,
    description:
      "Explored Saturn's rings, dropped the Huygens lander on Titan, and found Enceladus's cryovolcanic geysers.",
  },
  {
    id: "juno",
    name: "Juno",
    agency: "NASA",
    launchYear: 2011,
    status: "Active",
    purpose: "Jupiter polar orbit and interior structure mapping",
    location: "Polar orbit around Jupiter",
    orbitsBodyId: "jupiter",
    distanceFromEarthKm: 628_700_000,
    colorHex: 0xe09b55,
    description:
      "Solar-powered spacecraft peeling back the deep cloud layers, storms, and magnetic dynamos of Jupiter.",
  },
  {
    id: "kepler-telescope",
    name: "Kepler Space Telescope",
    agency: "NASA",
    launchYear: 2009,
    status: "Inactive",
    purpose: "Exoplanet transit discovery mission",
    location: "Earth-trailing heliocentric orbit",
    orbitsBodyId: null,
    distanceFromEarthKm: 150_000_000,
    colorHex: 0x90caf9,
    description: "The prolific planet-hunter that discovered over 2,600 verified alien worlds across our galaxy.",
  },
  {
    id: "chandra",
    name: "Chandra X-ray Observatory",
    agency: "NASA",
    launchYear: 1999,
    status: "Active",
    purpose: "High-resolution X-ray astronomical imaging",
    location: "High Earth Orbit",
    orbitsBodyId: "earth",
    distanceFromEarthKm: 140_000,
    colorHex: 0xb388ff,
    description: "Capturing high-energy X-rays from exploding stars, accretion disks, and supermassive black holes.",
  },
  {
    id: "spitzer",
    name: "Spitzer Space Telescope",
    agency: "NASA",
    launchYear: 2003,
    status: "Inactive",
    purpose: "Infrared space astronomy",
    location: "Earth-trailing heliocentric orbit",
    orbitsBodyId: null,
    distanceFromEarthKm: 260_000_000,
    colorHex: 0xff8a80,
    description:
      "Unveiled the infrared universe, discovering planetary systems and imaging deep star-forming nurseries.",
  },
  {
    id: "pioneer-10",
    name: "Pioneer 10",
    agency: "NASA",
    launchYear: 1972,
    status: "Inactive",
    purpose: "First mission to traverse the asteroid belt and visit Jupiter",
    location: "Interstellar trajectory toward Aldebaran",
    orbitsBodyId: null,
    distanceFromEarthKm: 19_500_000_000,
    colorHex: 0xc5cae9,
    description:
      "The trailblazer carrying the iconic Pioneer plaque, bound toward the star Aldebaran over millions of years.",
  },
  {
    id: "rosetta",
    name: "Rosetta & Philae",
    agency: "ESA",
    launchYear: 2004,
    status: "Deorbited",
    purpose: "First comet orbital rendezvous and soft landing",
    location: "Surface of Comet 67P/Churyumov–Gerasimenko",
    orbitsBodyId: "comet-67p",
    distanceFromEarthKm: 580_000_000,
    colorHex: 0x80cbc4,
    description: "Achieved the historic first orbital escort and robotic surface landing on a speeding comet.",
  },
  {
    id: "osiris-rex",
    name: "OSIRIS-REx / OSIRIS-APEX",
    agency: "NASA",
    launchYear: 2016,
    status: "Active",
    purpose: "Asteroid Bennu sample return, en route to Apophis",
    location: "Interplanetary trajectory toward asteroid Apophis",
    orbitsBodyId: null,
    distanceFromEarthKm: 320_000_000,
    colorHex: 0xffee58,
    description:
      "Successfully delivered pristine carbonaceous sample material from asteroid Bennu back to Earth in 2023.",
  },
  {
    id: "hayabusa2",
    name: "Hayabusa2",
    agency: "JAXA",
    launchYear: 2014,
    status: "Active",
    purpose: "Asteroid Ryugu sample return, extended mission",
    location: "Interplanetary trajectory",
    orbitsBodyId: null,
    distanceFromEarthKm: 280_000_000,
    colorHex: 0xff7043,
    description:
      "Fired kinetic impactors and returned pristine organic and water-bearing fragments from asteroid Ryugu.",
  },
  {
    id: "chandrayaan-3",
    name: "Chandrayaan-3 (Vikram & Pragyan)",
    agency: "ISRO",
    launchYear: 2023,
    status: "Inactive",
    purpose: "Lunar south polar soft landing and rover exploration",
    location: "Lunar South Pole (Shiv Shakti Point)",
    orbitsBodyId: "moon",
    distanceFromEarthKm: 384_400,
    colorHex: 0xff9933,
    description: "Humanity's first successful soft landing at the Moon’s southern polar highland region.",
  },
  {
    id: "tianwen-1",
    name: "Tianwen-1 & Zhurong",
    agency: "CNSA",
    launchYear: 2020,
    status: "Active",
    purpose: "Mars orbiter and Utopia Planitia rover",
    location: "Mars Orbit & Utopia Planitia",
    orbitsBodyId: "mars",
    distanceFromEarthKm: 78_300_000,
    colorHex: 0xef5350,
    description:
      "China's comprehensive maiden Mars mission, deploying an orbiter, lander, and subterranean radar rover.",
  },
  {
    id: "solar-orbiter",
    name: "Solar Orbiter",
    agency: "ESA / NASA",
    launchYear: 2020,
    status: "Active",
    purpose: "High-latitude imagery of the Sun's polar regions",
    location: "Inner heliocentric elliptical orbit",
    orbitsBodyId: "sun",
    distanceFromEarthKm: 95_000_000,
    colorHex: 0xffb74d,
    description:
      "Capturing the closest-ever photographs of the Sun and unprecedented views of its uncharted north and south poles.",
  },
  {
    id: "psyche-probe",
    name: "Psyche",
    agency: "NASA",
    launchYear: 2023,
    status: "Active",
    purpose: "Exploration of metallic asteroid 16 Psyche",
    location: "En route to the Main Asteroid Belt (2029 arrival)",
    orbitsBodyId: null,
    distanceFromEarthKm: 420_000_000,
    colorHex: 0x90a4ae,
    description:
      "Equipped with Hall-effect thrusters to explore a unique world made largely of exposed nickel-iron metallic core material.",
  },
];

/** @type {Map<string, SatelliteRecord>} */
const satsById = new Map(SATELLITES.map((s) => [s.id, s]));

/** @param {string} id @returns {?SatelliteRecord} */
export function getSatelliteById(id) {
  return satsById.get(id) ?? null;
}

/**
 * @param {string} query
 * @param {SatelliteRecord[]} [source]
 * @returns {SatelliteRecord[]}
 */
export function searchSatellites(query, source = SATELLITES) {
  const q = String(query ?? "")
    .trim()
    .toLowerCase();
  if (!q) return [];
  const nameMatches = [];
  const otherMatches = [];
  for (const sat of source) {
    if (sat.name.toLowerCase().includes(q)) {
      nameMatches.push(sat);
    } else if (
      sat.agency.toLowerCase().includes(q) ||
      sat.location.toLowerCase().includes(q) ||
      sat.purpose.toLowerCase().includes(q) ||
      sat.status.toLowerCase().includes(q)
    ) {
      otherMatches.push(sat);
    }
  }
  nameMatches.sort((a, b) => a.name.length - b.name.length);
  return [...nameMatches, ...otherMatches];
}

const REQUIRED_SATELLITE_FIELDS = [
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
 * Validates the satellite database for required fields and valid status values.
 * @param {SatelliteRecord[]} [satellites]
 * @returns {{valid: boolean, errors: string[]}}
 */
export function validateSatelliteData(satellites = SATELLITES) {
  const errors = [];
  const seenIds = new Set();

  if (!Array.isArray(satellites) || satellites.length === 0) {
    return { valid: false, errors: ["Satellite database is empty"] };
  }

  const currentYear = new Date().getFullYear();

  for (const sat of satellites) {
    const label = sat?.id ?? "(missing id)";
    for (const field of REQUIRED_SATELLITE_FIELDS) {
      if (!(field in (sat ?? {}))) errors.push(`${label}: missing field "${field}"`);
    }
    if (sat?.id) {
      if (seenIds.has(sat.id)) errors.push(`${label}: duplicate id`);
      seenIds.add(sat.id);
    }
    if (sat?.status && !VALID_STATUSES.has(sat.status)) {
      errors.push(`${label}: invalid status "${sat.status}"`);
    }
    if (typeof sat?.launchYear !== "number" || sat.launchYear < 1957 || sat.launchYear > currentYear + 2) {
      errors.push(`${label}: launchYear out of range [1957, ${currentYear + 2}]`);
    }
    if (typeof sat?.distanceFromEarthKm !== "number" || sat.distanceFromEarthKm < 0) {
      errors.push(`${label}: distanceFromEarthKm must be >= 0`);
    }
  }

  return { valid: errors.length === 0, errors };
}
