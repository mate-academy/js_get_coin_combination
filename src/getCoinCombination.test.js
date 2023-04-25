'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(1))
      .toBeInstanceOf(Array);
  });

  it(`should return an array that lenght = 4`, () => {
    expect(getCoinCombination(2))
      .toHaveLength(4);
  });

  it('should return an array with four zeros if user enters 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return 1 penny if user enters 1', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('should return 2 penny if user enters 2', () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it('should return 4 penny if user enters 4', () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('should return 1 nickel if user enters 5', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('should return 1 penny and 1 nickel if user enters 6', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it('should return 4 penny and 1 nickel if user enters 9', () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it('should return 1 dime if user enters 10', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('should return 1 penny and 1 dime position if user enters 11', () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it('should return 4 penny and 2 dime if user enters 24', () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it('should return 1 quarter if user enters 25', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it('should return 1 penny and 1 quarter if user enters 26', () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });
});
