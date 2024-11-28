'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('returns 0 for 0 ', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('returns 1 penni for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('returns 2 pennies for 2 cents', () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it('returns 4 pennies for 4 cents', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('returns 1 nickel for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('returns 1 nickel 1 penni for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('returns 1 nickel 4 pennies for 9 cents', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it('returns 1 dime for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('returns 1 dime 1 penni for 11 cents', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it('returns 2 dimes 4 pennies for 24 cents', () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it('returns 1 quarter for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('returns 1 quarter 1 penni for 26 cents', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it('counts correct after 100', () => {
    expect(getCoinCombination(141)).toEqual([1, 1, 1, 5]);
  });

  it('ignores decimals', () => {
    expect(getCoinCombination(25.8)).toEqual([0, 0, 0, 1]);
  });
});
