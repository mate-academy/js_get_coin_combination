'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should only return 'pennies' if 'cents' < 5`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`should only return 'nickels' if 'cents' === 5`, () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it(`should return 'pennies' + 'nickels' if 5 < 'cents' < 10`, () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it(`should only return 'dimes' if 'cents' equal 10 or 20`, () => {
    const result1 = getCoinCombination(10);
    const result2 = getCoinCombination(20);

    expect(result1).toEqual([0, 0, 1, 0]);
    expect(result2).toEqual([0, 0, 2, 0]);
  });

  it(`should return 'pennies' + 'nickels' + 'dimes' if 10 < 'cents' < 25`, () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it(`should only return 'quarters' if 'cents' is a multiple of 25`, () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });
});
