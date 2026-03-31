import { describe, expect, it } from "vitest";

import { uniqueTags } from "./katas";

describe("07 uniqueTags", () => {
  it("flattens all tags, removes duplicates, and sorts alphabetically", () => {
    const json = JSON.stringify([
      { id: 1, tags: ["ts", "arrays", "json"] },
      { id: 2, tags: ["json", "reduce"] },
      { id: 3, tags: ["filter", "ts"] },
    ]);

    expect(uniqueTags(json)).toEqual([
      "arrays",
      "filter",
      "json",
      "reduce",
      "ts",
    ]);
  });
});
