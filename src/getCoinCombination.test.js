"use strict";

const { getCoinCombination } = require("./getCoinCombination");

function sumCoins(coins) {
  return coins[0] * 1 + coins[1] * 5 + coins[2] * 10 + coins[3] * 25;
}

describe("getCoinCombination", () => {
  test("explicit examples from task description", () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  // eslint-disable-next-line max-len
  test("property-based: verifies sum and minimal coin count for cents 0..499", () => {
    for (let cents = 0; cents < 500; cents++) {
      const coins = getCoinCombination(cents);

      expect(Array.isArray(coins)).toBe(true);
      expect(coins).toHaveLength(4);

      coins.forEach((c) => {
        expect(typeof c).toBe("number");
        expect(Number.isInteger(c)).toBe(true);
        expect(c).toBeGreaterThanOrEqual(0);
      });

      expect(sumCoins(coins)).toBe(cents);

      const coinCount = coins.reduce((a, b) => a + b, 0);
      let minCount = Infinity;

      for (let q = 0; q <= Math.floor(cents / 25); q++) {
        for (let d = 0; d <= Math.floor(cents / 10); d++) {
          for (let n = 0; n <= Math.floor(cents / 5); n++) {
            const p = cents - (25 * q + 10 * d + 5 * n);

            if (p >= 0) {
              const count = q + d + n + p;

              if (25 * q + 10 * d + 5 * n + p === cents) {
                minCount = Math.min(minCount, count);
              }
            }
          }
        }
      }

      expect(coinCount).toBe(minCount);
    }
  });
});
