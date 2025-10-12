'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  // Walidacja wejścia (opcjonalna, ale zalecana)
  if (!Number.isInteger(cents) || cents < 0) {
    throw new Error("Cents must be a non-negative integer");
  }

  const valuesDesc = [25, 10, 5, 1]; // quarters → pennies
  const coinsDesc = [0, 0, 0, 0];
  let currentAmount = cents;

  // Obliczamy liczbę monet w kolejności malejącej
  for (let i = 0; i < valuesDesc.length; i++) {
    coinsDesc[i] = Math.floor(currentAmount / valuesDesc[i]);
    currentAmount -= coinsDesc[i] * valuesDesc[i];
  }

  // Mapujemy do wymaganego porządku: [pennies, nickels, dimes, quarters]
  const coins = [coinsDesc[3], coinsDesc[2], coinsDesc[1], coinsDesc[0]];

  return coins;
}

module.exports = { getCoinCombination };



