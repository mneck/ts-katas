import { describe, expect, it } from "vitest";

import { discountedTitles } from "./katas";

describe("04 discountedTitles", () => {
  it("filters on-sale products, maps to titles, and lowercases them", () => {
    const json = JSON.stringify([
      { title: "Monitor", price: 199, onSale: false },
      { title: "Laptop Stand", price: 49, onSale: true },
      { title: "Headphones", price: 79, onSale: true },
    ]);

    expect(discountedTitles(json)).toEqual(["laptop stand", "headphones"]);
  });
});
