'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination (property-based)', () => {
  // eslint-disable-next-line no-unused-vars
  const values = [1, 5, 10, 25];

  function sumCoins(coins) {
    return coins[0] * 1 + coins[1] * 5 + coins[2] * 10 + coins[3] * 25;
  }

  test(' ', () => {
    for (let cents = 0; cents < 500; cents++) { // проверим диапазон до 500
      const coins = getCoinCombination(cents);

      // 1) сумма должна совпадать
      expect(sumCoins(coins)).toBe(cents);

      const coinCount = coins.reduce((a, b) => a + b, 0);

      // 2) проверка минимальности:
      // перебираем все возможные комбинации и убеждаемся,
      // что нет набора монет с меньшим количеством
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
