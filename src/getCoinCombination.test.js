"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it("should be declared", () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  test("0c: [0,0,0,0]", () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test("1c: [1,0,0,0] (1p)", () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test("2c: [2,0,0,0] (2p)", () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  test("3c: [3,0,0,0] (3p)", () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  test("4c: [4,0,0,0] (4p)", () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  test("5c: [0,1,0,0] (1n)", () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test("6c: [1,1,0,0] (1p+1n)", () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test("9c: [4,1,0,0] (4p+1n)", () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  test("10c: [0,0,1,0] (1d)", () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test("17c: [2,1,1,0] (2p+1n+1d)", () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test("24c: [4,0,2,0] (4p+2d)", () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  test("25c: [0,0,0,1] (1q)", () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test("41c: [1,1,1,1] (1p+1n+1d+1q)", () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  test("50c: [0,0,0,2] (2q)", () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test("99c: [4,0,2,3] (3q+2d+4p)", () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  test("123c: [3,0,2,4] (4q+2d+3p)", () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });

  test("137c: [2,0,1,5] (5q+1d+2p)", () => {
    expect(getCoinCombination(137)).toEqual([2, 0, 1, 5]);
  });
});
