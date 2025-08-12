'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return correct combination for small values', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return correct combination for mixed coins', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]); // 2 + 5 + 10
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]); // 1 + 5 + 10 + 25
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]); // optimal combo
  });

  it('should return correct combination for large values', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]); // 3*1 + 2*10 + 4*25
    expect(getCoinCombination(250)).toEqual([0, 0, 0, 10]);
  });
});
