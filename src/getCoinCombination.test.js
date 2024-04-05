'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
});

describe('getCoinCombination', () => {
  test(`should return [0, 0, 0, 0] when cents equal to 0`, () => {
    expect(getCoinCombination(0)).toStrictEqual([0, 0, 0, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [1, 0, 0, 0] when cents equal to 1`, () => {
    expect(getCoinCombination(1)).toStrictEqual([1, 0, 0, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [2, 0, 0, 0] when cents equal to 2`, () => {
    expect(getCoinCombination(2)).toStrictEqual([2, 0, 0, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [4, 0, 0, 0] when cents equal to 4`, () => {
    expect(getCoinCombination(4)).toStrictEqual([4, 0, 0, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [0, 1, 0, 0] when cents equal to 5`, () => {
    expect(getCoinCombination(5)).toStrictEqual([0, 1, 0, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [1, 1, 0, 0] when cents equal to 6`, () => {
    expect(getCoinCombination(6)).toStrictEqual([1, 1, 0, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [4, 1, 0, 0] when cents equal to 9`, () => {
    expect(getCoinCombination(9)).toStrictEqual([4, 1, 0, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [0, 0, 1, 0] when cents equal to 10`, () => {
    expect(getCoinCombination(10)).toStrictEqual([0, 0, 1, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [1, 0, 1, 0] when cents equal to 11`, () => {
    expect(getCoinCombination(11)).toStrictEqual([1, 0, 1, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [4, 0, 2, 0] when cents equal to 24`, () => {
    expect(getCoinCombination(24)).toStrictEqual([4, 0, 2, 0]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [0, 0, 0, 1] when cents equal to 25`, () => {
    expect(getCoinCombination(25)).toStrictEqual([0, 0, 0, 1]);
  });
});

describe('getCoinCombination', () => {
  test(`should return [1, 0, 0, 1] when cents equal to 26`, () => {
    expect(getCoinCombination(26)).toStrictEqual([1, 0, 0, 1]);
  });
});