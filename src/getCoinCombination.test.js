'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return the correct coin combination for 1 cent', () => {
    const result = getCoinCombination(1);

    expect(result).toStrictEqual([1, 0, 0, 0]);
  });

  it('should return the correct coin combination for 5 cents', () => {
    const result = getCoinCombination(5);

    expect(result).toStrictEqual([0, 1, 0, 0]);
  });

  it('should return the correct coin combination for 10 cents', () => {
    const result = getCoinCombination(10);

    expect(result).toStrictEqual([0, 0, 1, 0]);
  });

  it('should return the correct coin combination for 25 cents', () => {
    const result = getCoinCombination(25);

    expect(result).toStrictEqual([0, 0, 0, 1]);
  });

  it('should return the correct coin combination for 99 cents', () => {
    const result = getCoinCombination(99);

    expect(result).toStrictEqual([4, 0, 2, 3]);
  });

  it('should return the correct coin combination for 0 cents', () => {
    const result = getCoinCombination(0);

    expect(result).toStrictEqual([0, 0, 0, 0]);
  });
});
