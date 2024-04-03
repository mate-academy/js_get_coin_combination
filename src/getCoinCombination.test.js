'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [1, 0, 0, 0] for cents 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] for cents 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [1, 1, 1, 0] for cents 16`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return [1, 1, 1, 1] for cents 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return [0, 1, 0, 2] for cents 55`, () => {
    expect(getCoinCombination(55)).toEqual([0, 1, 0, 2]);
  });

  it(`should return [0, 0, 0, 3] for cents 75`, () => {
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });

  it(`should return [2, 0, 0, 4] for cents 102`, () => {
    expect(getCoinCombination(102)).toEqual([2, 0, 0, 4]);
  });
});
