const numberOfOnes = require('./number-of-ones');

test('counts number of ones for [0, 0, 0, 1, 1, 1, 1, 1]', () => {
  expect(numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1])).toBe(5);
});

test('counts number of ones for [1, 1, 1, 1, 1, 1, 1, 1]', () => {
  expect(numberOfOnes([1, 1, 1, 1, 1, 1, 1, 1])).toBe(8);
});

test('counts number of ones for [0, 0, 0, 0, 0, 0, 0, 0]', () => {
  expect(numberOfOnes([0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
});

test('counts number of ones for [0, 0, 0, 0, 0, 1, 1, 1]', () => {
  expect(numberOfOnes([0, 0, 0, 0, 0, 1, 1, 1])).toBe(3);
});

test('counts number of ones for [1]', () => {
  expect(numberOfOnes([1])).toBe(1);
});

test('counts number of ones for [0]', () => {
  expect(numberOfOnes([0])).toBe(0);
});
