'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('Should return array with 1 penny when cents are equal to 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('Should return an array with 1 nickel, 1 penny for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('Should return array with 1 dime, 1 nickel, 2 penny for 17 cents',
    () => {
      expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    });

  test('Should return array with 2 quarters when cents are equal to 50', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('Should return array with 0 when cents are equal to 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('Should return array with 39 quarter, 2 dime, 4 penny for 999 cents',
    () => {
      expect(getCoinCombination(999)).toEqual([4, 0, 2, 39]);
    });
});
