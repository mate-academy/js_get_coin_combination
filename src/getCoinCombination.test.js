'use strict';

const { getCoinCombination } = require('./getCoinCombination.js');

describe(`test getCoinCombination function`, () => {
  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`'getCoinCombination' should return`
  + `error message with Negative number of cents`, () => {
    expect(() => getCoinCombination(-30)).toThrow();
  });

  it(`'getCoinCombination' should return`
  + `error message if cents = 0`, () => {
    expect(() => getCoinCombination(0)).toThrow();
  });

  it(`'getCoinCombination' should return`
  + `array of [0, 1, 0, 1] if cents = 30`, () => {
    const result = getCoinCombination(30);

    expect(result).toEqual([0, 1, 0, 1]);
  });

  it(`'getCoinCombination' should return`
  + `array of [1, 1, 0, 1] if cents = 31`, () => {
    const result = getCoinCombination(31);

    expect(result).toEqual([1, 1, 0, 1]);
  });

  it(`'getCoinCombination' should return`
  + `array of [1, 1, 1, 1] if cents = 41`, () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it(`'getCoinCombination' should return`
  + `array of [0, 0, 0, 4] if cents = 41`, () => {
    const result = getCoinCombination(100);

    expect(result).toEqual([0, 0, 0, 4]);
  });

  it(`'getCoinCombination' should return`
  + `error message if cents = NaN`, () => {
    expect(() => getCoinCombination(NaN)).toThrow();
  });

  it(`'getCoinCombination' should return`
  + `array of [0, 0, 0, 0] if cents = 0.4 (decimal part)`, () => {
    expect(getCoinCombination(0.4)).toEqual([0, 0, 0, 0]);
  });

  it(`'getCoinCombination' should return`
  + `error message if cents = infinity`, () => {
    expect(() => getCoinCombination(Infinity)).toThrow();
  });

  it(`'getCoinCombination' should return`
  + `error message if cents = undefined`, () => {
    expect(() => getCoinCombination(undefined)).toThrow();
  });
});
