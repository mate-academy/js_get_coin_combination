'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should throw an error for argument negative input', () => {
    expect(() => getCoinCombination(-1)).toThrow();
  });

  it(`should return array with length '4'`, () => {
    expect(Array.isArray(getCoinCombination(1))).toBe(true);
    expect(getCoinCombination(1)).toHaveLength(4);
  });

  it('should return [0, 0, 0, 0] for argument 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return '[1, 0, 0, 0]' for argument 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return '[1, 1, 0, 0]' for argument 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return '[1, 1, 1, 0]' for argument 16`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return [1, 1, 1, 1] for argument 41', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return '[0, 0, 0, 3]' for argument 75`, () => {
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });
});
