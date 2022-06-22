'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return an array with pennies`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);//
  });
  
  test(`should return an array with pennies + nickels`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });
  
  test(`should return an array with pennies + nickels + dimes`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });
  
  test(`should return an array with pennies + nickels + dimes + quarters`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});



