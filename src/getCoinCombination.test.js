'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return zero coin for zero cents', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  })

  it ('shoud return a number of pennies for cents under 5', () => {
    expect(getCoinCombination(3))
      .toEqual([3, 0, 0, 0]);
  })

  it('should return a number of nickels for cents under 10', () => {
    expect(getCoinCombination(8))
      .toEqual([3, 1, 0, 0]);
  })

  it('should return a number of dimes for cents under 25', () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  })

  it('should return a number of quarters', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2])
  })
});
