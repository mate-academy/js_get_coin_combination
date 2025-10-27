'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should handle zero cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return 1 penny for 1 cent', () => {
    expect(getCoinCombination(1)[0]).toBe(1);
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return 1 penny and 1 nickel for 6 cent', () => {
    expect(getCoinCombination(6)[0]).toBe(1);
    expect(getCoinCombination(6)[1]).toBe(1);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return the correct change for 17 cents', () => {
    expect(getCoinCombination(17)[0]).toBe(2);
    expect(getCoinCombination(17)[1]).toBe(1);
    expect(getCoinCombination(17)[2]).toBe(1);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return 2 quarters for 50 cents', () => {
    expect(getCoinCombination(50)[3]).toBe(2);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should correctly calculate 99 cents', () => {
    expect(getCoinCombination(99)[0]).toBe(4);
    expect(getCoinCombination(99)[1]).toBe(0);
    expect(getCoinCombination(99)[2]).toBe(2);
    expect(getCoinCombination(99)[3]).toBe(3);
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
