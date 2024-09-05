'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
test('should return [0, 0, 0, 0] for 0 cents', () => {
expect(getCoinCombination (0)).toEqual ([0, 0, 0, 0]);
}) ;
test('should return [1, 0, 0, 0] for 1 cent', () => {
  expect (getCoinCombination (1)).toEqual([1, 0, 0, 0]);
  });
test('should return [0, 1, 0, 0] for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
test('should return [0, 0, 0, 1] for 25 cents', () => {
      expect (getCoinCombination (25)).toEqual([0, 0, 0, 1]);
      }) ;
test('should return correct combination for 41 cents', () => {
        expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]); // 1 четвертак, 1 дайм, 1 нікель, 1 пенні
    });
test('should return correct combination for 99 cents', () => {
      expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]); // 3 четвертаки, 2 дайми, 4 пенні
  });
  test('should return correct combination for 100 cents', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]); // 4 четвертаки
});
});

    });
