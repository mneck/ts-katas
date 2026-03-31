import { describe, expect, it } from "vitest";

import { namesUppercase } from "./katas";

describe("01 namesUppercase", () => {
  it("parses a JSON array of names and uppercases each one", () => {
    const json = JSON.stringify(["ada", "grace", "linus"]);

    expect(namesUppercase(json)).toEqual(["ADA", "GRACE", "LINUS"]);
  });

  it("returns an empty array for an empty input array", () => {
    expect(namesUppercase("[]")).toEqual([]);
  });
});
