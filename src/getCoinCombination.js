'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  let currentAmount = cents;
  const values = [1, 5, 10, 25];
  const coins = [0, 0, 0, 0];

  if (cents < 0) {
    return coins;
  }

  if (cents === Infinity) {
    throw new Error('Please indicate finite number of cents');
  }

  for (let i = 3; i >= 0; i--) {
    coins[i] = Math.floor(currentAmount / values[i]);
    currentAmount -= coins[i] * values[i];
  }

  return coins;
}

module.exports = { getCoinCombination };
