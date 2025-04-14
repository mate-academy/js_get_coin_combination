'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return 0 if coin = 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0])
  })

  it('should return 1 penny if coin = 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0])
  })

  it('should return 1 penny and 1 nickel if coin = 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0])
  })

  it('should return 2 penny, 1 nickel and 1 dime if coin = 17', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0])
  })

  it('should return 2 quarters if coin = 50', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2])
  })
});
