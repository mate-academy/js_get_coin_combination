'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return one penny for coins=1', () => {
    const coins = 1;

    const value = getCoinCombination(coins);

    expect(value).toStrictEqual([1, 0, 0, 0]);
  });

  it('should return one penny and one nickel for coins === 6', () => {
    const coins = 6;

    const value = getCoinCombination(coins);

    expect(value).toStrictEqual([1, 1, 0, 0]);
  });

  it('should return two pennies, nickel and one dime for coins === 17', () => {
    const coins = 17;

    const value = getCoinCombination(coins);

    expect(value).toStrictEqual([2, 1, 1, 0]);
  });

  it('should return two quarters for coins === 50', () => {
    const coins = 50;

    const value = getCoinCombination(coins);

    expect(value).toStrictEqual([0, 0, 0, 2]);
  });

  it('should return four zeros for coins === 0', () => {
    const coins = 0;

    const value = getCoinCombination(coins);

    expect(value).toStrictEqual([0, 0, 0, 0]);
  });
});
