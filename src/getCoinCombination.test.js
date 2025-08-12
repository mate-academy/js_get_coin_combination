'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cent', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [2, 0, 0, 0] for 2 cent', () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for 5 cent', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 0, 0] for 7 cent', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it('should return [1, 1, 1, 0] for 16 cents', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [3, 1, 1, 0] for 18 cents', () => {
    expect(getCoinCombination(18)).toEqual([3, 1, 1, 0]);
  });

  it('should return [4, 0, 2, 1] for 49 cents', () => {
    expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  });

  it('should return [0, 0, 0, 2] for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [1, 0, 0, 2] for 51 cents', () => {
    expect(getCoinCombination(51)).toEqual([1, 0, 0, 2]);
  });
});
