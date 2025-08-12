'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`only 1 panny is returned for 1 cent`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`only 1 nickel is returned for 5 cents`, () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it(`only 1 dime is returned for 10 cents`, () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it(`only 1 quarter is returned for 25 cents`, () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it(`distributes coins equally when `
    + `the cents are equal to the denomination of all coins together`, () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it(`returns correct coin combination for 17 cents`, () => {
    const result = getCoinCombination(17);
    const expected = [2, 1, 1, 0];

    expect(result).toEqual(expected);
  });

  it(`returns correct coin combination for 50 cents`, () => {
    const result = getCoinCombination(50);
    const expected = [0, 0, 0, 2];

    expect(result).toEqual(expected);
  });

  it(`handle the case of zero cents`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });
});
