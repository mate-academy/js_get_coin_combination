'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  let currentAmount = cents;
  const values = [25, 10, 5, 1]; // Починаємо з кварталів
  const coins = [0, 0, 0, 0];

  for (let i = 0; i < values.length; i++) {
    coins[i] = Math.floor(currentAmount / values[i]);
    currentAmount -= coins[i] * values[i];
  }

  return [coins[3], coins[2], coins[1], coins[0]];
}

module.exports = { getCoinCombination };
