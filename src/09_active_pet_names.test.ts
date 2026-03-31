import { describe, expect, it } from "vitest";

import { activePetNames } from "./katas";

describe("09 activePetNames", () => {
  it("collects active pet names across nested arrays", () => {
    const json = JSON.stringify([
      {
        owner: "Ivy",
        pets: [
          { name: "Pixel", active: true },
          { name: "Dusty", active: false },
        ],
      },
      {
        owner: "Jon",
        pets: [
          { name: "Scout", active: true },
          { name: "Mochi", active: true },
        ],
      },
    ]);

    expect(activePetNames(json)).toEqual(["Pixel", "Scout", "Mochi"]);
  });
});
