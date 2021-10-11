'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(50)).toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] if amount = 1 as pennie`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] if amount = 5 as nickle`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] if amount = 10 as dime`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] if amount = 25 as quarter`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return [2, 0, 0, 0] if amount = 2 as pennie + pennie`, () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] if amount = 6 as pennie + nickel`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [1, 0, 1, 0] if amount = 11 as pennie + dime`, () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it(`should return [1, 0, 0, 1] if amount = 26 as pennie + quarter`, () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it(`should return [0, 1, 1, 0] if amount = 15 as nickle + dime`, () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it(`should return [0, 1, 0, 1] if amount = 30 as nickle + dime`, () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it(`should return [0, 0, 2, 0] if amount = 20 as dime + dime`, () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  it(`should return [0, 0, 1, 1] if amount = 35 as dime + quarter`, () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });

  it(`should return [0, 0, 0, 2] if amount = 50 as dime + quarter`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
