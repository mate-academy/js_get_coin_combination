'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should  return [1, 1, 1, 2]` + `if 'cents' = 66`, () => {
    expect(getCoinCombination(66)).toEqual([1, 1, 1, 2]);
  });

  it(`should  return [1, 1, 1, 1]` + `if 'cents' = 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should  return [0, 0, 0, 5]` + `if 'cents' = 125`, () => {
    expect(getCoinCombination(125)).toEqual([0, 0, 0, 5]);
  });

  it(`should  return [0, 0, 0, 0]` + `if 'cents' = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should  return [1, 0, 0, 0]` + `if 'cents' = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should  return [4, 0, 2, 39]` + `if 'cents' = 999`, () => {
    expect(getCoinCombination(999)).toEqual([4, 0, 2, 39]);
  });
});
