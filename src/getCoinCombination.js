'use strict';
/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  let currentAmount = cents;
  const values = [25, 10, 5, 1]; // order: quarters, dimes, nickels, pennies
  const result = [];

  for (let value of values) {
    const count = Math.floor(currentAmount / value);
    result.push(count);
    currentAmount -= count * value;
  }

  // reverse into [pennies, nickels, dimes, quarters]
  return [result[3], result[2], result[1], result[0]];
}

module.exports = { getCoinCombination };
