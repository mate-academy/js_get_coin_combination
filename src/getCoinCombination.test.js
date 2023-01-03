'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`returns zero when cents are zero`, () => {
    const result = getCoinCombination(0);

    expect(result)
      .toEqual([0, 0, 0, 0]);
  });

  it(`returns one penni when cents are one`, () => {
    const result = getCoinCombination(1);

    expect(result)
      .toEqual([1, 0, 0, 0]);
  });

  it(`returns one penni and one nickel when cents are 6`, () => {
    const result = getCoinCombination(6);

    expect(result)
      .toEqual([1, 1, 0, 0]);
  });

  it(`returns one penni, one nickel and one dime when cents are 16`, () => {
    const result = getCoinCombination(16);

    expect(result)
      .toEqual([1, 1, 1, 0]);
  });

  it('returns one penni, one nickel, one dime'
    + ' and one quarter when cents are 41', () => {
    const result = getCoinCombination(41);

    expect(result)
      .toEqual([1, 1, 1, 1]);
  });

  it('returns one penni, one nickel, one dime'
    + ' and three quarter when cents are 91', () => {
    const result = getCoinCombination(91);

    expect(result)
      .toEqual([1, 1, 1, 3]);
  });

  it('returns two penni, one nickel, one dime'
    + ' when cents are 17', () => {
    const result = getCoinCombination(17);

    expect(result)
      .toEqual([2, 1, 1, 0]);
  });
});
