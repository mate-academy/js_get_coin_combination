'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');
  
  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('1 cent should return [1, 0, 0, 0]', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('6 cents should return [1, 1, 0, 0]', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('17 cents should return [2, 1, 1, 0]', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('50 cents should return [0, 0, 0, 2]', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('99 cents should return [4, 0, 2, 3]', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('0 cents should return [0, 0, 0, 0]', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});

