'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should be an array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it(`should return only peny with argument < 5`, () => {
    expect(getCoinCombination(4))
      .toStrictEqual([4, 0, 0, 0]);
  });

  it(`should return only nickel with argument === 5`, () => {
    expect(getCoinCombination(5))
      .toStrictEqual([0, 1, 0, 0]);
  });


  it(`should return only dume with argument === 10`, () => {
    expect(getCoinCombination(10))
      .toStrictEqual([0, 0, 1, 0]);
  });

  it(`should return only chetvertak with argument === 25`, () => {
    expect(getCoinCombination(25))
      .toStrictEqual([0, 0, 0, 1]);
  });

  it(`should return array of 1 with argument === 41`, () => {
    expect(getCoinCombination(41))
      .toStrictEqual([1, 1, 1, 1]);
  });

  it(`should return array of 0 with argument === 0`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });
  
  it(`should return penny with value not multiples of 5`, () => {
    expect(getCoinCombination(176))
      .toStrictEqual([1, 0, 0, 7]);
  });
});
