'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(amount) {
  const coins = [25, 10, 5, 1];
  const result = [];

  let remaining = Math.floor(amount);

  for (const coin of coins) {
    const count = Math.floor(remaining / coin);

    result.push(count);
    remaining -= count * coin;
  }

  return result;
}

module.exports = { getCoinCombination };
