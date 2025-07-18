'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return the correct coin combination for 1 cents`, () => {
    const result = getCoinCombination(1);

    expect(result).toStrictEqual([1, 0, 0, 0]);
  });

  it(`should return the correct coin combination for 6 cents`, () => {
    const result = getCoinCombination(6);

    expect(result).toStrictEqual([1, 1, 0, 0]);
  });

  it(`should return the correct coin combination for 17 cents`, () => {
    const result = getCoinCombination(17);

    expect(result).toStrictEqual([2, 1, 1, 0]);
  });

  it(`should return the correct coin combination for 50 cents`, () => {
    const result = getCoinCombination(50);

    expect(result).toStrictEqual([0, 0, 0, 2]);
  });
});
