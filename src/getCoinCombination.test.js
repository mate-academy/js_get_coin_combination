'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return the correct combination for 135 cents`, () => {
    expect(getCoinCombination(135))
      .toEqual([0, 0, 1, 5]);
  });

  it(`should return the correct combination for 100 cents`, () => {
    expect(getCoinCombination(100))
      .toEqual([0, 0, 0, 4]);
  });

  it(`should return the correct combination for 55 cents`, () => {
    expect(getCoinCombination(55))
      .toEqual([0, 1, 0, 2]);
  });

  it(`should return the correct combination for 50 cents`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return the correct combination for 25 cents`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return the correct combination for 17 cents`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return the correct combination for 6 cents`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return the correct combination for 1 cents`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return the correct combination for 0 cents`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });
});
