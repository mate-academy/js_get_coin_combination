'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return 1 penny for 1 cent `, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });
   it(`should return 1 penny and 1 nickel for 6 cent `, () => {
    const result = getCoinCombination(6);

     expect(result).toEqual([1, 1, 0, 0]);
   });
  it(`should return 2 pennies, 1 nickel and 1 dime for 17 cent `, () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
   });
   it(`should return 2 quarters for 50 cent `, () => {
    const result = getCoinCombination(50);

     expect(result).toEqual([0, 0, 0, 2]);
  });
});
