'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('for 1 cent [1, 0, 0, 0]', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('for 6 cents [1, 1, 0, 0]', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it('for 17 cents [2, 1, 1, 0]', () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it('for 50 cents [0, 0, 0, 2]', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it('for 0 cents [0, 0, 0, 0]', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('for 4 cents [4, 0, 0, 0]', () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('for 5 cents [0, 1, 0, 0]', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('for 9 cents [4, 1, 0, 0]', () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it('for 10 cents [0, 0, 1, 0]', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('for 11 cents [1, 0, 1, 0]', () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it('for 24 cents [4, 0, 2, 0]', () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it('for 25 cents [0, 0, 0, 1]', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it('for 26 cents [1, 0, 0, 1]', () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });
});
