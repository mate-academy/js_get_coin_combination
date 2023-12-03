'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return an array 1, 0, 0, 0, when cents =1`, () => {
    expect(getCoinCombination(1))
      .toEqual([
        1, 0, 0, 0,
      ]);
  });

  test(`should return an array 1, 1, 0, 0,`, () => {
    expect(getCoinCombination(6))
      .toEqual([
        1, 1, 0, 0,
      ]);
  });

  test(`should return an array 2, 1, 1, 0, `, () => {
    expect(getCoinCombination(17))
      .toEqual([
        2, 1, 1, 0,
      ]);
  });

  test(`should return an array 0, 0, 0, 2, `, () => {
    expect(getCoinCombination(50))
      .toEqual([
        0, 0, 0, 2,
      ]);
  });

  test(`should return must be positive number if cents < 0`, () => {
    expect(getCoinCombination(-50))
      .toContain([
        'must be positive number',
      ]);
  });

  test(`should return must be positive number if input is string `, () => {
    expect(getCoinCombination('foo'))
      .toContain([
        'must be number',
      ]);
  });

  test(`should return an array 0, 0, 0, 0, if input = 0 `, () => {
    expect(getCoinCombination(0))
      .toEqual([
        0, 0, 0, 0,
      ]);
  });
});
