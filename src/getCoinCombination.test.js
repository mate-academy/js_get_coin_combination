'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return zeros if value is zero', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return right amount of pennies', () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('should return right amount of nickels', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('should return right amount of dimes', () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it('should return right amount of quarters', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it('should return [1, 1, 1, 1] if the value is 41', () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it('should return right result for large amount of penny', () => {
    expect(getCoinCombination(374))
      .toEqual([4, 0, 2, 14]);
  });
});
