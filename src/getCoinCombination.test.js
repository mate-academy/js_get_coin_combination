'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
  
  test('should return 0`s, if the user inputs 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0])
   });

   test('should return 4 quarter, if the user inputs 100 cents', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4])
   });

   test('should return the least amount of coins, if the user inputs 41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
   });

   test('should return the least amount of coins, if the user inputs 40 cents', () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
   });

   test('should return the least amount of coins, if the user inputs 4 cents', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
   });

   test('should return the least amount of coins, if the user inputs 30 cents', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
   });

   test('should return the least amount of coins, if the user inputs 1006 cents', () => {
    expect(getCoinCombination(1006)).toEqual([1, 1, 0, 40]);
   });
});
