'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('Should return defined: ', () => {
    expect(getCoinCombination(7)).toBeDefined();
  });

  test('Should return correct result: ', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('Should return correct result: ', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('Should return correct result: ', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('Should return correct result: ', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
