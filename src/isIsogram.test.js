'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for "Machine"', () => {
    expect(isIsogram('Machine')).toBe(true);
  });

  it('should return true for "isogram"', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('should return false for "moOse"', () => {
    expect(isIsogram('moOse')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for "aba"', () => {
    expect(isIsogram('aba')).toBe(false);
  });

  it('should return false for "hello"', () => {
    expect(isIsogram('hello')).toBe(false);
  });

  it('should return true for "subdermatoglyphic"', () => {
    expect(isIsogram('subdermatoglyphic')).toBe(true);
  });

  it('should return true for single character "A"', () => {
    expect(isIsogram('A')).toBe(true);
  });

  it('should return false for "Alphabet"', () => {
    expect(isIsogram('Alphabet')).toBe(false);
  });
});
