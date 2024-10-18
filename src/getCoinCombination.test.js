'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should be non-negative input integer', () => {
    expect(() => getCoinCombination(-1)).toThrow();
  });

  it(`should return array with length '4'`, () => {
    expect(Array.isArray(getCoinCombination(1))).toBe(true);
    expect(getCoinCombination(1)).toHaveLength(4);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return '[1, 0, 0, 0]' for 1 cents`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return '[1, 1, 0, 0]' for 6 cents`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return '[1, 1, 1, 0]' for 16 cents`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return [1, 1, 1, 1] for 41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return '[0, 0, 0, 3]' for 75 cents`, () => {
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });
});
