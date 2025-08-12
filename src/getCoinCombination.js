'use strict';

function getCoinCombination(cents) {
  const coins = [0, 0, 0, 0];

  let remainingCents = cents;

  coins[3] = Math.floor(remainingCents / 25);
  remainingCents %= 25;

  coins[2] = Math.floor(remainingCents / 10);
  remainingCents %= 10;

  coins[1] = Math.floor(remainingCents / 5);
  remainingCents %= 5;

  coins[0] = remainingCents;

  return coins;
}

module.exports = getCoinCombination;
