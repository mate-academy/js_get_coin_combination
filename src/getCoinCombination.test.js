'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return arrays with valid structure and invariants', () => {
    const testCases = [0, 1, 4, 6, 11, 24, 26, 50, 99, 100, 137];
    for (const cents of testCases) {
      const result = getCoinCombination(cents);

      // shape
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(4);

      // non-negative integers
      for (const coin of result) {
        expect(Number.isInteger(coin)).toBe(true);
        expect(coin).toBeGreaterThanOrEqual(0);
      }

// weighted sum matches input
const sum =
  result[0] * 1 +
  result[1] * 5 +
  result[2] * 10 +
  result[3] * 25;
expect(sum).toBe(cents);

    }
  });

  it('should handle minimality edge cases correctly', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]); // 1 penny + 1 dime
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]); // 4 pennies + 2 dimes
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]); // 1 penny + 1 quarter
    expect(getCoinCombination(137)).toEqual([2, 0, 1, 5]); // 5q + 1d + 2p
  });

  it('should handle example cases from the spec', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
