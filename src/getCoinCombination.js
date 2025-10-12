function getCoinCombination(cents) {
  const values = [25, 10, 5, 1];
  const coins = [0, 0, 0, 0];
  let currentAmount = cents;

  for (let i = 0; i < values.length; i++) {
    coins[i] = Math.floor(currentAmount / values[i]);
    currentAmount -= coins[i] * values[i];
  }

  return coins;
}

module.exports = { getCoinCombination };

