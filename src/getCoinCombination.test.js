'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = getCoinCombination(10);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] if amount = 1`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] if amount = 5`, () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] if amount = 10`, () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] if amount = 25`, () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 1, 1, 1] if amount = 41`, () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });
});
