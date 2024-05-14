import { isObject } from '../../src';

describe('isObject', () => {
  test('为null返回false', () => {
    const result = isObject(null);
    expect(result).toBe(false);
  });
  test('对于未定义返回false', () => {
    const result = isObject(undefined);
    expect(result).toBe(false);
  });
  test('对于布尔值返回false', () => {
    const result = isObject(false);
    expect(result).toBe(false);
  });
  test('类实例返回false类实例返回false', () => {
    class Data {}
    const result = isObject(new Data());
    expect(result).toBe(false);
  });
  test('返回false表示数字', () => {
    const result = isObject(22);
    expect(result).toBe(false);
  });
  test('字符串返回false', () => {
    const result = isObject('abc');
    expect(result).toBe(false);
  });
  test('对于数组返回false', () => {
    const result = isObject([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('对于对象返回true', () => {
    const result = isObject({});
    expect(result).toBe(true);
  });
});
