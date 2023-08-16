'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return correct pennies for 0 < value < 5', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);

    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('should return correct nickels for 4 < value < 9', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);

    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);

    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it('should return the correct dimes for 8 < value < 25', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);

    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it('return the correct combination of quarters for 24 < value', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);

    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);

    expect(getCoinCombination(67))
      .toEqual([2, 1, 1, 2]);
  });
});
