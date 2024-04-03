'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('First element is my cats names in human years', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  test('First element is my cats names in human years', () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  test('First element is my cats names in human years', () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  test('First element is my cats names in human years', () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });
});
