'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [1, 0, 0, 0] when input value is (1)', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] when input value is (6)', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 1, 0] when input value is (17)', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 2] when input value is (50)', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [2, 0, 2, 2] when input value is (72)', () => {
    expect(getCoinCombination(72)).toEqual([2, 0, 2, 2]);
  });

  it('should return [3, 0, 1, 3] when input value is (88)', () => {
    expect(getCoinCombination(88)).toEqual([3, 0, 1, 3]);
  });
});
