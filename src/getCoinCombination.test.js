'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('cents = 0', () => {
    const actual = getCoinCombination(0);
    const expected = [0, 0, 0, 0];

    expect(actual).toEqual(expected);
  });

  it('0 < cents < 5', () => {
    const actual = getCoinCombination(3);
    const expected = [3, 0, 0, 0];

    expect(actual).toEqual(expected);
  });

  it('cents = 5', () => {
    const actual = getCoinCombination(5);
    const expected = [0, 1, 0, 0];

    expect(actual).toEqual(expected);
  });

  it('5 < cents < 10', () => {
    const actual = getCoinCombination(7);
    const expected = [2, 1, 0, 0];

    expect(actual).toEqual(expected);
  });

  it('cents = 10', () => {
    const actual = getCoinCombination(10);
    const expected = [0, 0, 1, 0];

    expect(actual).toEqual(expected);
  });

  it('10 < cents < 25', () => {
    const actual = getCoinCombination(15);
    const expected = [0, 1, 1, 0];

    expect(actual).toEqual(expected);
  });

  it('cents = 25', () => {
    const actual = getCoinCombination(25);
    const expected = [0, 0, 0, 1];

    expect(actual).toEqual(expected);
  });

  it('cents > 25', () => {
    const actual = getCoinCombination(67);
    const expected = [2, 1, 1, 2];

    expect(actual).toEqual(expected);
  });

  it('cents is NaN', () => {
    const actual = getCoinCombination(NaN);
    const expected = [NaN, NaN, NaN, NaN];

    expect(actual).toEqual(expected);
  });
});
