'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should throw an error if params are invalid`, () => {
    expect(() => getCoinCombination(-5)).toThrow(
      'Cents must be a positive number'
    );

    expect(() => getCoinCombination(null)).toThrow('Cents must be a number');

    expect(() => getCoinCombination(0.5)).toThrow('Cents must be an integer');
  });

  it('should return true value ', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
