'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return this array for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return this array for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return this array for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return this array for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return this array for 15 cents', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it('should return this array for 3 cents', () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  it('should return this array for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });
});
