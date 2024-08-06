"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("should return 1 penni for 1", () => {
    const result = getCoinCombination(1);
    expect(result).toEqual([1, 0, 0, 0]);
  });

  it("should return 1 penni + 1 nickel for 6", () => {
    const result = getCoinCombination(6);
    expect(result).toEqual([1, 1, 0, 0]);
  });

  it("should return 4 penni + 1 nikel + 1 dime for 19", () => {
    const result = getCoinCombination(19);
    expect(result).toEqual([4, 1, 1, 0]);
  });

  it("should return 4 quaters for 100", () => {
    const result = getCoinCombination(100);
    expect(result).toEqual([0, 0, 0, 4]);
  });

  it("should work with negative numbers", () => {
    const result = getCoinCombination(-1);
    expect(result).toEqual([0, 0, 0, 0]);
  });

  it("should return [0, 0, 0, 0] for 0", () => {
    const result = getCoinCombination(0);
    expect(result).toEqual([0, 0, 0, 0]);
  });
});
