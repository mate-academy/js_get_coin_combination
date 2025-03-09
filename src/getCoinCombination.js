'use strict';

function getCoinCombination(amount) {
  const coinTypes = [25, 10, 5, 1]; // Penny, Nickel, Dime, Quarter
  const result = [0, 0, 0, 0]; // [quarters, dimes, nickels, pennies]
  let remainingAmount = amount;

  for (let i = 0; i < coinTypes.length; i++) {
    while (remainingAmount >= coinTypes[i]) {
      remainingAmount -= coinTypes[i];
      result[i]++;
    }
  }

  return result;
}

module.exports = getCoinCombination;
