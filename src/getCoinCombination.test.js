'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('30 cents', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it('6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('11 cents', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it('56 cents', () => {
    expect(getCoinCombination(56)).toEqual([1, 1, 0, 2]);
  });
});
