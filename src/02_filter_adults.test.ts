import { describe, expect, it } from "vitest";

import { filterAdults } from "./katas";

describe("02 filterAdults", () => {
  it("keeps only people who are 18 or older", () => {
    const json = JSON.stringify([
      { name: "Nina", age: 17 },
      { name: "Omar", age: 18 },
      { name: "Priya", age: 26 },
    ]);

    expect(filterAdults(json)).toEqual([
      { name: "Omar", age: 18 },
      { name: "Priya", age: 26 },
    ]);
  });

  it("returns an empty array when nobody qualifies", () => {
    const json = JSON.stringify([
      { name: "Kai", age: 14 },
      { name: "Mila", age: 16 },
    ]);

    expect(filterAdults(json)).toEqual([]);
  });
});
