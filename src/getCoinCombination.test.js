'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`if 1 cent is entered the function shoud return [1, 0, 0, 0]`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`if 4 cent is entered the function shoud return [4, 0, 0, 0]`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });
  
  it(`if 5 cent is entered the function shoud return [0, 1, 0, 0]`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`if 6 cent is entered the function shoud return [1, 1, 0, 0]`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`if 9 cent is entered the function shoud return [4, 1, 0, 0]`, () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it(`if 10 cent is entered the function shoud return [0, 0, 1, 0]`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`if 11 cent is entered the function shoud return [1, 0, 1, 0]`, () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it(`if 24 cent is entered the function shoud return [4, 0, 2, 0]`, () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it(`if 25 cent is entered the function shoud return [0, 0, 0, 1]`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`if 26 cent is entered the function shoud return [1, 0, 0, 1]`, () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

});
