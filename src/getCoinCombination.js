'use strict';

/**
 * @param {number} cents
 * @returns {number[]} [pennies, nickels, dimes, quarters]
 */
function getCoinCombination(cents) {
  const result = [0, 0, 0, 0]; // pennies, nickels, dimes, quarters
  let remaining = cents;

  result[3] = Math.floor(remaining / 25);
  remaining %= 25;

  result[2] = Math.floor(remaining / 10);
  remaining %= 10;

  result[1] = Math.floor(remaining / 5);
  remaining %= 5;

  result[0] = remaining; // залишились лише пенні

  return result;
}

module.exports = getCoinCombination;
