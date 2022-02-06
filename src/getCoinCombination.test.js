'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return zeros for zero', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should work properly if cents === 1', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('should work properly if cents < 5', () => {
    const result = getCoinCombination(4);

    expect(result).toEqual([4, 0, 0, 0]);
  });

  it('should work properly if cents === 5', () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it('should work properly if 5 < cents < 10', () => {
    const result = getCoinCombination(9);

    expect(result).toEqual([4, 1, 0, 0]);
  });

  it('should work properly if cents === 10', () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it('should work properly if 10 < cents < 25', () => {
    const result = getCoinCombination(22);

    expect(result).toEqual([2, 0, 2, 0]);
  });

  it('should work properly if cents === 25', () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it('should work properly if cents > 25', () => {
    const result = getCoinCombination(48);

    expect(result).toEqual([3, 0, 2, 1]);
  });

  it('should work properly if cents === 41', () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });
});
