'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`Should return [1, 0, 0, 0] for (1) as input`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test(`Should return [1, 1, 0, 0] for (6) as input`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test(`Should return [3, 0, 1, 0] for (13) as input`, () => {
    expect(getCoinCombination(13)).toEqual([3, 0, 1, 0]);
  });

  test(`Should return [2, 1, 1, 0] for (17) as input`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test(`Should return [4, 1, 1, 0] for (19) as input`, () => {
    expect(getCoinCombination(19)).toEqual([4, 1, 1, 0]);
  });

  test(`Should return [0, 0, 0, 2] for (50) as input`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test(`Should return [3, 0, 2, 3] for (98) as input`, () => {
    expect(getCoinCombination(98)).toEqual([3, 0, 2, 3]);
  });
});
