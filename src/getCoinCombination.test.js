'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('0 cents = no coins = [0, 0, 0, 0]', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('1 cent = 1 penny = [1, 0, 0, 0]', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('6 cents = 1 nickel + 1 penny = [1, 1, 0, 0]', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it('16 cents = 1 dime + 1 nickel + 1 penny = [1, 1, 1, 0]', () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it('17 cents = 1 dime + 1 nickel + 2 penny = [2, 1, 1, 0]', () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it('31 cents = 1 quarter + 1 nickel + 1 penny = [1, 1, 0, 1]', () => {
    expect(getCoinCombination(31))
      .toEqual([1, 1, 0, 1]);
  });

  it('50 cents = 2 quarters = [0, 0, 0, 2]', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it('99 cents = 3 quarters + 2 dimes + 4 pennies = [4, 0, 2, 3]', () => {
    expect(getCoinCombination(99))
      .toEqual([4, 0, 2, 3]);
  });
});
