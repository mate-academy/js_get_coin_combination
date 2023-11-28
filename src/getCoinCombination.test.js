'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return an array if input is 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([
        1, 0, 0, 0,
      ]);
  });

  test(`should return an array if input is 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([
        1, 1, 0, 0,
      ]);
  });

  test(`should return an array if input is 17`, () => {
    expect(getCoinCombination(17))
      .toEqual([
        2, 1, 1, 0,
      ]);
  });

  test(`should return an array if input is 50`, () => {
    expect(getCoinCombination(50))
      .toEqual([
        0, 0, 0, 2,
      ]);
  });

  test(`should return an array of NaN is special symbol @`, () => {
    expect(getCoinCombination('@'))
      .toEqual([
        NaN, NaN, NaN, NaN,
      ]);
  });

  test(`should return an array of NaN input is letter`, () => {
    expect(getCoinCombination('K'))
      .toEqual([
        NaN, NaN, NaN, NaN,
      ]);
    });

  test(`should return an array  input is negative -50`, () => {
        expect(getCoinCombination(-50))
          .toBe('input must be a positive number');


});});
