'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getCoinCombination(1)).toBeInstanceOf(Array);
  });

  it('should return an array with 4 elements', () => {
    expect(getCoinCombination(3).length).toBe(4);
  });

  it('should return the minimum amount of coins', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
