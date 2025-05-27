'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    const result = getCoinCombination;

    expect(result)
      .toBeInstanceOf(Function);
  });

  it(`should return an array `, () => {
    const result = getCoinCombination();

    expect(result)
      .toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] for the input 0`, () => {
    const result = getCoinCombination(0);

    expect(result)
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] for the input 1`, () => {
    const result = getCoinCombination(1);

    expect(result)
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] for the input 6`, () => {
    const result = getCoinCombination(6);

    expect(result)
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] for the input 17`, () => {
    const result = getCoinCombination(17);

    expect(result)
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 2] for the input 50`, () => {
    const result = getCoinCombination(50);

    expect(result)
      .toEqual([0, 0, 0, 2]);
  });
});
