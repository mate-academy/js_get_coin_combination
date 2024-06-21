'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return 1 penny when 1 entered', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return 1 nickel and 1 penny when 6 entered', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return 1 dime, 1 nickel and 1 penny whe 17 entered', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return 2 quarters when 50 entered', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
