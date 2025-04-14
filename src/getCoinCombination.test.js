'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  test("should return '1' nickel when '5' is entered", () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test("should return '1' penny, '1' nickel when '6' is entered", () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test("should return '2' penny, '1' nickel when '7' is entered", () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  test("should return '1' penny, '1' nickel, '1' dime when '16' is entered", () => {
    expect(getCoinCombination('16')).toEqual([1, 1, 1, 0]);
  });

  test("should return '2' pennied, '1' nickels, '1' dime when '17' is entered", () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test("should return '3' pennies, '1' nickels, '1' dime when '18' is entered", () => {
    expect(getCoinCombination(18)).toEqual([3, 1, 1, 0]);
  });

  test("should return '4' pennies, '2' dimes, '1' quarter when '49' is entered", () => {
    expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  });

  test("should return '2' quarters when '50' is entered", () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test("should return '1' penny, '2' quarters when '51' is entered", () => {
    expect(getCoinCombination(51)).toEqual([1, 0, 0, 2]);
  });

