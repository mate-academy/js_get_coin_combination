'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return 4 penny for 4 cents', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });
  
  it('should return 1 nickel for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });
  
  it('should return 4 pennies and 1 nickel for 9 cents', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });
  
  it('should return 1 dime for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });
  
  it('should return 1 nickel and 1 dime for 15 cents', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });
  
  it('should return 4 pennies, 1 nickel, 1 dime for 19 cents', () => {
    expect(getCoinCombination(19)).toEqual([4, 1, 1, 0]);
  });
  
  it('should return 1 quarter for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });
  
  it('should return 1 dime and 1 quarter for 35 cents', () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });
  
  it('should return 4 pennies, 1 nickel, 1 dime, 1 quarter for 44 cents', () => {
    expect(getCoinCombination(44)).toEqual([4, 1, 1, 1]);
  });
  
  it('should return 3 pennies, 2 dimes, 4 quarters for 123 cents', () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });
});
