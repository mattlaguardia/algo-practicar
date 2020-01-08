const firstUniqueChar = require('./first-unique-char');

test('When given string "pomeranian" firstUniqueChar should return 0', () => {
  expect(firstUniqueChar('pomeranian')).toBe(0);
});

test('When given string "lululemon" firstUniqueChar should return 5', () => {
  expect(firstUniqueChar('lululemon')).toBe(5);
});

test('When given string "lukeluke" firstUniqueChar should return -1', () => {
  expect(firstUniqueChar('lukeluke')).toBe(-1);
});
