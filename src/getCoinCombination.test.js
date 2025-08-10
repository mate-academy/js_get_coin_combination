'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  test.each([
    [0, [0, 0, 0, 0]],
    [1, [1, 0, 0, 0]],
    [6, [1, 1, 0, 0]],
    [17, [2, 1, 1, 0]],
    [25, [0, 0, 0, 1]],
    [50, [0, 0, 0, 2]],
    [99, [4, 0, 2, 3]],
  ])('should return correct combination for %i cents', (cents, expected) => {
    expect(getCoinCombination(cents)).toEqual(expected);
  });
});
