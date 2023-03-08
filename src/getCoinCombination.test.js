'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    const result = getCoinCombination(50);

    expect(result).toBeInstanceOf(Array);
  });

  test('should return [0, 0, 0, 0] if argument is (0)', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  test('should return [1, 0, 0, 0] if argument is(1)', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  test('should return [3, 0, 0, 0] if argument is(3)', () => {
    const result = getCoinCombination(3);

    expect(result).toEqual([3, 0, 0, 0]);
  });

  test('should return [0, 1, 0, 0] if argument is (5)', () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  test('should return [0, 0, 1, 0] if argument is (10)', () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  test('should return [0, 0, 0, 1] if argument is (25)', () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  test('should return [1, 0, 0, 2] if argument is (101)', () => {
    const result = getCoinCombination(101);

    expect(result).toEqual([1, 0, 0, 4]);
  });
});
