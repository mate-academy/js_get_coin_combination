'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return an array of four'
    + 'integers in correct order for 0 cents', () => {
    const result = getCoinCombination(0);

    // 1. Має бути масив
    expect(Array.isArray(result)).toBe(true);
    // 2. Має бути 4 елементи
    expect(result).toHaveLength(4);

    // 3. Кожен елемент — ціле число
    result.forEach(value => {
      expect(Number.isInteger(value)).toBe(true);
    });
    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`correct result for 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`correct result for 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`correct result for 16`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`correct result for 31`, () => {
    expect(getCoinCombination(31)).toEqual([1, 1, 0, 1]);
  });

  it(`correct result for 99`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it(`correct result for 100`, () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it(`exact multiples of each coin`, () => {
    expect(getCoinCombination(91))
      .toEqual([1, 1, 1, 3]);
  });

  it('should return [2, 0, 0, 0] for 2 cents', () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it('should return [3, 0, 0, 0] for 3 cents', () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  it('should return [4, 0, 0, 0] for 4 cents', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [0, 0, 0, 1] for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [0, 0, 0, 2] for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });
});
