'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return only penny if cents < 6', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return penny and nickel if cents in the range from 6 to 9', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it('should return all coin without quarter '
  + 'if cents in the range from 10 to 25', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return optimal distribution of coins in ascending order', () => {
    expect(getCoinCombination(66)).toEqual([1, 1, 1, 2]);
  });
});
