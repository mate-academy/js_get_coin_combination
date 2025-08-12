"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("Should retun an array", () => {
    expect(getCoinCombination(1)).toBeInstanceOf(Array);
  });

  it("Should return 0 when 0 is entered", () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it("Should return [1, 0, 0, 0] when 1 is entered", () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it("Should return [1, 1, 0, 0] when 6 is entered", () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });
  it("Should return [2, 1, 1, 0] when 17 is entered", () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });
  it("Should return [0, 0, 0, 2] when 50 is entered", () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
  it("Should return [1, 1, 1, 1] when 41 is entered", () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
