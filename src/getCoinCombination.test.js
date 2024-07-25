'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return result containing 4 numbers`, () => {
    const result = getCoinCombination(50);

    expect(result).toHaveLength(4);
  });

  it(`should return the equivalent in minimum coins`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return the equivalent in minimum coins`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return the equivalent in minimum coins`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return the equivalent in minimum coins`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return four zeros for input = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
