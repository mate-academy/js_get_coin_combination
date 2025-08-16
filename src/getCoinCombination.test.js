'use strict';

describe('getCoinCombination', () => {
  const {
    getCoinCombination,
  } = require('./getCoinCombination.js');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return expected values for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return expected values for non-negative integer cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return expected values for non-negative integer cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return expected values for non-negative integer cents', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return expected values for non-negative integer cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should always return 4 element length array', () => {
    expect(getCoinCombination(32)).toHaveLength(4);
  });

  it('should always return non-negative integers cents ', () => {
    expect(getCoinCombination(54).every(coin =>
      Number.isInteger(coin) && coin >= 0)).toBe(true);
  });

  it('should return expected values', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('should always return that cents are equal sum of coins', () => {
    const amount = 77;
    const [pennies, nickels, dimes, quarters] = getCoinCombination(amount);

    const sum = pennies * 1 + nickels * 5 + dimes * 10 + quarters * 25;

    expect(sum).toEqual(amount);
  });

  it('should return exact of multiples of coins', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });
});
