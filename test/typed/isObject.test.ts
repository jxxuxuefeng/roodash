import { isObject } from '../../src';

describe('isObject', () => {
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
    const result = isObject(new Data());
    expect(result).toBe(false);
  });
  test('returns false for number', () => {
    const result = isObject(22);
    expect(result).toBe(false);
  });
  test('returns false for string', () => {
    const result = isObject('abc');
    expect(result).toBe(false);
  });
  test('returns false for array', () => {
    const result = isObject([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('returns true for object', () => {
    const result = isObject({});
    expect(result).toBe(true);
  });
});
