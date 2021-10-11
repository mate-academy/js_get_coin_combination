'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombo = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombo)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof (getCoinCombo())).toEqual('object');
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombo(0)).toEqual([0, 0, 0, 0]);
  });

  // write more tests here
  it(`should return Ok for amount = MAX_SAFE_INTEGER`, () => {
    const bigIntCoin = 360287970189639;
    const bigI = Number.MAX_SAFE_INTEGER;

    expect(getCoinCombo(bigI)).toEqual([1, 1, 1, bigIntCoin]);
  });
});
