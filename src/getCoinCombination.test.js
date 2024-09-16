'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('0 coins', () => {
    const coins = getCoinCombination(0);

    expect(coins).toEqual([0, 0, 0, 0]);
  });

  it('should have pennies', () => {
    const coins = getCoinCombination(2);

    expect(coins).toEqual([2, 0, 0, 0]);
  });

  it('should have nickels', () => {
    const coins = getCoinCombination(6);

    expect(coins).toEqual([1, 1, 0, 0]);
  });

  it('should have dimes', () => {
    const coins = getCoinCombination(20);

    expect(coins).toEqual([0, 0, 2, 0]);
  });

  it('should have quarters', () => {
    const coins = getCoinCombination(30);

    expect(coins).toEqual([0, 1, 0, 1]);
  });
});
