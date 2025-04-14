'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return correct combination for 2 cents`, () => {
    const result = getCoinCombination(2);

    expect(result).toEqual([2, 0, 0, 0]);
  });

  it(`should return correct combination for 25 cents`, () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it(`should return correct combination for 99 cents`, () => {
    const result = getCoinCombination(99);

    expect(result).toEqual([4, 0, 2, 3]);
  });

  it(`should return correct combination for 99.8 cents`, () => {
    const result = getCoinCombination(99.8);

    expect(result).toEqual([4, 0, 2, 3]);
  });

  it(`should return zeros for 0 cents`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`should return zeros combination for negative cents'`, () => {
    const result = getCoinCombination(-100);

    expect(result).toEqual([0, 0, 0, 0]);
  });
});
