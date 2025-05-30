'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return right amount of coins', () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it('should return 0 if input 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should handle big numbers', () => {
    expect(getCoinCombination(1000)).toEqual([0, 0, 0, 40]);
  });

  it('should give only pennies for less then 5', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should give quarter and nickel', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it('shoould destribute correctly', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
