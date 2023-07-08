import ErrorRepository from '../app';

test('error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(100)).toBe('Continue');
});

test('error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(200)).toBe('OK');
});

test('error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(300)).toBe('Multiple Choices');
});

test('error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(400)).toBe('Bad Request');
});

test('error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(500)).toBe('Internal Server Error');
});

test('no error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(1000)).toBe('Unknown error');
});
