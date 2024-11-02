'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  let currentAmount = Math.trunc(cents);
  const values = [1, 5, 10, 25];
  const coins = [0, 0, 0, 0];

  if (currentAmount < 0) {
    throw new Error('The number of cents cannot be smaller than 0');
  }

  for (let i = 3; i >= 0; i--) {
    coins[i] = Math.floor(currentAmount / values[i]);
    currentAmount -= coins[i] * values[i];
  }

  return coins;
}

module.exports = { getCoinCombination };
