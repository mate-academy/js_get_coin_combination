'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getCoinCombination(0)).toBeInstanceOf(Array);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`'cents' < 5 changes only coins[0]`, () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  it(`'cents' < 10 changes coins[0] and coins[1]`, () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it(`'cents' < 25 changes coins[0], coins[1] and coins[2]`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`'cents' >= 25 influence on all 'coins' indexes`, () => {
    expect(getCoinCombination(67)).toEqual([2, 1, 1, 2]);
  });

  it(`'cents' is an exact multiple of 25 — only quarters used`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
