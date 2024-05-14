import { session } from '../../src';

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
