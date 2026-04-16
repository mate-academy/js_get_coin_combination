'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should works without cents`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return only penni`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return only nickel`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return only dime', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return only quarter', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should correct divide cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('returns correct combination for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('returns correct combination for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('returns correct combination for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return four types of coins', () => {
    const result = getCoinCombination(23);

    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(4);
  });
});
