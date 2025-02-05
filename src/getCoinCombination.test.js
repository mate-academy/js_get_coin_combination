'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return 1 nikel if we have 5 cents', () => {
    const cents = getCoinCombination(5);

    expect(cents).toEqual([0, 1, 0, 0]);
  });

  it('should return 1 daim if we have 10 cents', () => {
    const cents = getCoinCombination(10);

    expect(cents).toEqual([0, 0, 1, 0]);
  });

  it('should return 0 penny if we have 0 cent', () => {
    const cents = getCoinCombination(0);

    expect(cents).toEqual([0, 0, 0, 0]);
  });

  it('should return 1 quater if we have 25 cents', () => {
    const cents = getCoinCombination(25);

    expect(cents).toEqual([0, 0, 0, 1]);
  });
});
