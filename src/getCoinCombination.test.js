'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should work with 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('6 coins returns 1 penny + 1 nickel', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('17 coins returns 2 pennies + 1 nickel + 1 dime', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('50 coins returns 2 quarters', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
