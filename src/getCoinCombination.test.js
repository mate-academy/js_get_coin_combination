'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] when cents = 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should operate on 4 places in array', () => {
    expect(getCoinCombination(172242)).toEqual([2, 1, 1, 6889]);
  });

  it('should return 0 when 0 < cent < 1', () => {
    expect(getCoinCombination(1/3)).toEqual([0, 0, 0, 0]);
  });

it('should return smallest possible amount of coins', () => {
  expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
});

});
