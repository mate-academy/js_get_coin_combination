'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] if cents === 0', () => {
    const coins = getCoinCombination(0);

    expect(coins).toEqual([0, 0, 0, 0]);
  });

  it('should contain only quarters if cents are multiple of 25', () => {
    const coins = getCoinCombination(50);

    expect(coins).toEqual([0, 0, 0, 2]);
  });

  it('should contain only dimes'
  + 'if cents are multiple of 10 and less then 25', () => {
    const coins = getCoinCombination(20);

    expect(coins).toEqual([0, 0, 2, 0]);
  });

  it('should contain only 1 nickel if cents === 5', () => {
    const coins = getCoinCombination(5);

    expect(coins).toEqual([0, 1, 0, 0]);
  });

  it('should contain only pennies if cents are less then 5', () => {
    const coins = getCoinCombination(3);

    expect(coins).toEqual([3, 0, 0, 0]);
  });

  it('should mixed different coins', () => {
    const coins = getCoinCombination(17);

    expect(coins).toEqual([2, 1, 1, 0]);
  });
});
