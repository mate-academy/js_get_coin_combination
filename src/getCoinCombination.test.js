'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('combination of coins for 1 cent', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('combination of coins for cent > 5', () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it('combination of coins for cent > 15', () => {
    const result = getCoinCombination(16);

    expect(result).toEqual([1, 1, 1, 0]);
  });

  it('combination of coins for cent >= 50', () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });

  it('combination of coins for zero cents', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('combination of coins for NaN value cents', () => {
    const result = getCoinCombination('a');

    expect(result).toEqual([NaN, NaN, NaN, NaN]);
  });

  it('combination of coins for number with decimal part', () => {
    const result = getCoinCombination(1.5);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('combination of coins if number of coins are omitted', () => {
    const result = getCoinCombination();

    expect(result).toEqual([NaN, NaN, NaN, NaN]);
  });

  it('combination of coins if extra coin is added', () => {
    const result = getCoinCombination(1, 6);

    expect(result).toEqual([1, 0, 0, 0]);
  });

});
