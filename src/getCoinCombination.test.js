'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [0, 0, 0, 0] if 'cents' = 0`, () => {
    const actual = getCoinCombination(0);
    const expected = [0, 0, 0, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 0, 0, 0] if 'cents' = 1`, () => {
    const actual = getCoinCombination(1);
    const expected = [1, 0, 0, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [3, 0, 0, 0] if 'cents' = 3`, () => {
    const actual = getCoinCombination(3);
    const expected = [3, 0, 0, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [4, 0, 0, 0] if 'cents' = 4`, () => {
    const actual = getCoinCombination(4);
    const expected = [4, 0, 0, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [0, 1, 0, 0] if 'cents' = 5`, () => {
    const actual = getCoinCombination(5);
    const expected = [0, 1, 0, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 1, 0, 0] if 'cents' = 6`, () => {
    const actual = getCoinCombination(6);
    const expected = [1, 1, 0, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [2, 1, 0, 0] if 5 < 'cents' < 10`, () => {
    const actual = getCoinCombination(7);
    const expected = [2, 1, 0, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [4, 1, 0, 0] if 'cents' = 9`, () => {
    const actual = getCoinCombination(9);
    const expected = [4, 1, 0, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [0, 0, 1, 0] if 'cents' = 10`, () => {
    const actual = getCoinCombination(10);
    const expected = [0, 0, 1, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 0, 1, 0] if 'cents' = 11`, () => {
    const actual = getCoinCombination(11);
    const expected = [1, 0, 1, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [0, 1, 1, 0] if 10 < 'cents' < 25`, () => {
    const actual = getCoinCombination(15);
    const expected = [0, 1, 1, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 1, 2, 0] if 'cents' = 24`, () => {
    const actual = getCoinCombination(24);
    const expected = [4, 0, 2, 0];

    expect(actual).toEqual(expected);
  });

  it(`should return [0, 0, 0, 1] if'cents' = 25`, () => {
    const actual = getCoinCombination(25);
    const expected = [0, 0, 0, 1];

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 0, 0, 1] if'cents' = 26`, () => {
    const actual = getCoinCombination(26);
    const expected = [1, 0, 0, 1];

    expect(actual).toEqual(expected);
  });

  it(`should return [2, 1, 1, 2] if 'cents' = 67`, () => {
    const actual = getCoinCombination(67);
    const expected = [2, 1, 1, 2];

    expect(actual).toEqual(expected);
  });

  it(`should return [NaN, NaN, NaN, NaN] if'cents' is NaN`, () => {
    const actual = getCoinCombination(NaN);
    const expected = [NaN, NaN, NaN, NaN];

    expect(actual).toEqual(expected);
  });
});
