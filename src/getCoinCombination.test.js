'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([ 1, 0, 0, 0 ]);
  });

  test('should return [1, 1, 0, 0] for 6 cent', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return [2, 1, 1, 0] for 17 cent', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return [0, 0, 0, 2] for 50 cent', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return [3, 1, 1, 2] for 68 cent', () => {
    expect(getCoinCombination(68)).toEqual([3, 1, 1, 2]);
  });

  test('should return [0, 1, 1, 0] for 15 cent', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  test('should return [0, 0, 1, 1] for 35 cent', () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });

  test('should return [0, 0, 0, 4] for 100 cent', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  test('should return [0, 0, 0, 3] for 75 cent', () => {
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });

  test('should return [0, 0, 0, 0] for 0 cent', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
