'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`empty`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  test(`1 penny`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  test(`4 penny`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  test(`1 nickel`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  test(`2 penny + 1 nickel`, () => {
    expect(getCoinCombination(7))
      .toEqual([2, 1, 0, 0]);
  });

  test(`4 penny + 1 nickel`, () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  test(`1 dime`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  test(`1 dime + 1 nickel`, () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  test(`2 dime + 4 penny`, () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  test(`1 quarter`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  test(`1 quarter + 1 nickel + 2 penny`, () => {
    expect(getCoinCombination(32))
      .toEqual([2, 1, 0, 1]);
  });

  test(`1 quarter + 1 dime +1 nickel + 1 penny`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  test(`2 quarter + 1 dime + 1 nickel + 2 penny`, () => {
    expect(getCoinCombination(67))
      .toEqual([2, 1, 1, 2]);
  });

  test(`2 quarter + 2 dime + 4 penny`, () => {
    expect(getCoinCombination(74))
      .toEqual([4, 0, 2, 2]);
  });

  test(`3 quarter`, () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });
});
