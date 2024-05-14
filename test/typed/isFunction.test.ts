import { isFunction } from '../../src';

describe('isFunction function', () => {
  test('returns false for null', () => {
    const result = isFunction(null);
    expect(result).toBe(false);
  });
  test('returns false for undefined', () => {
    const result = isFunction(undefined);
    expect(result).toBe(false);
  });
  test('returns false for boolean', () => {
    const result = isFunction(false);
    expect(result).toBe(false);
  });
  test('returns false for class instance', () => {
    class Data {}
    const result = isFunction(new Data());
    expect(result).toBe(false);
  });
  test('returns false for number', () => {
    const result = isFunction(22);
    expect(result).toBe(false);
  });
  test('returns false for string', () => {
    const result = isFunction('abc');
    expect(result).toBe(false);
  });
  test('returns false for array', () => {
    const result = isFunction([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('returns false for object', () => {
    const result = isFunction({});
    expect(result).toBe(false);
  });
  test('returns true for function', () => {
    const result = isFunction(function () {});
    expect(result).toBe(true);
  });
  test('returns true for arrow function', () => {
    const result = isFunction(() => {});
    expect(result).toBe(true);
  });
  test('returns true for named function', () => {
    function sayHello() {
      return 'hello';
    }
    const result = isFunction(sayHello);
    expect(result).toBe(true);
  });
});
