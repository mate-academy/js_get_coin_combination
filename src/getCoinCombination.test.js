'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [1, 0, 0, 0] if input (1)`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`Function should return an Array of a given length`, () => {
    expect(getCoinCombination(6))
      .toHaveLength(4);
  });

  it(`Function should return an Array`, () => {
    expect(getCoinCombination(6))
      .toBeInstanceOf(Array);
  });

  it(`should return [1, 1, 0, 0] if input (6)`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] if input (17)`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 2] if input (1)`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return [0, 0, 0, 0] if input (0)`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });
});
