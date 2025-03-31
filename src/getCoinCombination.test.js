'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return zeros when cents are 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 cent when input is 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return 1 nickel and 1 cent when the input is 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return 1 cent, 1 nickel and dime`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it(`should return 1 cent, 1 nickel, 1 dime, 1 quater`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return 2 dimes`, () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it(`should return 2 quaters`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
