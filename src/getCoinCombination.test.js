'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`zero coins shoud return array with zero values`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`one coins shoud return one penny`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`five coins shoud return one nickel `, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`seven coins shoud return two penny and one nickel `, () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it(`teen coins shoud return one dime`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`seventy five coins shoud return three quarters`, () => {
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });

  it(`nineteen coins shoud return
    four penny, one nickel and one dime `, () => {
    expect(getCoinCombination(19)).toEqual([4, 1, 1, 0]);
  });

  it(`forty-four coins shoud return four penny,
    one nickel, one dime and one quarters`, () => {
    expect(getCoinCombination(44)).toEqual([4, 1, 1, 1]);
  });

  it(`twenty-six coins shoud return
    one penny and one quarters`, () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it(`twenty-two coins shoud return
    two penny and two dime`, () => {
    expect(getCoinCombination(22)).toEqual([2, 0, 2, 0]);
  });
});
