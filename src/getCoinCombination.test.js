'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    const result = getCoinCombination(1);

    expect(result).toBeInstanceOf(Array);
  });

  it('4 cents = 1 coin', () => {
    const result = getCoinCombination(4);

    expect(result).toEqual([4, 0, 0, 0]);
  });

  it('9 cents = 2 coins', () => {
    const result = getCoinCombination(9);

    expect(result).toEqual([4, 1, 0, 0]);
  });

  it('19 cents = 3 coins', () => {
    const result = getCoinCombination(19);

    expect(result).toEqual([4, 1, 1, 0]);
  });

  it('44 cents = 4 coins', () => {
    const result = getCoinCombination(44);

    expect(result).toEqual([4, 1, 1, 1]);
  });

  it('25 cents = 1 quarteer', () => {
    const result = getCoinCombination(25);

    expect(result[3]).toEqual(1);
  });

  it('10 cents = 1 dime', () => {
    const result = getCoinCombination(10);

    expect(result[2]).toEqual(1);
  });

  it('5 cents = 1 nickel', () => {
    const result = getCoinCombination(5);

    expect(result[1]).toEqual(1);
  });

  it('1 cent = 1 penny', () => {
    const result = getCoinCombination(1);

    expect(result[0]).toEqual(1);
  });
});
