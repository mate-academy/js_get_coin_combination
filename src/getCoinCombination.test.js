'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0,0,0,0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1,0,0,0] for 1 cent (1 penny)', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [4,0,0,0] for 4 cents', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return [0,1,0,0] for 5 cents (1 nickel)', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [1,1,0,0] for 6 cents (1 penny + 1 nickel)', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [0,0,1,0] for 10 cents (1 dime)', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [2,1,1,0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [0,0,0,1] for 25 cents (1 quarter)', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [0,0,0,2] for 50 cents (2 quarters)', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [4,0,2,3] for 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('should return [4,0,2,4] for 124 cents', () => {
    expect(getCoinCombination(124)).toEqual([4, 0, 2, 4]);
  });

  it('should return an array of 4 elements', () => {
    expect(getCoinCombination(37)).toHaveLength(4);
  });

  it('should use minimum number of coins for 30 cents', () => {
    const result = getCoinCombination(30);
    const total = result.reduce((sum, count) => sum + count, 0);

    expect(total).toBe(2); // 1 quarter + 1 nickel
    expect(result).toEqual([0, 1, 0, 1]);
  });
});
