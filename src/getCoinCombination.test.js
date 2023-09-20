"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it.skip(`should return zeroes array negative argument`, () => {
    expect(getCoinCombination(-1)).toEqual([0, 0, 0, 0]);
  });

  it(`should return array of zeroes if argument is 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return proper values for argument >= 100`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it(`should return proper values for argument more than 100`, () => {
    expect(getCoinCombination(101)).toEqual([1, 0, 0, 4]);
    expect(getCoinCombination(1591)).toEqual([1, 1, 1, 63]);
  });

  it.skip(`should throw an error if was passed NaN`, () => {
    expect(getCoinCombination(NaN)).toThrow();
  });

  it(`should throw an error if was passed not integer`, () => {
    expect(getCoinCombination(28.5)).toThrow();
  });
});
