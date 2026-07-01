'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return all zeros for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return correct combination for single coin values', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return correct combination for combined coin values', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(43)).toEqual([3, 1, 1, 1]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return correct combination for large amounts', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
    expect(getCoinCombination(1000)).toEqual([0, 0, 0, 40]);
  });

  it('should return correct combination for boundary cases', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
    expect(getCoinCombination(14)).toEqual([4, 0, 1, 0]);
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
    expect(getCoinCombination(29)).toEqual([4, 0, 0, 1]);
  });
});
