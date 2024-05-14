import { isDate, isObject } from '../../src';

describe('isDate function', () => {
  test('对于 null 返回 false', () => {
    const result = isObject(null);
    expect(result).toBe(false);
  });
  test('对于未定义返回 false', () => {
    const result = isObject(undefined);
    expect(result).toBe(false);
  });
  test('布尔值返回 false', () => {
    const result = isObject(false);
    expect(result).toBe(false);
  });
  test('对于类实例返回 false', () => {
    class Data {}

    const result = isDate(new Data());
    expect(result).toBe(false);
  });
  test('对于数字返回 false', () => {
    const result = isDate(22);
    expect(result).toBe(false);
  });
  test('对于字符串返回 false', () => {
    const result = isDate('abc');
    expect(result).toBe(false);
  });
  test('对于数组返回 false', () => {
    const result = isDate([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('为对象返回 false', () => {
    const result = isDate({});
    expect(result).toBe(false);
  });
  test('函数返回 false', () => {
    const result = isDate(function () {});
    expect(result).toBe(false);
  });
  test('对于日期返回 true', () => {
    const result = isDate(new Date());
    expect(result).toBe(true);
  });
});
