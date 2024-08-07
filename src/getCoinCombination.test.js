'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return 1 penny for 1', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('should return 1 nickel for 5', () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it('should return 1 dime for 10', () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it('should return 1 quarter for 25', () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it('should return 1 penny + 1 nickel for 6', () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it('should return 4 penny + 1 nickel + 1 dime for 19', () => {
    const result = getCoinCombination(19);

    expect(result).toEqual([4, 1, 1, 0]);
  });

  it('should return 4 quarter for 100', () => {
    const result = getCoinCombination(100);

    expect(result).toEqual([0, 0, 0, 4]);
  });

  it('should work with negative numbers', () => {
    const result = getCoinCombination(-1);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should return [0, 0, 0, 0] for 0', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });
});
