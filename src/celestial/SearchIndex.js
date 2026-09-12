/**
 * @file SearchIndex.js
 * Pure, framework-free search logic shared by the search bar and satellite
 * list UI. Kept separate from the DOM-facing widgets so it can be unit
 * tested directly.
 */

import { CELESTIAL_BODIES, searchCelestialBodies } from './CelestialData.js';
import { SATELLITES, searchSatellites } from './SatelliteData.js';

/**
 * @typedef {object} SearchResult
 * @property {string} id
 * @property {string} name
 * @property {'celestial'|'satellite'} kind
 * @property {string} subtitle - short descriptor for the result row.
 */

/**
 * Searches both the celestial database and the satellite database and
 * returns a merged, ranked, de-duplicated result list.
 * @param {string} query
 * @param {{ maxResults?: number }} [options]
 * @returns {SearchResult[]}
 */
export function searchUniverse(query, { maxResults = 8 } = {}) {
  const q = String(query ?? '').trim();
  if (!q) return [];

  const bodies = searchCelestialBodies(q, CELESTIAL_BODIES).map((b) => ({
    id: b.id,
    name: b.name,
    kind: /** @type {const} */ ('celestial'),
    subtitle: b.location
  }));

  const satellites = searchSatellites(q).map((s) => ({
    id: s.id,
    name: s.name,
    kind: /** @type {const} */ ('satellite'),
    subtitle: `${s.agency} · ${s.status}`
  }));

  return [...bodies, ...satellites].slice(0, Math.max(0, maxResults));
}
