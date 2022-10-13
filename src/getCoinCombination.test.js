'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return array only with pennies when cents < 5', () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('should return array only with nickels when cents === 5', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return array only with pennies and nickels`
    + `when cents < 10 and >= 5`, () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it(`should return array only with dimes`
  + `when cents are multiple of 10 and < 25`, () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it(`should calculate pennies, nickels and dimes`
    + `when cents > 10 and < 25`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return array only with quarters`
    + `when cents are multiple of 25`, () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });

  it('should calculate all coins when cents > 25', () => {
    expect(getCoinCombination(40))
      .toEqual([0, 1, 1, 1]);
  });
});
