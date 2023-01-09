'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('Should return not falsy: ', () => {
    expect(getCoinCombination(10)).not.toBeFalsy();
  });

  test('Should return defined: ', () => {
    expect(getCoinCombination(7)).toBeDefined();
  });

  test('Should return corect equal: ', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
