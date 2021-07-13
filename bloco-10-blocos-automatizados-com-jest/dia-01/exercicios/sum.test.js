const sum = require('./sum.js')

describe('test sum function', () => {
  it('test if sum(4, 5) equals to 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('test if sum(0, 0) equals to 0', () => {
    expect(sum(0, 0)).toBe(0);
  });


  it('test if sum(4, "5") throws an error', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it('test if sum(4, "5") throws an message "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError(new Error("parameters must be numbers"));
  });
});