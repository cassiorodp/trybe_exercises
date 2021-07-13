const {encode, decode} = require('./encode-decode');

describe('test encode & decode functions', () => {
  it('tests if encode is a function', () => {
    expect(typeof encode).toBe('function');
  });

  it('tests if decode is a function', () => {
    expect(typeof decode).toBe('function');
  });

  it('test if encode "a, e, i, o, u" are converted to "1, 2, 3, 4, 5"', () => {
    expect(encode("a, e, i, o, u")).toEqual('1, 2, 3, 4, 5')
  })

  it('test if decode "1, 2, 3, 4, 5" are converted to "a, e, i, o, u"', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u')
  })
});