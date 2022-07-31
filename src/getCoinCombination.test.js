'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('zeros array if there is no argument', () => {
    const result = getCoinCombination();

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('zeros array if there is negative argument', () => {
    const result = getCoinCombination(-1);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('1 penny', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('1 nickel', () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it('1 dime', () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it('1 quarter', () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it('1 dime, 1 nickel, 3 pennies', () => {
    const result = getCoinCombination(18);

    expect(result).toEqual([3, 1, 1, 0]);
  });

  it('2 quarter, 1 dime, 1 nickel, 2 pennies', () => {
    const result = getCoinCombination(67);

    expect(result).toEqual([2, 1, 1, 2]);
  });
});
