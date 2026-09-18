import { describe, it, expect } from "vitest";
import { SetiScanner, SETI_SIGNALS } from "../../src/audio/SetiScanner.js";

describe("SetiScanner", () => {
  it("defines at least 4 authentic SETI signals", () => {
    expect(SETI_SIGNALS.length).toBeGreaterThanOrEqual(4);
    for (const sig of SETI_SIGNALS) {
      expect(typeof sig.id).toBe("string");
      expect(sig.frequencyMhz).toBeGreaterThan(1420);
      expect(typeof sig.name).toBe("string");
      expect(sig.snrDb).toBeGreaterThan(0);
    }
  });

  it("detects the 1977 Wow! signal when tuned accurately", () => {
    const scanner = new SetiScanner();
    scanner.setFrequency(1420.405);
    const signal = scanner.detectSignal();
    expect(signal).not.toBeNull();
    expect(signal.id).toBe("wow-signal");
    expect(signal.code).toBe("6EQUJ5");
  });

  it("detects no signal when tuned off-frequency", () => {
    const scanner = new SetiScanner();
    scanner.setFrequency(1420.1);
    const signal = scanner.detectSignal();
    expect(signal).toBeNull();
  });

  it("generates 128-bin spectrogram rows with positive values", () => {
    const scanner = new SetiScanner();
    const row = scanner.generateSpectrogramRow();
    expect(row.length).toBe(128);
    expect(row[0]).toBeGreaterThanOrEqual(0);
  });
});
