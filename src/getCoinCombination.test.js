'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeDefined();
  });

  it(`returns an array`, () => {
    expect(getCoinCombination(100)).toBeInstanceOf(Array);
  });

  it(`returns array of length = 4`, () => {
    expect(getCoinCombination(100)).toHaveLength(4);
  });

  it(`returns array with numbers`, () => {
    const result = getCoinCombination(100);

    result.forEach((value) => expect(typeof value).toBe('number'));
  });

  it(`returns array with pennies if cents < 5`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`returns array with pennies and nickels if 5 < cents < 10`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`returns array with pennies, nickels and dimes if 10 < cents < 25`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`returns array with quarters if cents are divisible by 25`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
