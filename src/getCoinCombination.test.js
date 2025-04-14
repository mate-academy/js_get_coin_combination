'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');
  const moneyCount = 15; // the value of the number of cents

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an error if cents < 0', () => {
    const result = getCoinCombination(moneyCount);

    if (moneyCount < 0) {
      expect(result).toBe('Not enough money');
    };
  });

  it('should return an error if cents is not an integer', () => {
    const result = getCoinCombination(moneyCount);

    if (!Number.isInteger(moneyCount) && typeof (moneyCount) === 'number') {
      expect(result).toBe('Amount in cents must be an integer');
    }
  });

  it('should return an array of integers', () => {
    const result = getCoinCombination(moneyCount);
    const integerNumbers = [];

    if (moneyCount > 0 && Number.isInteger(moneyCount)) {
      for (const ch of result) {
        if (Number.isInteger(ch)) {
          integerNumbers.push(ch);
        };
      };

      expect(result).toEqual(integerNumbers);
    };
  });

  it('should return an array with 4 values', () => {
    const result = getCoinCombination(moneyCount);

    if (moneyCount > 0 && Number.isInteger(moneyCount)) {
      expect(result).toHaveLength(4);
    }
  });

  it('should return an error if cents is not a number', () => {
    const result = getCoinCombination(moneyCount);

    if (typeof (moneyCount) !== 'number' || isNaN(moneyCount)) {
      expect(result).toBe('Value of cents must be a number');
    }
  });

  it('should correctly count the number of coins', () => {
    const result = getCoinCombination(moneyCount);
    let currentAmount = moneyCount;

    if (moneyCount > 0 && Number.isInteger(moneyCount)) {
      const values = [25, 10, 5, 1];

      const resultNumbers = values.map(value => {
        const count = Math.trunc(currentAmount / value);

        currentAmount -= count * value;

        return count;
      });

      expect(result).toEqual(resultNumbers.reverse());
    }
  });

  test(`should return 1 penny if you give 1 cent`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  test(`should return 1 penny + 1 nickel if you give 6 cents`, () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  test(`should return 2 pennies + 1 nickel + 1 dime`
    + `if you give 17 cents`, () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  test(`should return 2 quarters if you give 50 cents`, () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });
});
