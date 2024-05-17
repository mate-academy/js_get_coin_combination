'use strict';

describe(`getCoinCombination`, () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array in result`, () => {
    expect(getCoinCombination(1)).toBeInstanceOf(Array);
  });

  it(`should return 4 parts array in result`, () => {
    expect(getCoinCombination(1).length).toBe(4);
  });

  it(`shouldn't return any coins when '0' was passed`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return '1' penny when '1' was passed`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return '4' pennies when '4' was passed`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`should return '1' penny and '1' nickel when '6' was passed`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return '1' dime when '10' was passed`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return '2' pennies, '1' nickel `
  + `and '1' dime when '17' was passed`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return '1' quarter when '25' was passed`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return '1' penny, '1' nickel, '1' dime `
  + `and '1' quarter when '41' was passed`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return '1' penny, '1' dime `
  + `and '1' quarter when '72' was passed`, () => {
    expect(getCoinCombination(72)).toEqual([2, 0, 2, 2]);
  });

  it(`should return '3' quarters when '75' was passed`, () => {
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });

  it(`should return '4' pennies and '4' quarters when '104' was passed`, () => {
    expect(getCoinCombination(104)).toEqual([4, 0, 0, 4]);
  });
});
