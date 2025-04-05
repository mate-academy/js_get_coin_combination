'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [0,0,0,0] if input is 0`, () => {
    const result = getCoinCombination(0);

    expect(result)
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return [1,0,0,0] if input is 1`, () => {
    const result = getCoinCombination(1);

    expect(result)
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [4,0,0,0] if input is 4`, () => {
    const result = getCoinCombination(4);

    expect(result)
      .toEqual([4, 0, 0, 0]);
  });

  it(`should return [0,1,0,0] if input is 5`, () => {
    const result = getCoinCombination(5);

    expect(result)
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return [1,1,0,0] if input is 6`, () => {
    const result = getCoinCombination(6);

    expect(result)
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [4,1,0,0] if input is 9`, () => {
    const result = getCoinCombination(9);

    expect(result)
      .toEqual([4, 1, 0, 0]);
  });

  it(`should return [0,0,1,0] if input is 10`, () => {
    const result = getCoinCombination(10);

    expect(result)
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return [1,0,1,0] if input is 11`, () => {
    const result = getCoinCombination(11);

    expect(result)
      .toEqual([1, 0, 1, 0]);
  });

  it(`should return [1,1,1,0] if input is 16`, () => {
    const result = getCoinCombination(16);

    expect(result)
      .toEqual([1, 1, 1, 0]);
  });

  it(`should return [4,0,2,0] if input is 24`, () => {
    const result = getCoinCombination(24);

    expect(result)
      .toEqual([4, 0, 2, 0]);
  });

  it(`should return [0,0,0,1] if input is 25`, () => {
    const result = getCoinCombination(25);

    expect(result)
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return [1,0,0,1] if input is 26`, () => {
    const result = getCoinCombination(26);

    expect(result)
      .toEqual([1, 0, 0, 1]);
  });

  it(`should return [1,1,0,1] if input is 31`, () => {
    const result = getCoinCombination(31);

    expect(result)
      .toEqual([1, 1, 0, 1]);
  });

  it(`should return [1,1,1,1] if input is 41`, () => {
    const result = getCoinCombination(41);

    expect(result)
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return [2,1,1,2] if input is 67`, () => {
    const result = getCoinCombination(67);

    expect(result)
      .toEqual([2, 1, 1, 2]);
  });
});
