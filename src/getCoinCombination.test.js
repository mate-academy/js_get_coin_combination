'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return correct array for value > 0', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return error for negative input', () => {
    expect(() => getCoinCombination(-5)).toThrow();
    expect(() => getCoinCombination(-1)).toThrow();
    expect(() => getCoinCombination(-100)).toThrow();
    expect(() => getCoinCombination(-4)).toThrow();
  });

  it('should return array of zeroes for input = 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return error for string input', () => {
    expect(() => getCoinCombination('a')).toThrow();
    expect(() => getCoinCombination('Hello world!')).toThrow();
  });
});
