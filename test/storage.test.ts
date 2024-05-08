import { local, session } from '../src';

describe('storage', () => {
  /**
   * test local function
   */
  describe('local', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    test('return null for empty key', () => {
      const key = '';
      const result = local.get(key);
      expect(result).toBeNull();
    });

    test('return value from localStorage', () => {
      const key = 'testKey';
      const value = { name: 'John', age: 30 };
      localStorage.setItem(key, JSON.stringify(value));
      const result = local.get(key);
      expect(result).toEqual(value);
    });

    test('return value from localStorage', () => {
      const key = 'testKey';
      const value = 1;
      localStorage.setItem(key, '{"name": "John", "age": 30, "city": "New York",}');
      const result = local.get(key);
      expect(result).toBe('{"name": "John", "age": 30, "city": "New York",}');
    });

    test('return null for empty key', () => {
      const key = '';
      const value = { name: 'John', age: 30 };
      const result = local.set(key, value);
      expect(result).toBeNull();
    });

    test('return value in localStorage', () => {
      const key = 'testKey';
      const value = { name: 'John', age: 30 };
      local.set(key, value);
      const result = localStorage.getItem(key);
      expect(result).toBe(JSON.stringify(value));
    });

    test('return null for empty key', () => {
      const key = '';
      const result = local.remove(key);
      expect(result).toBeNull();
    });

    test('should remove value from localStorage', () => {
      const key = 'testKey';
      const value = { name: 'John', age: 30 };
      localStorage.setItem(key, JSON.stringify(value));
      local.remove(key);
      const result = localStorage.getItem(key);
      expect(result).toBeNull();
    });

    test('should clear localStorage', () => {
      const key1 = 'testKey1';
      const key2 = 'testKey2';
      const value1 = { name: 'John', age: 30 };
      const value2 = { city: 'New York', country: 'USA' };
      localStorage.setItem(key1, JSON.stringify(value1));
      localStorage.setItem(key2, JSON.stringify(value2));

      local.clear();
      const result1 = localStorage.getItem(key1);
      const result2 = localStorage.getItem(key2);

      expect(result1).toBeNull();
      expect(result2).toBeNull();
    });
  });

  /**
   * test session function
   */
  describe('session', () => {
    beforeEach(() => {
      sessionStorage.clear();
    });

    test('return null for empty key', () => {
      const key = '';
      const result = session.get(key);
      expect(result).toBeNull();
    });

    test('return value from sessionStorage', () => {
      const key = 'testKey';
      const value = { name: 'John', age: 30 };
      sessionStorage.setItem(key, JSON.stringify(value));
      const result = session.get(key);
      expect(result).toEqual(value);
    });

    test('return value from sessionStorage', () => {
      const key = 'testKey';
      const value = 1;
      sessionStorage.setItem(key, '{"name": "John", "age": 30, "city": "New York",}');
      const result = session.get(key);
      expect(result).toBe('{"name": "John", "age": 30, "city": "New York",}');
    });

    test('return null for empty key', () => {
      const key = '';
      const value = { name: 'John', age: 30 };
      const result = session.set(key, value);
      expect(result).toBeNull();
    });

    test('return value in sessionStorage', () => {
      const key = 'testKey';
      const value = 'hello';
      session.set(key, value);
      const result = sessionStorage.getItem(key);
      expect(result).toBe(value);
    });

    test('return value in sessionStorage for number', () => {
      const key = 'testKey';
      const value = 1;
      session.set(key, value);
      const result = sessionStorage.getItem(key);
      expect(result).toBe(value.toString());
    });

    test('return null for empty key', () => {
      const key = '';
      const result = session.remove(key);
      expect(result).toBeNull();
    });

    test('should remove value from sessionStorage', () => {
      const key = 'testKey';
      const value = { name: 'John', age: 30 };
      sessionStorage.setItem(key, JSON.stringify(value));
      session.remove(key);
      const result = sessionStorage.getItem(key);
      expect(result).toBeNull();
    });

    test('should clear sessionStorage', () => {
      const key1 = 'testKey1';
      const key2 = 'testKey2';
      const value1 = { name: 'John', age: 30 };
      const value2 = { city: 'New York', country: 'USA' };
      sessionStorage.setItem(key1, JSON.stringify(value1));
      sessionStorage.setItem(key2, JSON.stringify(value2));
      session.clear();
      const result1 = sessionStorage.getItem(key1);
      const result2 = sessionStorage.getItem(key2);
      expect(result1).toBeNull();
      expect(result2).toBeNull();
    });
  });
});
