'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('1 cent = 1 penny', () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('5 cents = 1 nickel', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('10 cents = 1 dime', () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it('25 cents = 1 quarter', () => {
    expect(getCoinCombination(100))
      .toEqual([0, 0, 0, 4]);
  });

  it('smallest possible number of coins', () => {
    expect(getCoinCombination(69))
      .toEqual([4, 1, 1, 2]);
  });
});
