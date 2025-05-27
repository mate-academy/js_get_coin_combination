'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('1', () => {
    expect(getCoinCombination(1)).toStrictEqual([1, 0, 0, 0]);
  });

  test('6', () => {
    expect(getCoinCombination(6)).toStrictEqual([1, 1, 0, 0]);
  });

  test('17', () => {
    expect(getCoinCombination(17)).toStrictEqual([2, 1, 1, 0]);
  });

  test('50', () => {
    expect(getCoinCombination(50)).toStrictEqual([0, 0, 0, 2]);
  });
});
