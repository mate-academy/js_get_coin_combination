'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('returns correct combination for 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('returns correct combination for 100', () => {
    expect(getCoinCombination(100))
      .toEqual([0, 0, 0, 4]);
  });

  it('returns all coins for 41', () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it('returns correct combination for large amount', () => {
    expect(getCoinCombination(10001))
      .toEqual([1, 0, 0, 400]);
  });

  it('returns correct combination 1 cent', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });
});
