'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return 0 for 0 coins`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return 2 penny`, () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it(`should return 4 penny`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it(`should return 1 nikle`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return 1 nikle and 1 penny`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return 1 nikle and 4 penny`, () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it(`should return 1 dime`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return 1 dime, 1 nikle`, () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it(`should return 1 dime, 1 nikle and 4 penny`, () => {
    expect(getCoinCombination(19))
      .toEqual([4, 1, 1, 0]);
  });

  it(`should return 2 dime and 4 penny`, () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it(`should return 1 quarter`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return 1 nickle, 1 dime, 1 quarter`, () => {
    expect(getCoinCombination(40))
      .toEqual([0, 1, 1, 1]);
  });

  it(`should return 1 nickle, 1 quarter`, () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  it(`should return 1 penny, 1 nickle, 1 dime, 1 quarter`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return 2 quarter`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return 3 quarter`, () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });

  it(`should return 1 penny, 1 dime, 3 quarter`, () => {
    expect(getCoinCombination(86))
      .toEqual([1, 0, 1, 3]);
  });

  it(`should throw an error if number is negative`, () => {
    expect(() => {
      getCoinCombination(-5);
    })
      .toThrow(`Integer can't be negative`);
  });
});
