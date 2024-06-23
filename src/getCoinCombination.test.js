'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return array of zeros if cents = 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return array with 1 and three zeros if cents = 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return array with 4 and three zeros if cents = 4', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  test('should return array with zero, 1 and two zeros if cents = 5', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should return array with two 1 and two zeros if cents = 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return array with 4 and 1 and two zeros if cents = 9', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  test('should return array with two zeros 1 and zero if cents = 10', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return array with 1 and zero  twice if cents = 11', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  test('should return array [4, 0, 1, 0] if cents = 14', () => {
    expect(getCoinCombination(14)).toEqual([4, 0, 1, 0]);
  });

  test('should return array [0, 1, 1, 0] if cents = 15', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  test('should return array [1, 1, 1, 0] if cents = 16', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  test('should return array [4, 0, 2, 0] if cents = 24', () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  test('should return array with three zeros and 1 if cents = 25', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test('should return array with 1 two zeros and 1 if cents = 26', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  test('should return correct array with any cents more then 26', () => {
    expect(getCoinCombination(147)).toEqual([2, 0, 2, 5]);
  });
});
