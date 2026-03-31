import { describe, expect, it } from "vitest";

import { countByDepartment } from "./katas";

describe("06 countByDepartment", () => {
  it("builds a frequency map using reduce", () => {
    const json = JSON.stringify([
      { name: "Amy", department: "Engineering" },
      { name: "Ben", department: "Support" },
      { name: "Cleo", department: "Engineering" },
      { name: "Drew", department: "Design" },
      { name: "Eli", department: "Engineering" },
    ]);

    expect(countByDepartment(json)).toEqual({
      Design: 1,
      Engineering: 3,
      Support: 1,
    });
  });
});
