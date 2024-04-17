'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('result should be array', () => {
    const result = getCoinCombination(1);

    expect.arrayContaining(result);
  });

  it('length of array should be 4', () => {
    const result = getCoinCombination(1);

    expect(result.length).toBe(4);
  });

  it('should return 4 zero values with 0 on argument', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should return 4 one values with 41 on argument', () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it('should return [2, 0, 2, 2] with 72 on argument', () => {
    const result = getCoinCombination(72);

    expect(result).toEqual([2, 0, 2, 2]);
  });

  it('should return 4 quarters and 4 pennies with 104 on argument', () => {
    const result = getCoinCombination(104);

    expect(result).toEqual([4, 0, 0, 4]);
  });
});
