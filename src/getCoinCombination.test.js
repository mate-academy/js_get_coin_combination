'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return zeros if '0' entered`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return '1' penny if '1' entered`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return '4' penny if '4' entered`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`should return '1' nickel if '5' entered`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return '1' nickel and '1' penny if '6' entered`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return '1' dime if '10' entered`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return '1' dime and '1' nickel if '15' entered`, () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it(`should return '1' dime, '1' nickel, '3' penny if '18' entered`, () => {
    expect(getCoinCombination(18)).toEqual([3, 1, 1, 0]);
  });

  it(`should return '1' quater if '25' entered`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return '2' quater, '1' dime, '1' nickel`
  + ` and '4' penny if '69' entered`, () => {
    expect(getCoinCombination(69)).toEqual([4, 1, 1, 2]);
  });
});
