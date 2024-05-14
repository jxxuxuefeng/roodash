import { isNumber } from '../../src';

describe('isNumber function', () => {
  test('returns false for null', () => {
    const result = isNumber(null);
    expect(result).toBe(false);
  });
  test('returns false for undefined', () => {
    const result = isNumber(undefined);
    expect(result).toBe(false);
  });
  test('returns false for boolean', () => {
    const result = isNumber(false);
    expect(result).toBe(false);
  });
  test('returns false for class instance', () => {
    class Data {}

    const result = isNumber(new Data());
    expect(result).toBe(false);
  });
  test('returns false for string', () => {
    const result = isNumber('22');
    expect(result).toBe(false);
  });
  test('returns false for array', () => {
    const result = isNumber([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('returns false for object', () => {
    const result = isNumber({});
    expect(result).toBe(false);
  });
  test('returns false for function', () => {
    const result = isNumber(function () {});
    expect(result).toBe(false);
  });
  test('returns true for NaN', () => {
    const result = isNumber(NaN);
    expect(result).toBe(false);
  });
  test('returns true for Infinity', () => {
    const result = isNumber(Infinity);
    expect(result).toBe(false);
  });
  test('returns true for number', () => {
    const result = isNumber(22);
    expect(result).toBe(true);
  });
});
