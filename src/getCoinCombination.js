'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  // we check if cents are non-negetive integer
  if (cents < 0) {
    return [0, 0, 0, 0];
  }

  let currentAmount = cents;
  const values = [25, 10, 5, 1];
  const coins = [0, 0, 0, 0];

  for (let i = 0; i < 4; i++) {
    coins[i] = Math.floor(currentAmount / values[i]);
    currentAmount -= coins[i] * values[i];
  }

  return coins;
}

module.exports = { getCoinCombination };
