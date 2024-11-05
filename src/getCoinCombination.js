'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  // Given the requirements of the task, based on the TDD method,
  // I supplemented the function with checks for input values.
  let currentAmount = cents;
  const values = [1, 5, 10, 25];
  const coins = [0, 0, 0, 0];

  // Checks if the value of cents is a number
  if (typeof (cents) !== 'number' || isNaN(cents)) {
    return 'Value of cents must be a number';
  }

  // Checking that the number of cents is greater than 0:
  if (cents <= 0) {
    return 'Not enough money';
  }

  // Check that the number of cents value is an integer:
  if (!Number.isInteger(cents)) {
    return 'Amount in cents must be an integer';
  }

  for (let i = 3; i >= 0; i--) {
    coins[i] = Math.floor(currentAmount / values[i]);
    currentAmount -= coins[i] * values[i];
  }

  return coins;
}

module.exports = { getCoinCombination };
