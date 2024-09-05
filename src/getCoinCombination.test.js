'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 2] for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [0, 0, 0, 1] for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [1, 0, 1, 1] for 36 cents', () => {
    expect(getCoinCombination(36)).toEqual([1, 0, 1, 1]);
  });

  it('should return [4, 0, 0, 0] for 4 cents', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [3, 1, 1, 2] for 68 cents', () => {
    expect(getCoinCombination(68)).toEqual([3, 1, 1, 2]);
  });

  it('should return [4, 0, 0, 3] for 79 cents', () => {
    expect(getCoinCombination(79)).toEqual([4, 0, 0, 3]);
  });
});
