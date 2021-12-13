'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should ruturn an array`, () => {
    expect(getCoinCombination(5))
      .toBeInstanceOf(Object);
  });

  it(`should return [0, 0, 0, 0] if the input in 'cents' is '0'`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] if the input in 'cents' is '1'`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] if the input in 'cents' is '6'`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] if the input in 'cents' is '17'`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 2] if the input in 'cents' is '50'`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return [1, 1, 0, 4938] if the input in 'cents' 
    is '123456'`, () => {
    expect(getCoinCombination(123456))
      .toEqual([1, 1, 0, 4938]);
  });
});
