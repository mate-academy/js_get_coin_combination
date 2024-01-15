'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`works with Nan`, () => {
    const result = getCoinCombination(NaN);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`works with negative cents`, () => {
    const result = getCoinCombination(-5);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it.each([
    [1, [1, 0, 0, 0]],
    [6, [1, 1, 0, 0]],
    [17, [2, 1, 1, 0]],
    [50, [0, 0, 0, 2]],
  ])(`returns correct combination for %d cents`, (cents, expects) => {
    const result = getCoinCombination(cents);

    expect(result).toEqual(expects);
  });
});
