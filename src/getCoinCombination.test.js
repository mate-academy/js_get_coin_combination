'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('coins are equal 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('coins are eqqual 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('coins are equal 17', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('coins are equal 50', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
