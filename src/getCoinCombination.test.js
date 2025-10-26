"use strict";
const { getCoinCombination } = require("./getCoinCombination");
describe("getCoinCombination", () => {
  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
    expect(getCoinCombination.name).toBe("getCoinCombination");
  });

  it(`'cents' === 101`, () => {
    const result = getCoinCombination(100);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0, 0, 4]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(100);
  });

  it(`'cents' === 101`, () => {
    const result = getCoinCombination(101);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([1, 0, 0, 4]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(101);
  });

  it(`'cents' === 99`, () => {
    const result = getCoinCombination(99);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([4, 0, 2, 3]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(99);
  });

  it(`'cents' === -1`, () => {
    const result = getCoinCombination(-1);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([4, 0, 2, -1]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(-1);
  });

  it(`'cents' === -5`, () => {
    const result = getCoinCombination(-5);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0, 2, -1]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(-5);
  });

  it(`'cents' === -10`, () => {
    const result = getCoinCombination(-10);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 1, 1, -1]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(-10);
  });

  it(`'cents' === -25`, () => {
    const result = getCoinCombination(-25);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0, 0, -1]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(-25);
  });

  it(`'cents' === -100`, () => {
    const result = getCoinCombination(-100);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0, 0, -4]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(-100);
  });

  it(`'cents' === 0`, () => {
    const result = getCoinCombination(0);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0, 0, 0]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(0);
  });

  it(`'cents' === 1`, () => {
    const result = getCoinCombination(1);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([1, 0, 0, 0]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(1);
  });

  it(`'cents' === 5`, () => {
    const result = getCoinCombination(5);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 1, 0, 0]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(5);
  });

  it(`'cents' === 10`, () => {
    const result = getCoinCombination(10);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0, 1, 0]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(10);
  });

  it(`'cents' === 25`, () => {
    const result = getCoinCombination(25);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0, 0, 1]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(25);
  });

  it(`'cents' === 41`, () => {
    const result = getCoinCombination(41);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([1, 1, 1, 1]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(41);
  });

  it(`'cents' is decimal`, () => {
    const result = getCoinCombination(41.5);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([1, 1, 1, 1]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
    expect(totalSum(result)).toBe(41);
  });

  it(`'cents' is NaN`, () => {
    const result = getCoinCombination(NaN);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([NaN, NaN, NaN, NaN]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(false);
    });
    expect(totalSum(result)).toBe(NaN);
  });
});

const testValues = [1, 5, 10, 25];
function totalSum(inputResult) {
  let sum = 0;

  for (let i = 0; i <= 3; i++) {
    sum += inputResult[i] * testValues[i];
  }
  return sum;
}
