import { isObject, isSymbol } from '../../src';

describe('isSymbol function', () => {
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
  test('对于类实例返回false', () => {
    class Data {}

    const result = isSymbol(new Data());
    expect(result).toBe(false);
  });
  test('返回false表示数字', () => {
    const result = isSymbol(22);
    expect(result).toBe(false);
  });
  test('字符串返回false', () => {
    const result = isSymbol('abc');
    expect(result).toBe(false);
  });
  test('对于数组返回false', () => {
    const result = isSymbol([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('为对象返回false', () => {
    const result = isSymbol({});
    expect(result).toBe(false);
  });
  test('对于函数返回false', () => {
    const result = isSymbol(function () {});
    expect(result).toBe(false);
  });
  test('对于符号返回true', () => {
    const result = isSymbol(Symbol('x'));
    expect(result).toBe(true);
  });
});
