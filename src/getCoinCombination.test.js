'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [1, 0, 0, 0] penny when 1 coins is given`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] penny when 6 coins is given`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] penny when 17 coins is given`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 2] penny when 50 coins is given`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return [1, 1, 1, 2] penny when 66 coins is given`, () => {
    expect(getCoinCombination(66)).toEqual([1, 1, 1, 2]);
  });

  it(`should return [1, 1, 1, 1] penny when 41 coins is given`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return [0, 0, 0, 0] penny when zero coins is given`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
