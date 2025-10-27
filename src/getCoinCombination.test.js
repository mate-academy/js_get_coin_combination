'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return array of length 4', () => {
    expect(Array.isArray(getCoinCombination(1))).toBe(true);
    expect(getCoinCombination(1)).toHaveLength(4);
  });

  it('should return each element that is a non-negative integer', () => {
    expect(getCoinCombination(0).every(n => Number.isInteger(n) && n >= 0))
      .toBe(true);
  });

  it('should handle zero cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return 1 penny for 1 cent', () => {
    expect(getCoinCombination(1)[0]).toBe(1);
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return 2 penny for 2 cent', () => {
    expect(getCoinCombination(2)[0]).toBe(2);
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it('should return 3 penny for 3 cent', () => {
    expect(getCoinCombination(3)[0]).toBe(3);
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  it('should return 4 penny for 4 cent', () => {
    expect(getCoinCombination(4)[0]).toBe(4);
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return 1 nickel for 5 cent', () => {
    expect(getCoinCombination(5)[1]).toBe(1);
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return 1 dime for 10 cent', () => {
    expect(getCoinCombination(10)[2]).toBe(1);
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return 1 quarter for 25 cent', () => {
    expect(getCoinCombination(25)[3]).toBe(1);
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
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

  it('should correctly calculate 11 cents', () => {
    expect(getCoinCombination(11)[0]).toBe(1);
    expect(getCoinCombination(11)[2]).toBe(1);
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it('should correctly calculate 24 cents', () => {
    expect(getCoinCombination(24)[0]).toBe(4);
    expect(getCoinCombination(24)[2]).toBe(2);
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it('should correctly calculate 26 cents', () => {
    expect(getCoinCombination(26)[0]).toBe(1);
    expect(getCoinCombination(26)[3]).toBe(1);
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it('should correctly calculate 41 cents', () => {
    expect(getCoinCombination(41)[0]).toBe(1);
    expect(getCoinCombination(41)[1]).toBe(1);
    expect(getCoinCombination(41)[2]).toBe(1);
    expect(getCoinCombination(41)[3]).toBe(1);
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
