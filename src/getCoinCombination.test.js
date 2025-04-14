"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return correct combination for 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return correct combination for 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return correct combination for 2`, () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it(`should return correct combination for 4`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`should return correct combination for 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return correct combination for 7`, () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it(`should return correct combination for 9`, () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it(`should return correct combination for 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return correct combination for 13`, () => {
    expect(getCoinCombination(13)).toEqual([3, 0, 1, 0]);
  });

  it(`should return correct combination for 15`, () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it(`should return correct combination for 16`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it(`should return correct combination for 20`, () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it(`should return correct combination for 24`, () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it(`should return correct combination for 25`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return correct combination for 26`, () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it(`should return correct combination for 30`, () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  it(`should return correct combination for 33`, () => {
    expect(getCoinCombination(33))
      .toEqual([3, 1, 0, 1]);
  });

  it(`should return correct combination for 35`, () => {
    expect(getCoinCombination(35))
      .toEqual([0, 0, 1, 1]);
  });

  it(`should return correct combination for 50`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return correct combination for 68`, () => {
    expect(getCoinCombination(68))
      .toEqual([3, 1, 1, 2]);
  });

  it(`should return correct combination for 99`, () => {
    expect(getCoinCombination(99))
      .toEqual([4, 0, 2, 3]);
  });
});
