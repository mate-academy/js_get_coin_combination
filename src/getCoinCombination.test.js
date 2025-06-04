'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return '1' pennie when '1' is entered`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return 1 penny + 1 nickel when 6 is entered', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return 2 pennies + 1 nickel + 1 dime when 16 is entered', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return 2 quarters when 50 is entered', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(
    'should return 3 penny + 1 nickel + 1 dime + 2 quarters when 68 is entered',
    () => {
      expect(getCoinCombination(68)).toEqual([3, 1, 1, 2]);
    });
});
