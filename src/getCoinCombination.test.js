"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("should return [0, 0, 0, 0] if cents = 0", () => {
    const result = getCoinCombination(0);
    expect(result).toEqual([0, 0, 0, 0]);
  });

  it("should return an array with 4 elements", () => {
    const result = getCoinCombination(40);
    expect(result).toHaveLength(4);
  });

  it("should return [0, 0, 0, 0] if cents < 0", () => {
    const result = getCoinCombination(-5);
    expect(result).toEqual([0, 0, 0, 0]);
  });

  it("should return [1, 0, 0, 0] if cents = 1", () => {
    const result = getCoinCombination(1);
    expect(result).toEqual([1, 0, 0, 0]);
  });

  it("should return [1, 1, 0, 0] if cents = 6", () => {
    const result = getCoinCombination(6);
    expect(result).toEqual([1, 1, 0, 0]);
  });

  it("should return [2, 1, 1, 0] if cents = 17", () => {
    const result = getCoinCombination(17);
    expect(result).toEqual([2, 1, 1, 0]);
  });

  it("should return [0, 0, 0, 2] if cents = 50", () => {
    const result = getCoinCombination(50);
    expect(result).toEqual([0, 0, 0, 2]);
  });
});
