'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('return [1, 0, 0, 0] if amount = 1', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('return [2, 1, 0, 0] if amount = 7', () => {
    const result = getCoinCombination(7);

    expect(result).toEqual([2, 1, 0, 0]);
  });

  it('return [3, 0, 1, 0] if amount = 13', () => {
    const result = getCoinCombination(13);

    expect(result).toEqual([3, 0, 1, 0]);
  });

  it('return [1, 1, 1, 0] if amount = 16', () => {
    const result = getCoinCombination(16);

    expect(result).toEqual([1, 1, 1, 0]);
  });

  it('return [1, 1, 1, 1] if amount = 41', () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it('return [4, 0, 2, 3] if amount = 99', () => {
    const result = getCoinCombination(99);

    expect(result).toEqual([4, 0, 2, 3]);
  });

  it('works correct with big amount', () => {
    const result = getCoinCombination(1000333);

    expect(result).toEqual([3, 1, 0, 40013]);
  });
});
