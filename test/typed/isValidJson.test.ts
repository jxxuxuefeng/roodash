import { isValidJson } from '../../src';

describe('isValidJson', () => {
  test('无效json字符串返回false', () => {
    const result = isValidJson('{"name": "John", "age": 30, "city": "New York",}');
    expect(result).toBe(false);
  });

  test('空字符串返回false', () => {
    const result = isValidJson('  ');
    expect(result).toBe(false);
  });

  test('json字符串返回true', () => {
    const result = isValidJson('{"name": "John", "age": 30, "city": "New York"}');
    expect(result).toBe(true);
  });

  test('json数组返回true', () => {
    const result = isValidJson('[1, 2, 3]');
    expect(result).toBe(true);
  });
});
