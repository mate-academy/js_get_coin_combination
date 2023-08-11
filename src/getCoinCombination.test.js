'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  test(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('returns zero values for the input 0 cents', () => {
    const expected = [0, 0, 0, 0];
    const actual = getCoinCombination(0);

    expect(actual).toEqual(expected);
  });

  test('should return the correct coin combination for 25 cents', () => {
    const expected = [0, 0, 0, 1];
    const actual = getCoinCombination(25);

    expect(actual).toEqual(expected);
  });

  test('should return the correct coin combination for 1 cent', () => {
    const expected = [1, 0, 0, 0];
    const actual = getCoinCombination(1);

    expect(actual).toEqual(expected);
  });

  test('should return the correct coin combination for 100 cent', () => {
    const expected = [0, 0, 0, 4];
    const actual = getCoinCombination(100);

    expect(actual).toEqual(expected);
  });

  test('should return the correct coin combination for 99 cent', () => {
    const expected = [4, 0, 2, 3];
    const actual = getCoinCombination(99);

    expect(actual).toEqual(expected);
  });

  test('should return the correct coin combination for 10 cent', () => {
    const expected = [0, 0, 1, 0];
    const actual = getCoinCombination(10);

    expect(actual).toEqual(expected);
  });

  test('should return the correct coin combination for 5 cent', () => {
    const expected = [0, 1, 0, 0];
    const actual = getCoinCombination(5);

    expect(actual).toEqual(expected);
  });

  test('return correct coin combination for large amount', () => {
    const expected = [0, 0, 0, 1600];
    const actual = getCoinCombination(40000);

    expect(actual).toEqual(expected);
  });

  test('return the correct coin combination for large random amount', () => {
    const expected = [4, 0, 2, 2634];
    const actual = getCoinCombination(65874);

    expect(actual).toEqual(expected);
  });
});
