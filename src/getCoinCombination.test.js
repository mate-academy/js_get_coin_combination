'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
  test(`returns correct combination for 1 cent`, () => {
      expect(getCoinCombination(1))
      .toEqual([1,0,0,0])
  });
  test(`returns correct combination for 6 cent`, () => {
      expect(splitInteger(6))
      .toEqual([1,1,0,0])
  });
  test(`returns correct combination for 17 cent`, () => {
      expect(splitInteger(17))
      .toEqual([2,1,1,0])
  });
  test(`returns correct combination for 50 cent`, () => {
      expect(splitInteger(50))
      .toEqual([0,0,0,2])
  });
  test(`returns correct combination for 0 cent`, () => {
    expect(splitInteger(0))
    .toEqual([0,0,0,0])
  });
  test(`returns correct combination for large numbers`, () => {
    expect(splitInteger(120))
    .toEqual([0,0,2,4])
    expect(splitInteger(188))
    .toEqual([3,0,1,7])
    expect(splitInteger(88))
    .toEqual([3,0,1,3])
  });
});
