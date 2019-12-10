const reverseString = require('./reverse-a-string');

test('When given string hello reverseString should return olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
})
