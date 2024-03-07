'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('input = 0 returns [0, 0, 0, 0]', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('input = 1 returns 1 penny', () => {
    const result = getCoinCombination(1);

    expect(result[0]).toEqual(1);
  });

  it('input = 6 returns 1 penny and 1 nickel', () => {
    const result = getCoinCombination(6);

    expect(result[0]).toEqual(1);
    expect(result[1]).toEqual(1);
  });

  it('input = 16 returns 1 penny, 1 nickel and 1 dime', () => {
    const result = getCoinCombination(16);

    expect(result[0]).toEqual(1);
    expect(result[1]).toEqual(1);
    expect(result[2]).toEqual(1);
  });

  it('input = 41 returns 1 penny, 1 nickel, 1 dime and 1 quarter', () => {
    const result = getCoinCombination(41);

    expect(result[0]).toEqual(1);
    expect(result[1]).toEqual(1);
    expect(result[2]).toEqual(1);
    expect(result[3]).toEqual(1);
  });

  it('input = 50 returns 2 quarters', () => {
    const result = getCoinCombination(50);

    expect(result[3]).toEqual(2);
  });
});
