'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [1, 0, 0, 0] for 1 cent (1 penny)', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for 6 cents (1 penny + 1 nickel)', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 1, 0] for 17 cents ', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 2] for 50 cents (2 quarters)', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [4, 0, 2, 3] for 99 cents ', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [2, 0, 1, 11] for 287 cents ', () => {
    expect(getCoinCombination(287)).toEqual([2, 0, 1, 11]);
  });
});
