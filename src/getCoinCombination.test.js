'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
  
    it('should return the correct coin combination for 1 cent', () => {
      expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    });
   
  
    it('should return the correct coin combination for 10 cents', () => {
      expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    });
  
    it('should return the correct coin combination for 38 cents', () => {
      expect(getCoinCombination(38)).toEqual([3, 0, 1, 1]);
    });
  
    it('should return the correct coin combination for 100 cents', () => {
      expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
    });
  });
