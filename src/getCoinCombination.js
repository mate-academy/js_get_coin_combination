'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 /*Write tests for getCoinCombination function that takes a
non-negative integer cents (a specific amount
in cents) and returns a combination
 of the smallest possible number of coins, giving the same amount.

The function should return an array where:

coins[0] = number of pennies (1 penny = 1 cent);
coins[1] = number of nickels (1 nickel = 5 cents);
coins[2] = number of dimes (1 dime = 10 cents);
coins[3] = number of quarters (1 quarter = 25 cents).
Examples:

getCoinCombination(1) === [1, 0, 0, 0] // 1 penny
getCoinCombination(6) === [1, 1, 0, 0] // 1 penny + 1 nickel
getCoinCombination(17) === [2, 1, 1, 0] // 2 pennies + 1 nickel + 1 dime
getCoinCombination(50) === [0, 0, 0, 2] // 2 quarters */
function getCoinCombination(cents) {
  let currentAmount = cents;
  const values = [1, 5, 10, 25];
  const coins = [0, 0, 0, 0];

  for (let i = 3; i >= 0; i--) {
    coins[i] = Math.floor(currentAmount / values[i]);
    currentAmount -= coins[i] * values[i];
  }

  return coins;
}

module.exports = { getCoinCombination };
