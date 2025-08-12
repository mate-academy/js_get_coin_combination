'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should have only pennies when it\'s lower than 5', () => {
    const result = getCoinCombination(4);

    expect(result).toEqual([4, 0, 0, 0]);
  });

  it('should have 1 nickel if the value is between 5 and till 10', () => {
    const result = getCoinCombination(7);

    expect(result).toEqual([2, 1, 0, 0]);
  });

  it('should have a dime if the value is between 10 and till 25', () => {
    const result = getCoinCombination(19);

    expect(result).toEqual([4, 1, 1, 0]);
  });

  it('should have a quarter if the value is 25 and higher', () => {
    const result = getCoinCombination(29);

    expect(result).toEqual([4, 0, 0, 1]);
  });
});
