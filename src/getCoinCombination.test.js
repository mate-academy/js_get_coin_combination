describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('Should return array with zeros if "cents" = 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0,0,0,0])
  })

  it('Should return 1 penny, if cents = 1', () => {
    expect(getCoinCombination(1))
      .toEqual([1,0,0,0])
  })

  it('Should return 1 nikel, if cents = 5', () => {
    expect(getCoinCombination(5))
      .toEqual([0,1,0,0])
  })

  it('Should return 1 dime, if cents = 5', () => {
    expect(getCoinCombination(10))
      .toEqual([0,0,1,0])
  })

  it('Should return 1 quarter, if cents = 25', () => {
    expect(getCoinCombination(25))
      .toEqual([0,0,0,1])
  })

  it('Should return 1 penny and 1 nikel, if cents = 6', () => {
    expect(getCoinCombination(6))
      .toEqual([1,1,0,0])
  })

  it('Should return 1 penny and 1 nikel and 1 dime, if cents = 16', () => {
    expect(getCoinCombination(16))
      .toEqual([1,1,1,0])
  })

  it(`Should return 1 penny and 1 nikel and 1 dime and 1 quarter,
   if cents = 41`, () => {
    expect(getCoinCombination(41))
      .toEqual([1,1,1,1])
  })
 
   it('Should return 1 penny and 3 quarters, if cents = 76', () => {
    expect(getCoinCombination(76))
      .toEqual([1,0,0,3])
   })

   it('Should return 1 nikel and 1 quarter, if cents = 76', () => {
    expect(getCoinCombination(30))
      .toEqual([0,1,0,1])
   })

   it('Should return 3 pennies and 1 nikel and 1 dime and 1 quarter, if cents = 76', () => {
    expect(getCoinCombination(43))
      .toEqual([3,1,1,1])
   })

});
