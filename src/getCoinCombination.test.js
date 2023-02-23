'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return 0 for 0`, () => {
    const cents = 0;
    const coins = getCoinCombination(cents);

    expect(coins)
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 penny for 1 cent`, () => {
    const cents = 1;
    const coins = getCoinCombination(cents);

    expect(coins)
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return 1 nickel for 5 cent`, () => {
    const cents = 5;
    const coins = getCoinCombination(cents);

    expect(coins)
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return 1 dime for 10 cent`, () => {
    const cents = 10;
    const coins = getCoinCombination(cents);

    expect(coins)
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return 1 quarters for 25 cent`, () => {
    const cents = 25;
    const coins = getCoinCombination(cents);

    expect(coins)
      .toEqual([0, 0, 0, 1]);
  });
});
