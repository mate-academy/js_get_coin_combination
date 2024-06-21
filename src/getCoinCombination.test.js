'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return number of penny', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return number of nickels and penny', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return number of dimes, nickels and penny', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return number of quarters', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
