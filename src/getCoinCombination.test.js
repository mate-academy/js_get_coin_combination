'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  function getTotalCents([pennies, nickels, dimes, quarters]) {
    return pennies * 1 + nickels * 5 + dimes * 10 + quarters * 25;
  }

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [3, 0, 0, 0] for 3 cents (only pennies)', () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for 5 cents (one nickel)', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(
    'should return [1, 1, 1, 1] for 41 cents (one of each coin)',
    () => {
      expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
    }
  );

  it(
    'should return [3, 0, 2, 0] for 23 cents (2 dimes, 3 pennies)',
    () => {
      expect(getCoinCombination(23)).toEqual([3, 0, 2, 0]);
    }
  );

  it(
    'should return [4, 0, 2, 3] for 99 cents '
      + '(3 quarters, 2 dimes, 4 pennies)',
    () => {
      expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    }
  );

  it(
    'should return [0, 0, 0, 2] for 50 cents (2 quarters)',
    () => {
      expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    }
  );

  it(
    'should return [2, 0, 1, 3] for 87 cents '
      + '(3 quarters, 1 dime, 2 pennies)',
    () => {
      expect(getCoinCombination(87)).toEqual([2, 0, 1, 3]);
    }
  );

  it(
    'should return [1, 0, 0, 1] for 26 cents (1 quarter, 1 penny)',
    () => {
      expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
    }
  );

  it(
    'should return total cents equal to input',
    () => {
      const cents = 87;
      const result = getCoinCombination(cents);

      expect(getTotalCents(result)).toBe(cents);
    }
  );

  it(
    'should return minimal number of coins for 99 cents',
    () => {
      const result = getCoinCombination(99);
      const totalCoins = result.reduce(
        (sum, count) => sum + count, 0
      );

      expect(totalCoins).toBe(9); // 3q + 2d + 4p = 9 coins
    }
  );
});
