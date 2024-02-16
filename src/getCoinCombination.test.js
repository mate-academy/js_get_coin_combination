'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return '1' penny when '1' is entered`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return '1' nickel when '5' is entered`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return '1' dime when '10' is entered`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return '1' quarter when '25' is entered`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should work with integers', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return the least combination of coins
for the same value`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should work with 0 value', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should work with big value', () => {
    expect(getCoinCombination(5000)).toEqual([0, 0, 0, 200]);
  });

  it('should round fractional numbers', () => {
    expect(getCoinCombination(6.9)).toEqual([1, 1, 0, 0]);
  });

  it('should display NaN if the value is undefined', () => {
    expect(getCoinCombination()).toEqual([NaN, NaN, NaN, NaN]);
  });
});
