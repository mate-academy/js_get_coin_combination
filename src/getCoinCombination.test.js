'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('1 cent is equal [1,0,0,0]', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('6 cents are equal [1,1,0,0]', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('17 cents are equal [2,1,1,0]', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('50 cents are equal [0,0,0,2]', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
