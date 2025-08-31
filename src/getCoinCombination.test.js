'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  test.each([
    [0, [0, 0, 0, 0]],
    [1, [1, 0, 0, 0]],
    [5, [0, 1, 0, 0]],
    [6, [1, 1, 0, 0]],
    [10, [0, 0, 1, 0]],
    [17, [2, 1, 1, 0]],
    [25, [0, 0, 0, 1]],
    [41, [1, 1, 1, 1]],
    [50, [0, 0, 0, 2]],
    [66, [1, 1, 1, 2]],
    [125, [0, 0, 0, 5]],
    [999, [4, 0, 2, 39]]
  ])(
    'should return %p for %i cents',
    (input, expected) => {
      expect(getCoinCombination(input)).toEqual(expected);
    }
  );

  for (let cents = 0; cents <= 200; cents++) {
    it(`should return an array of length 4 with non-negative integers `
      + `that sum to ${cents}`, () => {
      const result = getCoinCombination(cents);

      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(4);
      expect(result.every(Number.isInteger)).toBe(true);
      expect(result.every(n => n >= 0)).toBe(true);

      const sum = result[0] + 5 * result[1] + 10 * result[2] + 25 * result[3];
      expect(sum).toBe(cents);
    });
  }
});
