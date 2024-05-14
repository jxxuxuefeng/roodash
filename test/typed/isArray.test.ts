import { isArray } from '../../src';

describe('isArray', () => {
  test('return false for string', () => {
    const result = isArray('hello');
    expect(result).toBe(false);
  });

  test('return false for number', () => {
    const result = isArray(1);
    expect(result).toBe(false);
  });

  test('return false for boolean', () => {
    const result = isArray(true);
    expect(result).toBe(false);
  });

  test('return false for undefined', () => {
    const result = isArray(undefined);
    expect(result).toBe(false);
  });

  test('return false for null', () => {
    const result = isArray(null);
    expect(result).toBe(false);
  });

  test('return false for function', () => {
    const result = isArray(function () {});
    expect(result).toBe(false);
  });

  test('return false for object', () => {
    const result = isArray({ name: 'John', age: 30 });
    expect(result).toBe(false);
  });

  test('return true for array', () => {
    const result = isArray([1, 2, 3]);
    expect(result).toBe(true);
  });
});
