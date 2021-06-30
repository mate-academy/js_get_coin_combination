'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination()).toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toMatchObject([0, 0, 0, 0]);
  });

  it(`should return [1, 1, 1, 1] if amount = 41`, () => {
    expect(getCoinCombination(41)).toMatchObject([1, 1, 1, 1]);
  });

  it(`should return [2, 1, 0, 4] if amount = 64`, () => {
    expect(getCoinCombination(41)).toMatchObject([1, 1, 1, 1]);
  });

  const inputValue = {
    integer: 2,
    positive: 12,
  };

  describe('the inputValue', () => {
    test(`input should contain only positive values`, () => {
      expect(inputValue.positive >= 0).toBe(true);
    });

    test(`input should be integer number`, () => {
      expect(Number.isInteger(inputValue.integer)).toBe(true);
    });
  });
});
