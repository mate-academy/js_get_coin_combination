'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be an array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  // first, let's check the minimum number of coins of each denomination
  it('should return zeros when cents === 0', () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it('should return array only with quarters when cents === 25', () => {
    expect(getCoinCombination(25))
      .toStrictEqual([0, 0, 0, 1]);
  });

  it('should return array only with penny when cents === 1', () => {
    expect(getCoinCombination(1))
      .toStrictEqual([1, 0, 0, 0]);
  });

  it('should return array only with dime when cents === 10', () => {
    expect(getCoinCombination(10))
      .toStrictEqual([0, 0, 1, 0]);
  });

  it('should return array only with nickel when cents === 5', () => {
    expect(getCoinCombination(5))
      .toStrictEqual([0, 1, 0, 0]);
  });

  // let's try with combinations
  it('4 quart,1 dime when cents 110', () => {
    expect(getCoinCombination(110))
      .toStrictEqual([0, 0, 1, 4]);
  });

  it('should return array with 1 quarters and nickel when cents === 30', () => {
    expect(getCoinCombination(30))
      .toStrictEqual([0, 1, 0, 1]);
  });

  it('with 7 quart, 2 pen when cents 177', () => {
    expect(getCoinCombination(177))
      .toStrictEqual([2, 0, 0, 7]);
  });

  it('should return 4 quarters, 1 dime and 4 penny when cents === 114', () => {
    expect(getCoinCombination(114))
      .toStrictEqual([4, 0, 1, 4]);
  });
});
