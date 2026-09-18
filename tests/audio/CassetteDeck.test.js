import { describe, it, expect } from "vitest";
import { CassetteDeck, CASSETTE_TAPES } from "../../src/audio/CassetteDeck.js";

describe("CassetteDeck", () => {
  it("initializes with 4 collectible tapes and stopped state", () => {
    const deck = new CassetteDeck();
    expect(CASSETTE_TAPES.length).toBe(4);
    expect(deck.isPlaying).toBe(false);
    expect(deck.getCurrentTape().id).toBe("pale-blue-dot");
  });

  it("cycles forward and backward through tapes", () => {
    const deck = new CassetteDeck();
    const tape2 = deck.nextTape();
    expect(tape2.id).toBe("apollo-11");

    const tape3 = deck.nextTape();
    expect(tape3.id).toBe("voyager-record");

    const tape4 = deck.nextTape();
    expect(tape4.id).toBe("captains-log");

    // Wraps around
    const tapeWrap = deck.nextTape();
    expect(tapeWrap.id).toBe("pale-blue-dot");

    // Goes back
    const tapeBack = deck.prevTape();
    expect(tapeBack.id).toBe("captains-log");
  });

  it("sets tape by id directly", () => {
    const deck = new CassetteDeck();
    deck.setTape("voyager-record");
    expect(deck.getCurrentTape().id).toBe("voyager-record");
  });
});
