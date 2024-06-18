"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(5)).toBeInstanceOf(Array);
  });

  it(`should result.length = 4`, () => {
    const result = getCoinCombination();

    expect(result.length).toBe(4);
  });

  it(`should return the smallest possible number of coins`, () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it(`should work with different params`, () => {
    const result = getCoinCombination(37);

    expect(result).toEqual([2, 0, 1, 1]);
  });

  it(`should work with 0 cents`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });
});
