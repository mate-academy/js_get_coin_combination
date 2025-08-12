'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return '1' pennie when '1' is entered`, () => {
    expect(getCoinCombination(1)).toStrictEqual([1, 0, 0, 0]);
  });

  it(`should return the values 2, 1, 0, 0 when the input value is 7`, () => {
    expect(getCoinCombination(7)).toStrictEqual([2, 1, 0, 0]);
  });

  it(`should return the values 4, 1, 1, 0 when the input value is 19`, () => {
    expect(getCoinCombination(19)).toStrictEqual([4, 1, 1, 0]);
  });

  it(`should return the values 0, 0, 0, 1 when the input value is 25`, () => {
    expect(getCoinCombination(25)).toStrictEqual([0, 0, 0, 1]);
  });

  it(`should return the values 1, 1, 1, 1 when the input value is 41`, () => {
    expect(getCoinCombination(41)).toStrictEqual([1, 1, 1, 1]);
  });

  it(`should return the values 0, 0, 0, 0 when the input value is 0`, () => {
    expect(getCoinCombination(0)).toStrictEqual([0, 0, 0, 0]);
  });
});
