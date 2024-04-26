'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return penny`, () => {
    const result = getCoinCombination(1);

    expect(result)
      .toStrictEqual([1, 0, 0, 0]);
  });

  it(`should return nickel`, () => {
    const result = getCoinCombination(6);

    expect(result)
      .toStrictEqual([1, 1, 0, 0]);
  });

  it(`should return dimes`, () => {
    const result = getCoinCombination(17);

    expect(result)
      .toStrictEqual([2, 1, 1, 0]);
  });

  it(`should return quarters`, () => {
    const result = getCoinCombination(50);

    expect(result)
      .toStrictEqual([0, 0, 0, 2]);
  });

  it(`should return correct value for 0 input`, () => {
    const result = getCoinCombination(0);

    expect(result)
      .toStrictEqual([0, 0, 0, 0]);
  });
});
