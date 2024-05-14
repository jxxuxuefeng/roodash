import { isString } from '../../src';

describe('isString function', () => {
  test('为null返回false', () => {
    const result = isString(null);
    expect(result).toBe(false);
  });
  test('对于未定义返回false', () => {
    const result = isString(undefined);
    expect(result).toBe(false);
  });
  test('对于布尔值返回false', () => {
    const result = isString(false);
    expect(result).toBe(false);
  });
  test('对于类实例返回false', () => {
    class Data {}

    const result = isString(new Data());
    expect(result).toBe(false);
  });
  test('返回false表示数字', () => {
    const result = isString(22);
    expect(result).toBe(false);
  });
  test('对于数组返回false', () => {
    const result = isString([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('为对象返回false', () => {
    const result = isString({});
    expect(result).toBe(false);
  });
  test('对于函数返回false', () => {
    const result = isString(function () {});
    expect(result).toBe(false);
  });
  test('对于字符串返回true', () => {
    const result = isString('abc');
    expect(result).toBe(true);
  });
});
