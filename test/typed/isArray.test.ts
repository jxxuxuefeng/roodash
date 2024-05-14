import { isArray } from '../../src';

describe('isArray', () => {
  test('对于字符串返回 false', () => {
    const result = isArray('hello');
    expect(result).toBe(false);
  });

  test('对于数字返回 false', () => {
    const result = isArray(1);
    expect(result).toBe(false);
  });

  test('布尔值返回 false', () => {
    const result = isArray(true);
    expect(result).toBe(false);
  });

  test('对于未定义返回 false', () => {
    const result = isArray(undefined);
    expect(result).toBe(false);
  });

  test('对于 null 返回 false', () => {
    const result = isArray(null);
    expect(result).toBe(false);
  });

  test('函数返回 false', () => {
    const result = isArray(function () {});
    expect(result).toBe(false);
  });

  test('为对象返回 false', () => {
    const result = isArray({ name: 'John', age: 30 });
    expect(result).toBe(false);
  });

  test('对于数组返回 true', () => {
    const result = isArray([1, 2, 3]);
    expect(result).toBe(true);
  });
});
