'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  const cases = [
    { cents: 0, expected: [0, 0, 0, 0] },
    { cents: 1, expected: [1, 0, 0, 0] },
    { cents: 6, expected: [1, 1, 0, 0] },
    { cents: 17, expected: [2, 1, 1, 0] },
    { cents: 30, expected: [0, 1, 0, 1] },
    { cents: 41, expected: [1, 1, 1, 1] },
    { cents: 50, expected: [0, 0, 0, 2] },
    { cents: 99, expected: [4, 0, 2, 3] },
    { cents: 100, expected: [0, 0, 0, 4] },
  ];

  test.each(cases)(
    'returns correct combination for $cents cents',
    ({ cents, expected }) => {
      expect(getCoinCombination(cents)).toEqual(expected);
    },
  );
});
