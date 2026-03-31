import { describe, expect, it } from "vitest";

import { validTransactionIds } from "./katas";

describe("11 validTransactionIds", () => {
  it("keeps only approved transactions with a string id and positive amount", () => {
    const json = JSON.stringify([
      { id: "tx-1", amount: 50, approved: true },
      { id: "tx-2", amount: 0, approved: true },
      { id: "tx-3", amount: 15, approved: false },
      { amount: 10, approved: true },
      { id: "tx-4", amount: 25, approved: true },
    ]);

    expect(validTransactionIds(json)).toEqual(["tx-1", "tx-4"]);
  });
});
