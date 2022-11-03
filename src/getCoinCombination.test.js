'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('is declared and return array with length 4', () => {
  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return array', function() {
    const result = getCoinCombination(100);

    expect(result).toBeInstanceOf(Array);
  });

  it('should return array with length 4', function() {
    const result = getCoinCombination(100);

    expect(result).toHaveLength(4);
  });
});

describe('return minimum count of coins for each denomination', () => {
  it('should return zero coins if cents === 0', function() {
    const result = getCoinCombination(0);

    expect(result).toStrictEqual([0, 0, 0, 0]);
  });

  it('should return one pennie if cents === 1', function() {
    const result = getCoinCombination(1);

    expect(result).toStrictEqual([1, 0, 0, 0]);
  });

  it('should return one nickel if cents === 5', function() {
    const result = getCoinCombination(5);

    expect(result).toStrictEqual([0, 1, 0, 0]);
  });

  it('should return one dime if cents === 10', function() {
    const result = getCoinCombination(10);

    expect(result).toStrictEqual([0, 0, 1, 0]);
  });

  it('should return one quarter if cents === 25', function() {
    const result = getCoinCombination(25);

    expect(result).toStrictEqual([0, 0, 0, 1]);
  });
});

describe('work correctly with coins combination', () => {
  it('should return 3 pennies if cents === 3', function() {
    const result = getCoinCombination(3);

    expect(result).toStrictEqual([3, 0, 0, 0]);
  });

  it('should return 1 nickel and 1 dime if cents === 15', function() {
    const result = getCoinCombination(15);

    expect(result).toStrictEqual([0, 1, 1, 0]);
  });

  it('should return 2 pennies and 1 quarter if cents === 27', function() {
    const result = getCoinCombination(27);

    expect(result).toStrictEqual([2, 0, 0, 1]);
  });

  it('should return 1 pennie, 1 nickel, 1 dime and 1 quarter'
    + 'if cents === 41', function() {
    const result = getCoinCombination(41);

    expect(result).toStrictEqual([1, 1, 1, 1]);
  });

  it('should return 2 pennies, 2 dimes and 5 quarters'
    + 'if cents === 148', function() {
    const result = getCoinCombination(148);

    expect(result).toStrictEqual([3, 0, 2, 5]);
  });
});
