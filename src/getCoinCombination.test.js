'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`1 quarter should be equal 25 cents.`, () => {
    const value = getCoinCombination(25);
    const expected = [0, 0, 0, 1];

    expect(value)
      .toEqual(expected);
  });

  it(`should return a combination of the smallest`
    + ` possible number of coins`, () => {
    const value = [
      getCoinCombination(24),
      getCoinCombination(11),
      getCoinCombination(9),
      getCoinCombination(45),
    ];
    const expected = [[4, 0, 2, 0], [1, 0, 1, 0], [4, 1, 0, 0], [0, 0, 2, 1]];

    value.forEach(function(val, i) {
      expect(val)
        .toEqual(expected[i]);
    });
  });

  it(`should consist of only 4 type of coins`, () => {
    const value = getCoinCombination(25);
    const expected = 4;

    expect(value)
      .toHaveLength(expected);
  });

  it(`should return an array with 4 values equal 0 `
      + `if 'cents' === 0`, () => {
    const value = getCoinCombination(0);
    const expected = [0, 0, 0, 0];

    expect(value)
      .toEqual(expected);
  });
});
