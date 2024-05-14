import { local } from '../../src';

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
