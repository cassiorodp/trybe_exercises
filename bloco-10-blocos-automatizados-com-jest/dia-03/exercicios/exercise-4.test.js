const functions = require('./exercise-4')

jest.mock('./exercise-4')

describe('Mocking functions', () => {
  test('New implementation for upperCase function', () => {
    functions.upperCase.mockImplementation((string) => string.toLowerCase())

    expect(functions.upperCase('HI')).toBe('hi');
    expect(functions.upperCase).toHaveBeenCalled();
    expect(functions.upperCase).toHaveBeenCalledTimes(1);
    expect(functions.upperCase).toHaveBeenCalledWith('HI');
  })

  test('New implementation for onlyFirstLetter function', () => {
    functions.onlyFirstLetter.mockImplementation((string) => string[string.length - 1])

    expect(functions.onlyFirstLetter('HI')).toBe('I');
    expect(functions.onlyFirstLetter).toHaveBeenCalled();
    expect(functions.onlyFirstLetter).toHaveBeenCalledTimes(1);
    expect(functions.onlyFirstLetter).toHaveBeenCalledWith('HI');
  })

  test('New implementation for joinStrings function', () => {
    functions.joinStrings
      .mockImplementation((stringA, stringB, stringC) => stringA + stringB + stringC)

    expect(functions.joinStrings('hello', 'my', 'friends')).toBe('hellomyfriends');
    expect(functions.joinStrings).toHaveBeenCalled();
    expect(functions.joinStrings).toHaveBeenCalledTimes(1);
    expect(functions.joinStrings).toHaveBeenCalledWith('hello', 'my', 'friends');
  })
})