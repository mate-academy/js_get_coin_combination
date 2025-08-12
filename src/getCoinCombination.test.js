'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0, 1, 0] for 10 cents', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  test('should return [0, 1, 1, 0] for 15 cents', () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  test('should return [0, 1, 0, 1] for 30 cents', () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  test('should return [0, 0, 0, 3] for 75 cents', () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });
});
