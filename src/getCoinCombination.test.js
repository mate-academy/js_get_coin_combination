'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(1))
      .toBeInstanceOf(Array);
  });

  it(`should return an array with 4 elements`, () => {
    expect(getCoinCombination(10))
      .toHaveLength(4);
  });

  it(`should return [0, 0, 0, 0] array if there is 0 cent`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] array if there is 1 cent`, () => {
    expect(getCoinCombination(1))
      .toStrictEqual([1, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] array if there are 5 cents`, () => {
    expect(getCoinCombination(5))
      .toStrictEqual([0, 1, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] array if there are 6 cents`, () => {
    expect(getCoinCombination(6))
      .toStrictEqual([1, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] array if there are 10 cents`, () => {
    expect(getCoinCombination(10))
      .toStrictEqual([0, 0, 1, 0]);
  });

  it(`should return [1, 0, 1, 0] array if there are 11 cents`, () => {
    expect(getCoinCombination(11))
      .toStrictEqual([1, 0, 1, 0]);
  });

  it(`should return [2, 1, 1, 0] array if there are 17 cents`, () => {
    expect(getCoinCombination(17))
      .toStrictEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] array if there are 25 cents`, () => {
    expect(getCoinCombination(25))
      .toStrictEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 0, 0, 1] array if there are 26 cents`, () => {
    expect(getCoinCombination(26))
      .toStrictEqual([1, 0, 0, 1]);
  });

  it(`should return [0, 0, 0, 2] array if there are 50 cents`, () => {
    expect(getCoinCombination(50))
      .toStrictEqual([0, 0, 0, 2]);
  });

  it(`should return [3, 1, 1, 3] array if there are 93 cents`, () => {
    expect(getCoinCombination(93))
      .toStrictEqual([3, 1, 1, 3]);
  });

  it(`should return whole number in the array's element`, () => {
    const result = getCoinCombination(93);

    expect(result)
      .toStrictEqual([3, 1, 1, 3]);
  });
});
