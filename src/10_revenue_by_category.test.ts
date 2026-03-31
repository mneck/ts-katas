import { describe, expect, it } from "vitest";

import { revenueByCategory } from "./katas";

describe("10 revenueByCategory", () => {
  it("filters out negative amounts and totals revenue by category", () => {
    const json = JSON.stringify([
      { category: "books", amount: 20 },
      { category: "games", amount: 60 },
      { category: "books", amount: -5 },
      { category: "games", amount: 15 },
      { category: "music", amount: 30 },
    ]);

    expect(revenueByCategory(json)).toEqual({
      books: 20,
      games: 75,
      music: 30,
    });
  });
});
