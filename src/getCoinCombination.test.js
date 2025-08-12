'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return [0, 0] when input is (0, 0)`, () => {
    const result = getCoinCombination(34);

    expect(typeof result[0]).toBe('number');
    expect(typeof result[1]).toBe('number');
    expect(typeof result[2]).toBe('number');
    expect(typeof result[3]).toBe('number');
  });

  test(`should return object`, () => {
    const result = getCoinCombination(0);

    expect(typeof result).toBe('object');
  });

  test(`should return right length`, () => {
    const result = getCoinCombination(0);

    expect(result).toHaveLength(4);
  });

  test(`should return [0, 0, 0, 0] when input is (0)`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  test(`should return [4, 0, 0, 0] when input is (4)`, () => {
    const result = getCoinCombination(4);

    expect(result).toEqual([4, 0, 0, 0]);
  });

  test(`should return [1, 1, 0, 0] when input is (6)`, () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  test(`should return [1, 1, 1, 0] when input is (16)`, () => {
    const result = getCoinCombination(16);

    expect(result).toEqual([1, 1, 1, 0]);
  });

  test(`should return [1, 1, 1, 1] when input is (41)`, () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });
});
