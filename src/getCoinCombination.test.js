'use strict';

/* getCoinCombination(1) === [1, 0, 0, 0] // 1 penny
getCoinCombination(6) === [1, 1, 0, 0] // 1 penny + 1 nickel
getCoinCombination(17) === [2, 1, 1, 0] // 2 pennies + 1 nickel + 1 dime
getCoinCombination(50) === [0, 0, 0, 2] // 2 quarters */

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should correctly calculate pennies', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should correctly calculate nickels', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should correctly calculate dimes', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should correctly calculate quarters', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
