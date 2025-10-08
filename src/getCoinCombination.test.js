'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  function assertCoinProperties(coins, cents) {
    const values = [1, 5, 10, 25];

    expect(Array.isArray(coins)).toBe(true);
    expect(coins).toHaveLength(4);
    expect(coins.every(Number.isInteger)).toBe(true);
    expect(coins.every(c => c >= 0)).toBe(true);

    const total = coins.reduce((sum, count, i) => sum + count * values[i], 0);

    expect(total).toBe(cents);

    for (let i = 3; i > 0; i--) {
      if (coins[i] > 0) {
        expect(coins[i - 1]).toBeLessThan(5);
      }
    }
  }

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] when cents = 0', () => {
    const cents = 0;
    const result = getCoinCombination(cents);

    expect(result).toEqual([0, 0, 0, 0]);
    assertCoinProperties(result, cents);
  });

  it('should return [1, 0, 0, 0] when cents = 1', () => {
    const cents = 1;
    const result = getCoinCombination(cents);

    expect(result).toEqual([1, 0, 0, 0]);
    assertCoinProperties(result, cents);
  });

  it('should return [0, 0, 1, 0] when cents = 10', () => {
    const cents = 10;
    const result = getCoinCombination(cents);

    expect(result).toEqual([0, 0, 1, 0]);
    assertCoinProperties(result, cents);
  });

  it('should return [0, 0, 0, 1] when cents = 25', () => {
    const cents = 25;
    const result = getCoinCombination(cents);

    expect(result).toEqual([0, 0, 0, 1]);
    assertCoinProperties(result, cents);
  });

  it('should return [0, 0, 0, 4] when cents = 100', () => {
    const cents = 100;
    const result = getCoinCombination(cents);

    expect(result).toEqual([0, 0, 0, 4]);
    assertCoinProperties(result, cents);
  });

  it('should return [1, 1, 0, 0] when cents = 6', () => {
    const cents = 6;
    const result = getCoinCombination(cents);

    expect(result).toEqual([1, 1, 0, 0]);
    assertCoinProperties(result, cents);
  });

  it('should return [2, 1, 1, 0] when cents = 17', () => {
    const cents = 17;
    const result = getCoinCombination(cents);

    expect(result).toEqual([2, 1, 1, 0]);
    assertCoinProperties(result, cents);
  });

  it('should return [0, 0, 0, 2] when cents = 50', () => {
    const cents = 50;
    const result = getCoinCombination(cents);

    expect(result).toEqual([0, 0, 0, 2]);
    assertCoinProperties(result, cents);
  });

  it('should return correct combination for 99 cents', () => {
    const cents = 99;
    const result = getCoinCombination(cents);

    expect(result).toEqual([4, 0, 2, 3]);
    assertCoinProperties(result, cents);
  });

  it('should return correct combination for 41 cents', () => {
    const cents = 41;
    const result = getCoinCombination(cents);

    expect(result).toEqual([1, 1, 1, 1]);
    assertCoinProperties(result, cents);
  });

  it('should not mutate or depend on previous calls', () => {
    getCoinCombination(30);

    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
    assertCoinProperties(result, 5);
  });
});
