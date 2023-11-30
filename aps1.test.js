const uniqueNumber = require('./aps1');

test('uniqueNumber should return the unique number for [2, 2, 1]', () => {
  const nums = [2, 2, 1];
  const result = uniqueNumber(nums);
  expect(result).toBe(1);
});

test('uniqueNumber should return the unique number for [4, 1, 2, 1, 2]', () => {
  const nums = [4, 1, 2, 1, 2];
  const result = uniqueNumber(nums);
  expect(result).toBe(4);
});

test('uniqueNumber should return the unique number for [1]', () => {
  const nums = [1];
  const result = uniqueNumber(nums);
  expect(result).toBe(1);
});