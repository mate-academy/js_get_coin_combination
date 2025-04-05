'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  test('Should return defined: ', () => {
    expect(getCoinCombination(7)).toBeDefined();
  });

  test('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('Should returns the correct combination for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('Should returns the correct combination for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('Should returns the correct combination for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('Should returns the correct combination for 25 cents ', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  // Negative Tests
  // эти тесты падают,не указн ввод только валидных значений

  test('should throw an error for cents less than 0', () => {
    expect(() => getCoinCombination(-1)).toThrowError();
  });

  test('should throw an error for field empty', () => {
    expect(() => { getCoinCombination(null) }).toThrowError();
  });
});
