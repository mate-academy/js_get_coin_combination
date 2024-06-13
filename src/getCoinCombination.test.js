'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return 4 zeros if 0 cents', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should correct return penny', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should correct return nickels', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should correct return dimes', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should correct return quarters', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should correct return all coins', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
