'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('minimum value', () => {
    const res = getCoinCombination(0);

    expect(res).toEqual([0, 0, 0, 0]);
  });

  it('only pennies', () => {
    const res = getCoinCombination(3);

    expect(res).toEqual([3, 0, 0, 0]);
  });

  it('only nickels', () => {
    const res = getCoinCombination(5);

    expect(res).toEqual([0, 1, 0, 0]);
  });

  it('only dimes', () => {
    const res = getCoinCombination(20);

    expect(res).toEqual([0, 0, 2, 0]);
  });

  it('only quarters', () => {
    const res = getCoinCombination(50);

    expect(res).toEqual([0, 0, 0, 2]);
  });

  it('combination with all types of coins', () => {
    const res = getCoinCombination(41);

    expect(res).toEqual([1, 1, 1, 1]);
  });

  it('handles large numbers correctly', () => {
    const res = getCoinCombination(1234);

    expect(res).toEqual([4, 1, 0, 49]);
  });

  it('ignores fractional cents', () => {
    const res = getCoinCombination(12.5);

    expect(res).toEqual(getCoinCombination(12));
  });
});
