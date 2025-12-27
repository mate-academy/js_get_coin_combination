'use strict';

/* eslint-disable max-len */

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [0, 0, 0, 0] for 0 cents`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return correct pennies for amounts less than 5`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);

    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);

    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it(`should return correct combination for amounts including pennies and nickels`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);

    expect(getCoinCombination(8))
      .toEqual([3, 1, 0, 0]);

    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it(`should return correct combination for amounts including pennies, nickels, and dimes`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);

    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);

    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);

    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return correct combination for amounts including all types of coins`, () => {
    expect(getCoinCombination(148))
      .toEqual([3, 0, 2, 5]);

    expect(getCoinCombination(72))
      .toEqual([2, 0, 2, 2]);

    expect(getCoinCombination(84))
      .toEqual([4, 1, 0, 3]);

    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
