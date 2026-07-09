'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return zeros for value of 0`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`should return one penny for value of 1`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`should return one nickel for value of 5`, () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it(`should return one dime for value of 10`, () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it(`should return one quarter for value of 25`, () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it(`should return trutly result for value of 42`, () => {
    const result = getCoinCombination(42);

    expect(result).toEqual([2, 1, 1, 1]);
  });
});
