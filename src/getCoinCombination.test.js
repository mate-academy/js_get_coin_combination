'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should be [0, 0, 0, 0]', () => {
    const result = getCoinCombination(0);

    expect(result).toStrictEqual([0, 0, 0, 0]);
  });

  it('should be [1, 0, 0, 0]', () => {
    const result = getCoinCombination(1);

    expect(result).toStrictEqual([1, 0, 0, 0]);
  });

  it('should be [1, 1, 0, 0]', () => {
    const result = getCoinCombination(6);

    expect(result).toStrictEqual([1, 1, 0, 0]);
  });

  it('should be [1, 1, 1, 0]', () => {
    const result = getCoinCombination(16);

    expect(result).toStrictEqual([1, 1, 1, 0]);
  });

  it('should be [1, 1, 1, 1]', () => {
    const result = getCoinCombination(41);

    expect(result).toStrictEqual([1, 1, 1, 1]);
  });

  it('should be [1, 0, 0, 0]', () => {
    const result = getCoinCombination(4);

    expect(result).toStrictEqual([4, 0, 0, 0]);
  });

  it('should be [4, 1, 0, 0]', () => {
    const result = getCoinCombination(9);

    expect(result).toStrictEqual([4, 1, 0, 0]);
  });

  it('should be [1, 0, 1, 0]', () => {
    const result = getCoinCombination(11);

    expect(result).toStrictEqual([1, 0, 1, 0]);
  });

  it('should be [2, 1, 1, 0]', () => {
    const result = getCoinCombination(17);

    expect(result).toStrictEqual([2, 1, 1, 0]);
  });

  it('should be [0, 1, 0, 2]', () => {
    const result = getCoinCombination(55);

    expect(result).toStrictEqual([0, 1, 0, 2]);
  });

  it('should be [0, 1, 0, 0]', () => {
    const result = getCoinCombination(5);

    expect(result).toStrictEqual([0, 1, 0, 0]);
  });

  it('should be [0, 0, 1, 0]', () => {
    const result = getCoinCombination(10);

    expect(result).toStrictEqual([0, 0, 1, 0]);
  });

  it('should be [0, 0, 0, 1]', () => {
    const result = getCoinCombination(25);

    expect(result).toStrictEqual([0, 0, 0, 1]);
  });

  it('should be [0, 1, 1, 0]', () => {
    const result = getCoinCombination(15);

    expect(result).toStrictEqual([0, 1, 1, 0]);
  });

  it('should return [3, 0, 1, 1] for 38 cents', () => {
    const result = getCoinCombination(38);

    expect(result).toEqual([3, 0, 1, 1]);
  });

  it('should be [0, 0, 0, 2]', () => {
    const result = getCoinCombination(50);

    expect(result).toStrictEqual([0, 0, 0, 2]);
  });

  it('should be [1, 1, 1, 4]', () => {
    const result = getCoinCombination(116);

    expect(result).toStrictEqual([1, 1, 1, 4]);
  });
});
