'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return 0 penny for 0 cent`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 penny for 1 cent`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return 3 pennies for 3 cents`, () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  it(`should return 1 nickel for 5 cents`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return 1 nickel and 2 pennies for 7 cent`, () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it(`should return 1 dime for 10 cent`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return 1 dime and 3 pennies for 13 cents`, () => {
    expect(getCoinCombination(13)).toEqual([3, 0, 1, 0]);
  });

  it(`should return 1 dime and 1 nickels for 15 cents`, () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it(`should return 1 dime, 1 nickel and 2 pennies for 17 cents`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return 2 dimes for 20 cents`, () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  it(`should return 1 quarter for 25 cent`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return 1 quarter and 1 pennies for 26 cent`, () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it(`should return 1 quarter, 1 nickel and 2 pennies for 32 cent`, () => {
    expect(getCoinCombination(32)).toEqual([2, 1, 0, 1]);
  });

  it(`should return 1 quarter, 1 dime and 1 nickel for 40 cent`, () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
  });

  it(`should return 2 quartesr for 50 cent`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
