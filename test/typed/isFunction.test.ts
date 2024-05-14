import { isFunction } from '../../src';

describe('isFunction function', () => {
  test('对于 null 返回 false', () => {
    const result = isFunction(null);
    expect(result).toBe(false);
  });
  test('对于未定义返回 false', () => {
    const result = isFunction(undefined);
    expect(result).toBe(false);
  });
  test('布尔值返回 false', () => {
    const result = isFunction(false);
    expect(result).toBe(false);
  });
  test('对于类实例返回 false', () => {
    class Data {}
    const result = isFunction(new Data());
    expect(result).toBe(false);
  });
  test('对于数字返回 false', () => {
    const result = isFunction(22);
    expect(result).toBe(false);
  });
  test('对于字符串返回 false', () => {
    const result = isFunction('abc');
    expect(result).toBe(false);
  });
  test('对于数组返回 false', () => {
    const result = isFunction([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('为对象返回 false', () => {
    const result = isFunction({});
    expect(result).toBe(false);
  });
  test('函数返回 true', () => {
    const result = isFunction(function () {});
    expect(result).toBe(true);
  });
  test('对于箭头函数返回true', () => {
    const result = isFunction(() => {});
    expect(result).toBe(true);
  });
  test('对于命名函数返回true', () => {
    function sayHello() {
      return 'hello';
    }
    const result = isFunction(sayHello);
    expect(result).toBe(true);
  });
});
