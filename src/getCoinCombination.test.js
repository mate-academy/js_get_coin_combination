'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('0 coins should return only penny', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(` 4 coins should return 1 penny `, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`5 coins should return one nickel `, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`9 coins should return 4 pennies and 1 nickel `, () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it(`10 coins should return 1 dime `, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`18 coins should return  3 pennies, 1 nickel and 1 dime `, () => {
    expect(getCoinCombination(18)).toEqual([3, 1, 1, 0]);
  });

  it(`24 coins should return  4 pennies and 2 dimes `, () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it(`25 coins should return  1 quarter`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`43 coins should return 3 pennies, 1 nickel, 1 dame  1 quarter`, () => {
    expect(getCoinCombination(43)).toEqual([3, 1, 1, 1]);
  });
});
