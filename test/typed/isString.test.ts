import { isString } from '../../src';

describe('isString function', () => {
  test('returns false for null', () => {
    const result = isString(null);
    expect(result).toBe(false);
  });
  test('returns false for undefined', () => {
    const result = isString(undefined);
    expect(result).toBe(false);
  });
  test('returns false for boolean', () => {
    const result = isString(false);
    expect(result).toBe(false);
  });
  test('returns false for class instance', () => {
    class Data {}

    const result = isString(new Data());
    expect(result).toBe(false);
  });
  test('returns false for number', () => {
    const result = isString(22);
    expect(result).toBe(false);
  });
  test('returns false for array', () => {
    const result = isString([1, 2, 3]);
    expect(result).toBe(false);
  });
  test('returns false for object', () => {
    const result = isString({});
    expect(result).toBe(false);
  });
  test('returns false for function', () => {
    const result = isString(function () {});
    expect(result).toBe(false);
  });
  test('returns true for string', () => {
    const result = isString('abc');
    expect(result).toBe(true);
  });
});
