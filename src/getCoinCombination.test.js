'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return only pennies if input coins is from 1 to 4', () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it('should return 4 quarters at input 100 coins if divisible by 25', () => {
    expect(getCoinCombination(100))
      .toEqual([0, 0, 0, 4]);
  });

  it('should return exact amount of each coin if coins = 41', () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it('should return the smallest amount of each coin if coins = 26', () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it('should return [0, 0, 0, 0] if input is 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return 4 pennies 1 nickels if coins = 9', () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it('should return 2 dimes if coins = 20', () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it(`should return 4 pennies 1 nickel 1 dime 2 quarters if coins = 69`, () => {
    expect(getCoinCombination(69))
      .toEqual([4, 1, 1, 2]);
  });

  it(`should return 4 pennies 2 deme 3 quarter if coins = 99`, () => {
    expect(getCoinCombination(99))
      .toEqual([4, 0, 2, 3]);
  });
});
