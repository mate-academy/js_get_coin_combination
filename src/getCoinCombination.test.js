'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('returns one of each coin', () => {
    expect(getCoinCombination(1 + 5 + 10 + 25)).toEqual([1, 1, 1, 1]);
  });

  it(`returns more than one of each coin if possible`, () => {
    expect(getCoinCombination(4 + 0 + 20 + 50)).toEqual([4, 0, 2, 2]);
  });

  it(`returns zero`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`returns correct combination for 1 cent`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`returns correct combination for 6 cents`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`returns correct combination for 17 cents`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`returns correct combination for 50 cents`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`returns correct combination for 99 cents`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it(`returns correct combination for 100 cents`, () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it(`returns correct combination for 123 cents`, () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });
});
