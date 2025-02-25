"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should properly count 'pennies'`, () => {
    const result = getCoinCombination(1);
    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`should properly count 'nickels'`, () => {
    const result = getCoinCombination(5);
    expect(result).toEqual([0, 1, 0, 0]);
  });

  it(`should properly count 'dimes'`, () => {
    const result = getCoinCombination(10);
    expect(result).toEqual([0, 0, 1, 0]);
  });

  it(`should properly count 'quarters`, () => {
    const result = getCoinCombination(50);
    expect(result).toEqual([0, 0, 0, 2]);
  });

  it(`should properly count mix of coins`, () => {
    const result = getCoinCombination(78);
    expect(result).toEqual([3, 0, 0, 3]);
  });

  it(`should properly count large numbers`, () => {
    const result = getCoinCombination(1243);
    expect(result).toEqual([3, 1, 1, 49]);
  });

  it (`should properly work with negative numbers`, () => {
    const result = getCoinCombination(-5);
    expect(result).toEqual([0, 0, 0, 0]);
  })
});
