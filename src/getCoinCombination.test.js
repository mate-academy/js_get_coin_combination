'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    const result = getCoinCombination(1);

    expect(Array.isArray(result)).toBe(true);
  });

  it('should return an array of length 4', () => {
    const result = getCoinCombination(1);

    expect(result).toHaveLength(4);
  });

  it('should return [0, 0, 0, 1] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([0, 0, 0, 1]);
  });

  it('should return [0, 0, 1, 1] for 6 cents (1 nickel + 1 penny)', () => {
    expect(getCoinCombination(6)).toEqual([0, 0, 1, 1]);
  });

  it('should return [0, 1, 1, 2] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([0, 1, 1, 2]);
  });

  it('should return [2, 0, 0, 0] for 50 cents (2 quarters)', () => {
    expect(getCoinCombination(50)).toEqual([2, 0, 0, 0]);
  });

  it('should ignore decimal part and use floor for non-integer input', () => {
    expect(getCoinCombination(6.7)).toEqual([0, 0, 1, 1]);
  });
});
