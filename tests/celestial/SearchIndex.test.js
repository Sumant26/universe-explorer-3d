import { describe, it, expect } from "vitest";
import { searchUniverse } from "../../src/celestial/SearchIndex.js";

describe("SearchIndex", () => {
  it("merges celestial and satellite results", () => {
    const results = searchUniverse("a"); // broad query, should match plenty of both kinds
    const kinds = new Set(results.map((r) => r.kind));
    expect(results.length).toBeGreaterThan(0);
    expect(kinds.has("celestial") || kinds.has("satellite")).toBe(true);
  });

  it("finds a satellite by name", () => {
    const results = searchUniverse("hubble");
    expect(results.some((r) => r.id === "hubble" && r.kind === "satellite")).toBe(true);
  });

  it("finds a planet by name", () => {
    const results = searchUniverse("saturn");
    expect(results.some((r) => r.id === "saturn" && r.kind === "celestial")).toBe(true);
  });

  it("respects the maxResults option", () => {
    const results = searchUniverse("a", { maxResults: 3 });
    expect(results.length).toBeLessThanOrEqual(3);
  });

  it("returns an empty array for an empty query", () => {
    expect(searchUniverse("")).toEqual([]);
    expect(searchUniverse("   ")).toEqual([]);
  });

  it("returns an empty array for a query matching nothing", () => {
    expect(searchUniverse("zzzznotreal9999")).toEqual([]);
  });

  it("does not throw on unusual input types", () => {
    expect(() => searchUniverse(null)).not.toThrow();
    expect(() => searchUniverse(undefined)).not.toThrow();
    expect(() => searchUniverse(12345)).not.toThrow();
  });
});
