'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('returns [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('returns [0, 1, 0, 0] for 5 cent', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('returns [0, 0, 1, 0] for 10 cent', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('returns [0, 0, 0, 1] for 25 cent', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('returns [1, 1, 0, 0] for 6 cent', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('returns [2, 1, 1, 0] for 17 cent', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('returns [0, 0, 0, 2] for 50 cent', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('returns [0, 0, 0, 0] for 0 cent', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('returns [4, 0, 2, 3] for 99 cent', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
