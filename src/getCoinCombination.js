'use strict';

/**
 * @param {number} cents
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  let currentAmount = cents;
  const coins = [0, 0, 0, 0]; // pennies, nickels, dimes, quarters

  // quarters
  coins[3] = Math.floor(currentAmount / 25);
  currentAmount -= coins[3] * 25;

  // dimes
  coins[2] = Math.floor(currentAmount / 10);
  currentAmount -= coins[2] * 10;

  // nickels
  coins[1] = Math.floor(currentAmount / 5);
  currentAmount -= coins[1] * 5;

  // pennies
  coins[0] = currentAmount;

  return coins;
}

module.exports = getCoinCombination;
