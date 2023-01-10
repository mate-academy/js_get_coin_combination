'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should be an array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it('should return 0 if input is 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return array with penny when input is 1', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('should return array with nickel when input is 5', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('should return array with dime when input is 10', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('should return array with quarters when input is 25', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it('should return [1, 1, 1, 1] when input is 41', () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it('should return [1, 1, 1, 4] when input is 116', () => {
    expect(getCoinCombination(116))
      .toEqual([1, 1, 1, 4]);
  });

  it('should return [3, 1, 1, 0] when input is 18', () => {
    expect(getCoinCombination(18))
      .toEqual([3, 1, 1, 0]);
  });
});
