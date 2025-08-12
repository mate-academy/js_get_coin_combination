'use strict';

/**
 * @param {number} centsAmount
 *
 * @returns {number[]}
 */
function getCoinCombination(centsAmount) {
  let currentAmount = centsAmount;
  const values = [1, 5, 10, 25];
  const coins = [0, 0, 0, 0];

  for (let i = 3; i >= 0; i--) {
    coins[i] = Math.floor(currentAmount / values[i]);
    currentAmount -= coins[i] * values[i];
  }

  return coins;
}

module.exports = { getCoinCombination };
