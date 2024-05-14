import { isObject, isSymbol } from '../../src';

describe('isSymbol function', () => {
  test('returns false for null', () => {
    const result = isObject(null);
    expect(result).toBe(false);
  });
  test('returns false for undefined', () => {
    const result = isObject(undefined);
    expect(result).toBe(false);
  });
  test('returns false for boolean', () => {
    const result = isObject(false);
    expect(result).toBe(false);
  });
  test('returns false for class instance', () => {
    class Data {}

    const result = isSymbol(new Data());
    expect(result).toBe(false);
  });
  test('returns false for number', () => {
    const result = isSymbol(22);
    expect(result).toBe(false);
  });
  test('returns false for string', () => {
    const result = isSymbol('abc');
    expect(result).toBe(false);
  });
  test('returns false for array', () => {
    const result = isSymbol([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('returns false for object', () => {
    const result = isSymbol({});
    expect(result).toBe(false);
  });
  test('returns false for function', () => {
    const result = isSymbol(function () {});
    expect(result).toBe(false);
  });
  test('returns true for symbol', () => {
    const result = isSymbol(Symbol('x'));
    expect(result).toBe(true);
  });
});
