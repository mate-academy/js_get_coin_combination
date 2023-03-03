'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return only pennies if input is from 1 to 4', () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it('should return pennies and nickels if input divisibles by 5 and less then 10', () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it('should return only dimes if input divisibles by 10 and less then 25', () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it('should return only quarters if input divisibles by 25', () => {
    expect(getCoinCombination(100))
      .toEqual([0, 0, 0, 4]);
  });

  it('should return exact amount of each coin', () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it('should return the smallest amount of each coin', () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it('should return [0, 0, 0, 0] if input is 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });
});
