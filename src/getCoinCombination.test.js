'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return zeros if 'cents' = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return only pennies if 'cents' < 5`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it(`should return only nickels if 'cents' = 5`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return only dimes if 'cents' = 10 or 20`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);

    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it(`should return only quarters if 'cents' is dividing cleanly by 25`, () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });

  it(`should combine some types of coins`, () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);

    expect(getCoinCombination(45))
      .toEqual([0, 0, 2, 1]);
  });

  it(`should combine all types of coins`, () => {
    expect(getCoinCombination(68))
      .toEqual([3, 1, 1, 2]);
  });

  it(`should return zeros if 'cents' is NaN`, () => {
    expect(getCoinCombination(NaN))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return zeros if 'cents' is Infinity`, () => {
    expect(getCoinCombination(Infinity))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return zeros if 'cents' is negative`, () => {
    expect(getCoinCombination(-3))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should work with decimals`, () => {
    expect(getCoinCombination(16.8))
      .toEqual([1, 1, 1, 0]);
  });
});
