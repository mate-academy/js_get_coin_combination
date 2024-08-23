'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] if cents equals 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] if cents equals 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] if cents equals 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 1, 0] if cents equals 17', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [1, 1, 1, 1] if cents equals 41', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should return [0, 0, 0, 2] if cents equals 50', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should ', () => {
    expect(getCoinCombination(5.5)).toEqual([0, 1, 0, 0]);
  });
});
