'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return 'object'`, () => {
    expect(typeof getCoinCombination(1)).toBe('object');
  });

  it(`should return '1' pennie when '1' is entered`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return '1' pennie and '1' nickel when '6' is entered`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return '1' pennie, '1' nickel and '1' dime when '16' is entered`
    , () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return '2' quarters when '50' is entered`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return 0 coins when '0' is entered`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return array with NaN values when 'NaN' is entered`, () => {
    expect(getCoinCombination('a')).toEqual([NaN, NaN, NaN, NaN]);
  });

  it(`should return '1' pennie when '1.5' is entered`, () => {
    expect(getCoinCombination(1.5)).toEqual([1, 0, 0, 0]);
  });

  it(`should return array with NaN values when the value of cent are omitted`, () => {
    expect(getCoinCombination()).toEqual([NaN, NaN, NaN, NaN]);
  });

  it(`should return '1' pennie when '1' and extra '6' are entered`, () => {
    expect(getCoinCombination(1, 6)).toEqual([1, 0, 0, 0]);
  });
});
