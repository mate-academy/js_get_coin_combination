'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return a dime, when cents is equal to 10', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  test('should return a nickel and a dime, when cents is equal to 15', () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  test('should return 1 nickel, 1 quarter, when cents is equal to 30', () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  test('should return 3 quarters, when cents is equal to 75', () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });
});
