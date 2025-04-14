'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return only pennies', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return only nickels', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return pennies and nickels', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return only dimes', () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  it('should return pennies, nickels and dimes', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return only quarters', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return pennies, nickels, dimes and quarters', () => {
    expect(getCoinCombination(68)).toEqual([3, 1, 1, 2]);
  });
});
