'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return zero coins if 'cents' = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return number of pennies`
  + `if 'cents' >= 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return numbers of pennies and nickels`
  + `if 'cents' >= 5`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return numbers of pennies, nickels and dimes`
  + `if 'coins' >= 10`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it(`should return numbers of pennies, nickels, dimes and quarters`
  + `if 'coins' >= 25`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it('should return NaN for NaN values', () => {
    expect(getCoinCombination('string'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });
});
