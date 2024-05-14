import { isDate, isObject } from '../../src';

describe('isDate function', () => {
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

    const result = isDate(new Data());
    expect(result).toBe(false);
  });
  test('returns false for number', () => {
    const result = isDate(22);
    expect(result).toBe(false);
  });
  test('returns false for string', () => {
    const result = isDate('abc');
    expect(result).toBe(false);
  });
  test('returns false for array', () => {
    const result = isDate([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('returns false for object', () => {
    const result = isDate({});
    expect(result).toBe(false);
  });
  test('returns false for function', () => {
    const result = isDate(function () {});
    expect(result).toBe(false);
  });
  test('returns true for date', () => {
    const result = isDate(new Date());
    expect(result).toBe(true);
  });
});
