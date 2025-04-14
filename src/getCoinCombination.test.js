'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('returns [1, 0, 0, 0] when 1 p is passed as an argunment', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('returns [1, 1, 0, 0] when 6 p is passed as an argunment', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('returns [2, 1, 1, 0] when 17 p is passed as an argunment', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('returns [0, 0, 0, 2] when 50 p is passed as an argunment', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
