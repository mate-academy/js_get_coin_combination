'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return 1 penny for 1 cent`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return 1 nickel for 5 cent`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return 1 dime for 10 cents`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return 1 quarter for 25 cents`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return an array of zeros for 0 cent`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 quarter and 2 pennies for 27 cents`, () => {
    expect(getCoinCombination(27)).toEqual([2, 0, 0, 1]);
  });

  it(`should return 1 quarter and 1 nickel for 30 cents`, () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it(`should return 1 penny, 2 dimes, 1 quarter for 46 cents`, () => {
    expect(getCoinCombination(46)).toEqual([1, 0, 2, 1]);
  });

  it(`should return 3 pennies, 1 nickel,
  1 dime, 4 quarters for 118 cents`, () => {
    expect(getCoinCombination(118)).toEqual([3, 1, 1, 4]);
  });
});
