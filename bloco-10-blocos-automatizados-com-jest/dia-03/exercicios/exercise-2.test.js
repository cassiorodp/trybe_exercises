const service = require('./exercise-1')
jest.mock('./exercise-1')

test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
  service.randomNumber.mockImplementationOnce((a, b) => a / b)

  expect(service.randomNumber(4,2)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalled()
  expect(service.randomNumber).toHaveBeenCalledTimes(1)
  expect(service.randomNumber).toHaveBeenCalledWith(4, 2)
})