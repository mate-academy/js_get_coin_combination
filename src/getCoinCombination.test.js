'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`0  cents`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`1 cent: only penny field`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`6 cents: penny and nickel field`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`11 cents: penny and dime field`, () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it(`16 cents: penny, nickel and dime field`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it(`45 cents: dime and quarter field`, () => {
    expect(getCoinCombination(45))
      .toEqual([0, 0, 2, 1]);
  });

  it(`50 cents: only quarter field`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`Infinity`, () => {
    expect(getCoinCombination(Infinity))
      .toEqual([NaN, NaN, NaN, Infinity]);
  });

  it(`2.5 cents: with decimal part`, () => {
    expect(getCoinCombination(2.5))
      .toEqual([2, 0, 0, 0]);
  });
});
