'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('breaks down 7 cents into small coins correctly', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it('uses a dime and a penny for 11 cents', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it('combines 1¢ and 25¢ for total of 26', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it('returns the correct coins for 39 cents', () => {
    expect(getCoinCombination(39)).toEqual([4, 0, 1, 1]);
  });

  it('distributes 75 cents into three 25¢ coins', () => {
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });

  it('splits 50 cents into two 25-cent coins', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('returns all zeros for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('correctly breaks down 41 cents using all coin types', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
