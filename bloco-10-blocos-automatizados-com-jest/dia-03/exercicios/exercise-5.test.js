const functions = require('./exercise-4')


test('testing uppercase function', () => {
  const mockUppercase = jest
    .spyOn(functions, 'upperCase')
    .mockImplementation(string => string.toLowerCase());

  expect(mockUppercase('HI')).toBe('hi')
  expect(mockUppercase).toHaveBeenCalled();
  expect(mockUppercase).toHaveBeenCalledTimes(1);
  expect(mockUppercase).toHaveBeenCalledWith("HI");

  functions.upperCase.mockRestore();
  expect(functions.upperCase('hi')).toBe('HI')
})
