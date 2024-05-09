import { isValidJson, isArray } from '../src';

describe('typed module', () => {
  /**
   * test isValidJson function
   */
  describe('isValidJson', () => {
    test('return false for invalid json string', () => {
      const result = isValidJson('{"name": "John", "age": 30, "city": "New York",}');
      expect(result).toBe(false);
    });

    test('return false for empty string', () => {
      const result = isValidJson('  ');
      expect(result).toBe(false);
    });

    test('return true for json string', () => {
      const result = isValidJson('{"name": "John", "age": 30, "city": "New York"}');
      expect(result).toBe(true);
    });

    test('return true for json array', () => {
      const result = isValidJson('[1, 2, 3]');
      expect(result).toBe(true);
    });
  });

  /**
   * test isArray function
   */
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
});
