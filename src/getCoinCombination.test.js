'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('returns correct combination for 1 cent',() => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('returns correct combination for 6 cent',() => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('returns correct combination for 17 cent',() => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('returns correct combination for 50 cent',() => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('returns correct combination for 0 cent',() => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('returns correct combination for 4 cent',() => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('returns correct combination for 36 cent',() => {
    expect(getCoinCombination(36)).toEqual([1, 0, 1, 1]);
  });

  it('returns correct combination for 70 cent',() => {
    expect(getCoinCombination(70)).toEqual([0, 0, 2, 2]);
  });

  it('returns correct combination for 87 cent',() => {
    expect(getCoinCombination(87)).toEqual([2, 0, 1, 3]);
  });

  it('returns correct combination for 93 cent',() => {
    expect(getCoinCombination(93)).toEqual([3, 1, 1, 3]);
  });
});
