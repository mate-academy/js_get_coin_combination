'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return no coins if cents = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 penny if cents = 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return 1 nickel if cents = 5`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return 1 dime if cents = 10`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return 1 quarter if cents = 25`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return all type of coins if cents = 41`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return penny and nickel if cents = 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return penny and dime if cents = 11`, () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it(`should return penny and quarter if cents = 26`, () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it(`should return nickel and dime if cents = 15`, () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it(`should return nickel and quarter if cents = 30`, () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  it(`should return dime and quarter if cents = 35`, () => {
    expect(getCoinCombination(35))
      .toEqual([0, 0, 1, 1]);
  });
});
