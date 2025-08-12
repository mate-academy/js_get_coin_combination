'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [0, 0, 0, 0] when cent is 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] when cent is 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] when cent is 5`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] when cent is 10`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] when cent is 25`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 1, 0, 0] when cent is 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] when cent is 17`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 2] when cent is 50`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return [3, 1, 0, 2] when cent is 58`, () => {
    expect(getCoinCombination(58))
      .toEqual([3, 1, 0, 2]);
  });

  it(`should return [4, 1, 1, 1] when cent is 44`, () => {
    expect(getCoinCombination(44))
      .toEqual([4, 1, 1, 1]);
  });
});
