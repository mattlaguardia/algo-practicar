const reverseAString = require('./reverse-a-string');

test('When given string hello reverseString should return olleh', () => {
  expect(reverseAString('hello')).toBe('olleh');
})
