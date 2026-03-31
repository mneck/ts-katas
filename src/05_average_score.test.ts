import { describe, expect, it } from "vitest";

import { averageScore } from "./katas";

describe("05 averageScore", () => {
  it("computes the average score from a JSON array", () => {
    const json = JSON.stringify([
      { candidate: "A", score: 80 },
      { candidate: "B", score: 90 },
      { candidate: "C", score: 100 },
    ]);

    expect(averageScore(json)).toBe(90);
  });

  it("returns zero when the list is empty", () => {
    expect(averageScore("[]")).toBe(0);
  });
});
