'use strict';

/**
 * @param {number} cents
 * @returns {number[]} [pennies, nickels, dimes, quarters]
 */
function getCoinCombination(cents) {
  const coins = [0, 0, 0, 0]; // pennies, nickels, dimes, quarters
  const coinValues = [1, 5, 10, 25];
  let remaining = cents;

  for (let i = coinValues.length - 1; i >= 0; i--) {
    const count = Math.floor(remaining / coinValues[i]);

    coins[i] = count;
    remaining -= count * coinValues[i];
  }

  return coins;
}

module.exports = getCoinCombination;
