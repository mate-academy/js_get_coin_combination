'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('return 1 penny for 1 cents', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('return 1 nickel for 5 cents', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('return 1 dime for 10 cents', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('return 1 quarter for 25 cents', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`return '[1, 1, 1, 4]' for 116 cents`, () => {
    expect(getCoinCombination(116))
      .toEqual([1, 1, 1, 4]);
  });

  it('return zeros for zero', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });
});
