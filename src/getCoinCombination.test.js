'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
});

describe('getCoinCombination', () => {
  test(`should return [1, 0, 0, 0] when cents equal to 1`, () => {
    expect(getCoinCombination(1)).toStrictEqual([1, 0, 0, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [1, 1, 0, 0] when cents equal to 6`, () => {
    expect(getCoinCombination(6)).toStrictEqual([1, 1, 0, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [2, 1, 1, 0] when cents equal to 17`, () => {
    expect(getCoinCombination(17)).toStrictEqual([2, 1, 1, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [0, 0, 0, 2] when cents equal to 50`, () => {
    expect(getCoinCombination(50)).toStrictEqual([0, 0, 0, 2]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [0, 1, 1, 2] when cents equal to 65`, () => {
    expect(getCoinCombination(65)).toStrictEqual([0, 1, 1, 2]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [3, 0, 1, 3] when cents equal to 88`, () => {
    expect(getCoinCombination(88)).toStrictEqual([3, 0, 1, 3]);
  });
});
