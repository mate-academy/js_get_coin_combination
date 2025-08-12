/* eslint-disable max-len */
'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  let currentAmount = cents;
  const values = [25, 10, 5, 1];
  const coins = [0, 0, 0, 0];

  if (cents <= 0) {
    return coins;
  }

  if (cents === Infinity) {
    throw new Error('Please indicate finite number of cents');
  }

  for (let i = 0; i < values.length; i++) {
    coins[i] = Math.floor(currentAmount / values[i]);
    currentAmount -= coins[i] * values[i];
  }

  return coins;
}

module.exports = { getCoinCombination };
