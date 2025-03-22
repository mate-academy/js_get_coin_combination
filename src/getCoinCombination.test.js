'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('повертає [1, 0, 0, 0] для 1 цента', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('повертає [1, 1, 0, 0] для 6 центів', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('повертає [2, 1, 1, 0] для 17 центів', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('повертає [0, 0, 0, 2] для 50 центів', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('повертає [0, 0, 0, 0] для 0 центів', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('повертає [3, 1, 1, 3] для 93 центів', () => {
    expect(getCoinCombination(93)).toEqual([3, 1, 1, 3]);
  });

  it('повертає [0, 0, 0, 4] для 100 центів', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });
});
