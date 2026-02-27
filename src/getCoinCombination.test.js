'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should count number of pennies correctly', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should count number of nickels correctly', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should count number of pennies and nickels correctly', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should count number of dimes correctly', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should count number of pennies, nickels and dimes correctly', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should count number of quarters correctly', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should count number of all coin types correctly', () => {
    expect(getCoinCombination(36)).toEqual([1, 0, 1, 1]);
  });

  it('should count number of quarters correctly', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
