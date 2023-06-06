'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array`, () => {
    const result = getCoinCombination(50);
    const isTrue = Array.isArray(result);

    expect(isTrue).toBe(true);
  });

  it(`should return 1 penny if coins = 1`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`should return 1 penny and 1 nickel if coins = 6`, () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it(`should return 1 dime if coins = 10`, () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it(`should return 1 pennies and 1 dime if coins = 11`, () => {
    const result = getCoinCombination(11);

    expect(result).toEqual([1, 0, 1, 0]);
  });

  it(`should return 2 pennies 1 nickel and 1 dime if coins = 17`, () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it(`should return 1 nickel and 1 dime if coins = 15`, () => {
    const result = getCoinCombination(15);

    expect(result).toEqual([0, 1, 1, 0]);
  });

  it(`should return 4 penies and 2 dime if coins = 24`, () => {
    const result = getCoinCombination(24);

    expect(result).toEqual([4, 0, 2, 0]);
  });

  it(`should return  1 quarter if coins = 25`, () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it(`should return 1 nickel 1 deme and 2 quarter if coins = 65`, () => {
    const result = getCoinCombination(65);

    expect(result).toEqual([0, 1, 1, 2]);
  });

  it(`should return 2 quarter if coins = 50`, () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });

  it(`should return 4 pennies 2 deme and 3 quarter if coins = 99`, () => {
    const result = getCoinCombination(99);

    expect(result).toEqual([4, 0, 2, 3]);
  });
});
