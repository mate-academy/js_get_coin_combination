"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it("should be declared", () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("should return array of 4 non-negative integers", () => {
    const result = getCoinCombination(0);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(4);

    result.forEach((value) => {
      expect(Number.isInteger(value)).toBe(true);
      expect(value).toBeGreaterThanOrEqual(0);
    });
  });

  it.each([
    [0, [0, 0, 0, 0]],
    [1, [1, 0, 0, 0]],
    [2, [2, 0, 0, 0]],
    [3, [3, 0, 0, 0]],
    [4, [4, 0, 0, 0]],
    [5, [0, 1, 0, 0]],
    [6, [1, 1, 0, 0]],
    [9, [4, 1, 0, 0]],
    [10, [0, 0, 1, 0]],
    [17, [2, 1, 1, 0]],
    [24, [4, 0, 2, 0]],
    [25, [0, 0, 0, 1]],
    [26, [1, 0, 0, 1]],
    [30, [0, 1, 0, 1]],
    [41, [1, 1, 1, 1]],
    [50, [0, 0, 0, 2]],
    [99, [4, 0, 2, 3]],
    [123, [3, 0, 2, 4]],
    [137, [2, 0, 1, 5]],
  ])("should return %j for %i cents", (input, expected) => {
    expect(getCoinCombination(input)).toEqual(expected);
  });

  it("should be valid for values 0..100", () => {
    const values = [1, 5, 10, 25];

    for (let cents = 0; cents <= 100; cents++) {
      const combo = getCoinCombination(cents);

      expect(combo).toHaveLength(4);

      combo.forEach((c) => {
        expect(Number.isInteger(c)).toBe(true);
        expect(c).toBeGreaterThanOrEqual(0);
      });

      const total = combo.reduce((sum, count, i) => sum + count * values[i], 0);

      expect(total).toBe(cents);
    }
  });
});
