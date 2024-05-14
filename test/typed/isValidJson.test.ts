import { isValidJson } from '../../src';

describe('isValidJson', () => {
  test('return false for invalid json string', () => {
    const result = isValidJson('{"name": "John", "age": 30, "city": "New York",}');
    expect(result).toBe(false);
  });

  test('return false for empty string', () => {
    const result = isValidJson('  ');
    expect(result).toBe(false);
  });

  test('return true for json string', () => {
    const result = isValidJson('{"name": "John", "age": 30, "city": "New York"}');
    expect(result).toBe(true);
  });

  test('return true for json array', () => {
    const result = isValidJson('[1, 2, 3]');
    expect(result).toBe(true);
  });
});
