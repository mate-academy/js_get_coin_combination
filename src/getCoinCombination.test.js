'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof (getCoinCombination())).toEqual('object');
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  // write more tests here
  it(`should return Ok for big amount > 32768`, () => {
    const bigI = 360287;

    // const bigI = Number.MAX_SAFE_INTEGER;
    expect(getCoinCombination(bigI)).toEqual([2, 0, 1, 14411]);
  });
});
