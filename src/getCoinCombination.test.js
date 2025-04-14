'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [1, 0, 0, 0] for 1 penny`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] for 1 nickel`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] for 1 dime`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] for one quarter`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 1, 0, 0] for 6 cents`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] for 17 cents`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 2] for 50 cents`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
