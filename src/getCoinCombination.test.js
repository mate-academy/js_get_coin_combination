'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = getCoinCombination(0);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should throw error if not number`, () => {
    expect(() => getCoinCombination('Ok')).toThrow();
  });

  it(`should not accept negative integer`, () => {
    expect(() => getCoinCombination(-7)).toThrow();
  });

  it(`return array all 0 coins if 0 cents pass`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`coins[3] equal to 'cents' / 25`, () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it(`coins[2] is equal currentAmount (after divide to 25)  / 10`, () => {
    const result = getCoinCombination(35);

    expect(result).toEqual([0, 0, 1, 1]);
  });

  it(
    `coins[1] is equal` + `currentAmount (after divide to 25 and 10)  / 5`,
    () => {
      const result = getCoinCombination(40);

      expect(result).toEqual([0, 1, 1, 1]);
    }
  );

  it(
    `coins[1] is equal` + `currentAmount (after divide to 25 and 10 and 5)`,
    () => {
      const result = getCoinCombination(41);

      expect(result).toEqual([1, 1, 1, 1]);
    }
  );
});
