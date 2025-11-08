'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');
  const cases = [
    {
      input: 1, expected: [1, 0, 0, 0],
    },
    {
      input: 6, expected: [1, 1, 0, 0],
    },
    {
      input: 17, expected: [2, 1, 1, 0],
    },
    {
      input: 50, expected: [0, 0, 0, 2],
    },
  ];

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  cases.forEach(({ input, expected }) => {
    it(`should work correctly with ${input} 'cents'`, () => {
      expect(getCoinCombination(input)).toEqual(expected);
    });
  });
});
