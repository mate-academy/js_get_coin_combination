'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] if the number of cents equals 0', () => {
    expect(getCoinCombination(0)).toStrictEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] if the number of cents equals 1', () => {
    expect(getCoinCombination(1)).toStrictEqual([1, 0, 0, 0]);
  });

  it('should return [4, 0, 0, 0] if the number of cents equals 4', () => {
    expect(getCoinCombination(4)).toStrictEqual([4, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] if the number of cents equals 5', () => {
    expect(getCoinCombination(5)).toStrictEqual([0, 1, 0, 0]);
  });

  it('should return [1, 1, 0, 0] if the number of cents equals 6', () => {
    expect(getCoinCombination(6)).toStrictEqual([1, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] if the number of cents equals 10', () => {
    expect(getCoinCombination(10)).toStrictEqual([0, 0, 1, 0]);
  });

  it('should return [3, 1, 1, 0] if the number of cents equals 18', () => {
    expect(getCoinCombination(18)).toStrictEqual([3, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 1] if the number of cents equals 25', () => {
    expect(getCoinCombination(25)).toStrictEqual([0, 0, 0, 1]);
  });

  it('should return [1, 1, 1, 1] if the number of cents equals 41', () => {
    expect(getCoinCombination(41)).toStrictEqual([1, 1, 1, 1]);
  });
});
