'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it.each([
    [0, [0, 0, 0, 0]],
    [1, [1, 0, 0, 0]],
    [4, [4, 0, 0, 0]],
    [5, [0, 1, 0, 0]],
    [6, [1, 1, 0, 0]],
    [9, [4, 1, 0, 0]],
    [10, [0, 0, 1, 0]],
    [11, [1, 0, 1, 0]],
    [15, [0, 1, 1, 0]],
    [17, [2, 1, 1, 0]],
    [20, [0, 0, 2, 0]],
    [24, [4, 0, 2, 0]],
    [25, [0, 0, 0, 1]],
    [26, [1, 0, 0, 1]],
    [30, [0, 1, 0, 1]],
    [35, [0, 0, 1, 1]],
    [41, [1, 1, 1, 1]],
    [49, [4, 0, 2, 1]],
    [50, [0, 0, 0, 2]],
    [99, [4, 0, 2, 3]],
    [100, [0, 0, 0, 4]],
    [1234, [4, 1, 0, 49]],
  ])('should return the fewest coins for %i cents', (cents, expected) => {
    expect(getCoinCombination(cents)).toEqual(expected);
  });
});
