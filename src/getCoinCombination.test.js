'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('The function should return an array', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  test('The function should return an array', () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  test('The function should return an array', () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  test('The function should return an array', () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });
});
