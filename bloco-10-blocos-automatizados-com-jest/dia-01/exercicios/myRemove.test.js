const myRemove = require('./myRemove.js')

describe('test myRemove function', () => {
  it('test if myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  it('test if myRemove([1, 2, 3, 4], 3) not returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  it('test if myRemove([1, 2, 3, 4], 5) returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})