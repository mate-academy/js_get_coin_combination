'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`Should return an array`, () => {
    expect(getCoinCombination(5))
      .toBeInstanceOf(Array);
  });

  it(`Should return array of 0 with '0' input`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`Should return array of NaN with no parametrs given`, () => {
    expect(getCoinCombination())
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it(`must return apropriete number of pennies `, () => {
    expect(getCoinCombination(68)[0])
      .toBe(3);
  });

  it(`must return apropriete number of nickels `, () => {
    expect(getCoinCombination(68)[1])
      .toBe(1);
  });

  it(`must return apropriete number of dimes `, () => {
    expect(getCoinCombination(68)[2])
      .toBe(1);
  });

  it(`must return apropriete number of quarters `, () => {
    expect(getCoinCombination(68)[3])
      .toBe(2);
  });
});
