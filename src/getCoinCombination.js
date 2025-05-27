'use strict';

/*
getCoinCombination(1) === [1, 0, 0, 0] // 1 penny
getCoinCombination(6) === [1, 1, 0, 0] // 1 penny + 1 nickel
getCoinCombination(17) === [2, 1, 1, 0] // 2 pennies + 1 nickel + 1 dime
getCoinCombination(50) === [0, 0, 0, 2] // 2 quarters
*/
/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  let currentAmount = cents;
  const values = [1, 5, 10, 25];
  const coins = [0, 0, 0, 0];
  const arrLength = values.length - 1;
  // for (let i = 3; i >= 0; i--) {
  //   coins[i] = Math.floor(currentAmount / values[i]);
  //   currentAmount -= coins[i] * values[i];
  // }

  for (let i = 0; i <= arrLength; i++) {
    coins[arrLength - i] = Math.floor(currentAmount / values[arrLength - i]);
    currentAmount -= coins[arrLength - i] * values[arrLength - i];
  }

  return coins;
}

module.exports = { getCoinCombination };
