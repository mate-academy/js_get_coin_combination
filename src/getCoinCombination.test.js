'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should Test Zero Cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should Test Only Pennies', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should Test Exact Nickel', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should Test Exact Dime', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should Test Exact Quarter', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should Test Standard Combination', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should Test Complex Combination', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('should Test Multiple Quarters', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should Test No Pennies', () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
  });

  it('should Test No Nickels', () => {
    expect(getCoinCombination(39)).toEqual([4, 0, 1, 1]);
  });

  it('should Test No Dimes', () => {
    expect(getCoinCombination(34)).toEqual([4, 1, 0, 1]);
  });

  it('should Test Large Value', () => {
    expect(getCoinCombination(137)).toEqual([2, 0, 1, 5]);
  });

  it('should Test Just Below a Nickel', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should Test Just Below a Dime', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it('should Test Just Below a Quarter', () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });
});
