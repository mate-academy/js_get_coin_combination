'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('number of pennies (1 penny = 1 cent)', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('number of nickels (1 nickel = 5 cents)', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('number of dimes (1 dime = 10 cents)', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('a number of quarters (1 quarter = 25 cents)', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });
});
