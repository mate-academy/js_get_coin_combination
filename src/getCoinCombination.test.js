'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('The function should return an array [0, 0, 0, 0] if (0)', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  test('The function should return an array [1, 0, 0, 0] if (1)', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  test('The function should return an array [1, 1, 0, 0] if (6)', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  test('The function should return an array [0, 1, 0, 0] if (5)', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  test('The function should return an array [0, 0, 1, 0] if (10)', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  test('The function should return an array [2, 1, 1, 0] if (17)', () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  test('The function should return an array [0, 0, 0, 2] if (50))', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
