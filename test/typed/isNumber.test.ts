import { isNumber } from '../../src';

describe('isNumber function', () => {
  test('为null返回false', () => {
    const result = isNumber(null);
    expect(result).toBe(false);
  });
  test('对于未定义返回false', () => {
    const result = isNumber(undefined);
    expect(result).toBe(false);
  });
  test('对于布尔值返回false', () => {
    const result = isNumber(false);
    expect(result).toBe(false);
  });
  test('对于类实例返回false', () => {
    class Data {}

    const result = isNumber(new Data());
    expect(result).toBe(false);
  });
  test('字符串返回false', () => {
    const result = isNumber('22');
    expect(result).toBe(false);
  });
  test('对于数组返回false', () => {
    const result = isNumber([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('为对象返回false', () => {
    const result = isNumber({});
    expect(result).toBe(false);
  });
  test('对于函数返回false', () => {
    const result = isNumber(function () {});
    expect(result).toBe(false);
  });
  test('对于NaN返回true', () => {
    const result = isNumber(NaN);
    expect(result).toBe(false);
  });
  test('对于Infinity返回true', () => {
    const result = isNumber(Infinity);
    expect(result).toBe(false);
  });
  test('对于数字返回true', () => {
    const result = isNumber(22);
    expect(result).toBe(true);
  });
});
