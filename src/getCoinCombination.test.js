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

  it('should return [0, 0, 1, 1] for 35 cents', () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });

  it('should return [0, 0, 1, 2] for 60 cents', () => {
    expect(getCoinCombination(60)).toEqual([0, 0, 1, 2]);
  });

  it('should return [4, 1, 1, 3] for 94 cents', () => {
    expect(getCoinCombination(94)).toEqual([4, 1, 1, 3]);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [0, 0, 0, 10] for 250 cents', () => {
    expect(getCoinCombination(250)).toEqual([0, 0, 0, 10]);
  });
});
