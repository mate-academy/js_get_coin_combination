'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
  
  test('should return 0`s if original data is 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0])
   });

   test('should return [0, 0, 0, 4] if original data is 100', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4])
   });

   test('should return [1, 1, 1, 1] if original data is 41', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
   });

   test('should return [0, 1, 1, 1] if original data is 40', () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
   });

   test('should return [4, 0, 0, 0] if original data is 4', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
   });

   test('should return [0, 1, 0, 1] if original data is 30', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
   });

   test('should return [1, 1, 0, 40] if original data is 1006', () => {
    expect(getCoinCombination(1006)).toEqual([1, 1, 0, 40]);
   });
});

   