import { describe, expect, it } from "vitest";

import { topSpender } from "./katas";

describe("08 topSpender", () => {
  it("sums orders by customer and returns the highest spender", () => {
    const json = JSON.stringify([
      { customer: "Ava", amount: 40 },
      { customer: "Noah", amount: 25 },
      { customer: "Ava", amount: 15 },
      { customer: "Mia", amount: 80 },
      { customer: "Noah", amount: 100 },
    ]);

    expect(topSpender(json)).toBe("Noah");
  });

  it("returns null for an empty order list", () => {
    expect(topSpender("[]")).toBeNull();
  });
});
