const searchEmployee = require('./bonus-task')

describe('Test searchEmployee function', () => {
  it('searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function')
  })

  it('searchEmployee finds an employee and show his firstName', () => {
    const actual = searchEmployee('8579-6', 'firstName')
    const expected = 'Ana'

    expect(actual).toBe(expected)
  })

  it('shows an error if id is not found', () => {
    expect(() => searchEmployee('0000-6', 'firstName')).toThrowError(new Error('Not identified ID'))
  })

  it('shows an error if detail is not found', () => {
    expect(() => searchEmployee('8579-6', 'games')).toThrowError(new Error('Info not available'))
  })
})