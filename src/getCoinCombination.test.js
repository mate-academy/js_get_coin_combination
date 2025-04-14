'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return zeroes if amount of coins is zero', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return [1, 0, 0, 0] if amount of coins is one', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return [2, 0, 0, 0] if amount of coins is two', () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  test('should return [0, 1, 0, 0] if amount of coins is five', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should return [1, 1, 0, 0] if amount of coins is six', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return [2, 1, 0, 0] if amount of coins is seven', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  test('should return [0, 0, 1, 0] if amount of coins is ten', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return [1, 0, 1, 0] if amount of coins is eleven', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  test('should return [1, 1, 1, 0] if amount of coins is sixteen', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  test('should return [2, 1, 1, 0] if amount of coins is seventeen', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return [4, 0, 2, 0] if amount of coins is twenty four', () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  test('should return [0, 0, 0, 1] if amount of coins is twenty five', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test('should return [1, 0, 0, 1] if amount of coins is twenty six', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  test('should return [4, 0, 2, 1] if amount of coins is fourty nine', () => {
    expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  });

  test('should return [0, 0, 0, 2] if amount of coins is fifty', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return [1, 0, 0, 2] if amount of coins is fifty one', () => {
    expect(getCoinCombination(51)).toEqual([1, 0, 0, 2]);
  });
});
