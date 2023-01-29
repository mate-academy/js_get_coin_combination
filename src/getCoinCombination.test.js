'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('cents === 0', () => {
    const coins = getCoinCombination(0);

    expect(coins)
      .toEqual([0, 0, 0, 0]);
  });

  it('cents > 0 and cents < 1 nickel', () => {
    const coins = getCoinCombination(1);

    expect(coins)
      .toEqual([1, 0, 0, 0]);
  });

  it('cents === 1 nickel', () => {
    const coins = getCoinCombination(5);

    expect(coins)
      .toEqual([0, 1, 0, 0]);
  });

  it('cents > 1 nickel and cents < 1 dime', () => {
    const coins = getCoinCombination(6);

    expect(coins)
      .toEqual([1, 1, 0, 0]);
  });

  it('cents === 1 dime', () => {
    const coins = getCoinCombination(10);

    expect(coins)
      .toEqual([0, 0, 1, 0]);
  });

  it('cents > 1 dime and cents < 1 quarter', () => {
    const coins = getCoinCombination(17);

    expect(coins)
      .toEqual([2, 1, 1, 0]);
  });

  it('cents === 1 quarter', () => {
    const coins = getCoinCombination(25);

    expect(coins)
      .toEqual([0, 0, 0, 1]);
  });

  it('cents > 1 quarter', () => {
    const coins = getCoinCombination(50);

    expect(coins)
      .toEqual([0, 0, 0, 2]);
  });
});
