const service = require('./exercise-1')
jest.mock('./exercise-1')

test('#RandomNumber', () => {
  service.randomNumber.mockReturnValue(10);

  expect(service.randomNumber()).toBe(10)
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
})