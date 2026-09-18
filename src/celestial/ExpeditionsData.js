/**
 * @file ExpeditionsData.js
 * Curated narrative expeditions (story tours) with sequential waypoints,
 * captain's lore briefings, and achievement discovery badges.
 */

export const EXPEDITIONS = [
  {
    id: "voyager-grand-tour",
    title: "The Grand Tour: In the Wake of Voyager",
    subtitle: "Retrace humanity's greatest outer-planet trajectory",
    icon: "🚀",
    description:
      "Embark on the iconic gravity-assist journey across the gas giants, ice worlds, and onward past the heliopause into true interstellar space.",
    badge: {
      id: "badge-voyager",
      name: "Interstellar Pioneer",
      icon: "🛰️",
      description: "Completed the historic outer planetary grand tour.",
    },
    waypoints: [
      {
        targetId: "earth",
        title: "Cape Canaveral Launch",
        briefing:
          "Launch day. Earth's blue cradle recedes beneath us as we ignite the cruise thrusters toward the giant worlds.",
      },
      {
        targetId: "jupiter",
        title: "The Great Gravity Slingshot",
        briefing:
          "Approaching Jupiter. The massive gravity well accelerates our ship, swinging us around the Great Red Spot toward the ringed world.",
      },
      {
        targetId: "saturn",
        title: "Jewel of the Solar System",
        briefing:
          "Saturn's majestic ice rings reflect warm amber sunlight. We skim the ring plane and calibrate our long-range radio antenna.",
      },
      {
        targetId: "uranus",
        title: "The Tilted Ice Giant",
        briefing:
          "Rolling on its side, Uranus glows with serene cyan methane clouds. The cabin sensors record deep magnetospheric whispers.",
      },
      {
        targetId: "neptune",
        title: "The Azure Winds",
        briefing:
          "Neptune's supersonic storms swirl in deep cobalt blues. Triton's cryovolcanoes glisten in the weak, distant Sun.",
      },
      {
        targetId: "voyager-1",
        title: "The Edge of the Sun's Realm",
        briefing:
          "Rendezvous with the legendary Voyager 1 probe beyond the termination shock. Humanity's Golden Record carries our heartbeat into the stars.",
      },
    ],
  },
  {
    id: "habitable-horizons",
    title: "Habitable Horizons: Searching for Earth 2.0",
    subtitle: "Surveying subsurface oceans and Goldilocks exoplanets",
    icon: "🌱",
    description:
      "Investigate planetary worlds with liquid water potential, geothermal vents, and atmospheric biosignatures across the galaxy.",
    badge: {
      id: "badge-astrobiologist",
      name: "Master Astrobiologist",
      icon: "🧬",
      description: "Surveyed the galaxy's most promising candidate habitable worlds.",
    },
    waypoints: [
      {
        targetId: "mars",
        title: "Ancient Riverbeds of Jezero",
        briefing:
          "Scanning dried deltas and Martian iron dunes. Perseverance's tracks lead into fossilized lake sediments.",
      },
      {
        targetId: "europa",
        title: "Subsurface Oceanic Depths",
        briefing: "Jupiter's moon Europa hides a global warm saltwater ocean beneath 20km of cracked tidal ice sheets.",
      },
      {
        targetId: "enceladus",
        title: "Tiger Stripe Geysers",
        briefing:
          "Flying directly through Enceladus's cryovolcanic geyser plumes. Hydrothermal vent signatures confirmed on ship spectrometers.",
      },
      {
        targetId: "proxima-b",
        title: "Our Nearest Exoplanet Neighbor",
        briefing:
          "Orbiting the rocky world around Proxima Centauri, just 4.24 light-years from home in the habitable zone.",
      },
      {
        targetId: "trappist-1e",
        title: "The Crown of TRAPPIST-1",
        briefing:
          "A temperate, Earth-sized world orbiting an ultra-cool red dwarf. Liquid oceans reflect the dim crimson sunrise.",
      },
    ],
  },
  {
    id: "cosmic-leviathans",
    title: "Cosmic Leviathans: Extreme Relativistic Monsters",
    subtitle: "Navigate magnetic singularities and supermassive black holes",
    icon: "🕳️",
    description:
      "Fly past ultra-dense neutron stars, spinning pulsar beacons, and the supermassive black hole anchor at the Milky Way core.",
    badge: {
      id: "badge-singularity",
      name: "Singularity Navigator",
      icon: "🌀",
      description: "Crossed relativistic event horizons and survived deep gravitational wells.",
    },
    waypoints: [
      {
        targetId: "sun",
        title: "Our Stellar Engine",
        briefing:
          "Calibrating heat shields near the solar corona. Solar flares arch 100,000 km into the surrounding vacuum.",
      },
      {
        targetId: "crab-pulsar",
        title: "Spinning Neutron Dynamo",
        briefing:
          "A city-sized stellar core spinning 30 times per second, beaming rhythmic X-ray lighthouse pulses into our cockpit radio.",
      },
      {
        targetId: "cygnus-x1",
        title: "The Stellar Singularity",
        briefing:
          "First confirmed stellar-mass black hole. Blazing accretion gas spirals into the dark gravitational whirlpool.",
      },
      {
        targetId: "sagittarius-a-star",
        title: "Supermassive Heart of the Milky Way",
        briefing:
          "4 million solar masses concentrated in a point. Gravitational lensing warps starfield constellations into perfect Einstein rings.",
      },
    ],
  },
];
