"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("should return an array with right length", () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
    expect(result).toHaveLength(4);
  });

  it("should return right results", () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it("should return with 0 value", () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
