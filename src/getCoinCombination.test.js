'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  // Test for 1 cent (should return 1 penny)
  it('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  // Test for 6 cents (should return 1 penny and 1 nickel)
  it('should return [1, 1, 0, 0] for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  // Test for 17 cents (should return 2 pennies, 1 nickel, and 1 dime)
  it('should return [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  // Test for 50 cents (should return 2 quarters)
  it('should return [0, 0, 0, 2] for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  // Test for 99 cents (should return 3 quarters, 2 dimes, and 4 pennies)
  it('should return [4, 0, 2, 3] for 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  // Test for 25 cents (should return 1 quarter)
  it('should return [0, 0, 0, 1] for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  // Test for 30 cents (should return 1 quarter and 1 nickel)
  it('should return [0, 1, 0, 1] for 30 cents', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  // Test for 57 cents (should return 2 quarters, 1 nickel, and 2 pennies)
  it('should return [2, 1, 0, 2] for 57 cents', () => {
    expect(getCoinCombination(57)).toEqual([2, 1, 0, 2]);
  });

  // Test for a large amount (200 cents = 2 dollars)
  it('should return [0, 0, 0, 8] for 200 cents (2 dollars)', () => {
    expect(getCoinCombination(200)).toEqual([0, 0, 0, 8]);
  });
  
});
