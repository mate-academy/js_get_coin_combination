'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return the correct coin combination for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]); // 1 penny
  });

  it('should return the correct coin combination for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]); // 1 penny + 1 nickel
  });

  it('should return the correct coin combination for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]); // 2 pennies + 1 nickel + 1 dime
  });

  it('should return the correct coin combination for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]); // 2 quarters
  });
});
