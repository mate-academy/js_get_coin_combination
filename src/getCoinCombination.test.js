'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('must return combination for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('must return combination for 6 cent', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('must return combination for 17 cent', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('must return combination for 50 cent', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('must return combination for 0 cent', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('must return combination for 99 cent', () => {
    // 3 * 25 = 75, 2 * 10 = 20, 0 * 5 = 0, 4 * 1 = 4
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('must return combination for 41 cent', () => {
    // 1 * 25, 1 * 10, 1 * 5, 1 * 1
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
