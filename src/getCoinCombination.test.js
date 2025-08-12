'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    const result = getCoinCombination(0);

    expect(result).toBeInstanceOf(Array);
  });

  it('should return 1 penny for 1 coin', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('should return 1 penny and 1 nickel for 6 coins', () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it('should return 2 pennies, 1 nickel and 1 dime for 17 coins', () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it('should return 2 quarters for 50 coins', () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });
});
