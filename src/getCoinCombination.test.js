'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return 0 if number of cents is 0`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`should correct combination if number of cents is less than 5`, () => {
    const result = getCoinCombination(4);

    expect(result).toEqual([4, 0, 0, 0]);
  });

  it(`should correct combination if number of cents is less than 10`, () => {
    const result = getCoinCombination(9);

    expect(result).toEqual([4, 1, 0, 0]);
  });

  it(`should correct combination if number of cents is less than 25`, () => {
    const result = getCoinCombination(24);

    expect(result).toEqual([4, 0, 2, 0]);
  });

  it(`should correct combination if number of cents above 25`, () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });
});
