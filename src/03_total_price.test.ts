import { describe, expect, it } from "vitest";

import { totalPrice } from "./katas";

describe("03 totalPrice", () => {
  it("adds all product prices with reduce", () => {
    const json = JSON.stringify([
      { title: "Keyboard", price: 99.99, onSale: false },
      { title: "Mouse", price: 25.0, onSale: true },
      { title: "Cable", price: 10.0, onSale: true },
    ]);

    expect(totalPrice(json)).toBeCloseTo(134.99);
  });

  it("returns zero for an empty list", () => {
    expect(totalPrice("[]")).toBe(0);
  });
});
