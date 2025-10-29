'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test.each([
    [1, [1, 0, 0, 0]],
    [6, [1, 1, 0, 0]],
    [17, [2, 1, 1, 0]],
    [50, [0, 0, 0, 2]],
    [0, [0, 0, 0, 0]],
  ])('getCoinCombination(%i) should return %p', (sum, expected) => {
    expect(getCoinCombination(sum)).toEqual(expected);
  });
});
