'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('1 penny = 1 cent', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('1 nickel = 5 cents', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('min boundary value for nickels', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it('max boundary value for nickels', () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it('1 dime = 10 cents', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('min boundary value for dimes', () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it('max boundary value for dimes', () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it('1 quarter = 25 cents', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it('equivalent class for quarters', () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });

  it('return 0 if entered 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('works with divisional numbers', () => {
    expect(getCoinCombination(3.7))
      .toEqual([3, 0, 0, 0]);
  });
});
