'use strict';

function getCoinCombination(amount) {
  const coins = [50, 20, 10, 5, 2, 1];
  const result = [];
  let remainingAmount = amount;

  for (let i = 0; i < coins.length; i++) {
    while (remainingAmount >= coins[i]) {
      result.push(coins[i]);
      remainingAmount -= coins[i];
    }
  }

  return result;
}

module.exports = getCoinCombination;
