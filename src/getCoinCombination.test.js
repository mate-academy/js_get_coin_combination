"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("for 1 cent should return 1 penny [1, 0, 0, 0]", () => {
    expect(getCoinCombination(1)).toContain(1, 0, 0, 0);
  });

  it("for 6 cents should return 1 penny + 1 nickel [1, 1, 0, 0]", () => {
    expect(getCoinCombination(6)).toContain(1, 1, 0, 0);
  });

  it("for 17 cents should return 2 pennies + 1 nickel [2, 1, 1, 0]", () => {
    expect(getCoinCombination(17)).toContain(2, 1, 1, 0);
  });

  it("for 17 cents should return 2 quarters [0, 0, 0, 2]", () => {
    expect(getCoinCombination(50)).toContain(0, 0, 0, 2);
  });
});
