'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return array', () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if 'cents' = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 penny if 'cents' = 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return 3 pennies and 1 nickel if 'cents' = 8`, () => {
    expect(getCoinCombination(8))
      .toEqual([3, 1, 0, 0]);
  });

  it(`should return 2 pennies, 1 nickel and 1 dime if 'cents' = 17`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return 4 penies, 1 nickel, 1 dime and 1 quarter`
    + ` if 'cents' = 44`, () => {
    expect(getCoinCombination(44))
      .toEqual([4, 1, 1, 1]);
  });

  it(`should return 1 dime if 'cents' = 10`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return 2 quarters if 'cents' = 50`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return [4, 0, 2, 39] if 'cents' = 999`, () => {
    expect(getCoinCombination(999))
      .toEqual([4, 0, 2, 39]);
  });

  it(`should return [0, 0, 0, 0] if 'cents' = 0.51`, () => {
    expect(getCoinCombination(0.51))
      .toEqual([0, 0, 0, 0]);
  });
});
