'use strict';

/* eslint-disable max-len */

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return an array filled with zeros when 0 cents are passed', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return an array with correct values when only 1 cent is passed', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should divide cents correctly when 6 cents are passed', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return only 1 dime for 10 cents passed', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return only 1 quarter for 25 cents passed', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return correct values for a big number of cents', () => {
    expect(getCoinCombination(97)).toEqual([2, 0, 2, 3]);
  });

  // I checked all the invalid params
  it('should throw error if the parameter passed is not a valid non-negative integer', () => {
    expect(() => getCoinCombination('sth')).toThrow(
      'Parameter must be a valid non-negative integer'
    );

    expect(() => getCoinCombination(-5)).toThrow(
      'Parameter must be a valid non-negative integer'
    );

    expect(() => {
      getCoinCombination('5');
    }).toThrow('Parameter must be a valid non-negative integer');
  });
});
