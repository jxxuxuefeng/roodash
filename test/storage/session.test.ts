import { session } from '../../src';

describe('session', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  test('对于空键返回 null', () => {
    const key = '';
    const result = session.get(key);
    expect(result).toBeNull();
  });

  test('从sessionStorage返回值', () => {
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    sessionStorage.setItem(key, JSON.stringify(value));
    const result = session.get(key);
    expect(result).toEqual(value);
  });

  test('从sessionStorage返回值', () => {
    const key = 'testKey';
    sessionStorage.setItem(key, '{"name": "John", "age": 30, "city": "New York",}');
    const result = session.get(key);
    expect(result).toBe('{"name": "John", "age": 30, "city": "New York",}');
  });

  test('对于空键返回 null', () => {
    const key = '';
    const value = { name: 'John', age: 30 };
    const result = session.set(key, value);
    expect(result).toBeNull();
  });

  test('sessionStorage 中的返回值', () => {
    const key = 'testKey';
    const value = 'hello';
    session.set(key, value);
    const result = sessionStorage.getItem(key);
    expect(result).toBe(value);
  });

  test('返回 sessionStorage 中数字的值', () => {
    const key = 'testKey';
    const value = 1;
    session.set(key, value);
    const result = sessionStorage.getItem(key);
    expect(result).toBe(value.toString());
  });

  test('对于空键返回 null', () => {
    const key = '';
    const result = session.remove(key);
    expect(result).toBeNull();
  });

  test('应该从 sessionStorage 中删除值', () => {
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    sessionStorage.setItem(key, JSON.stringify(value));
    session.remove(key);
    const result = sessionStorage.getItem(key);
    expect(result).toBeNull();
  });

  test('应该清除sessionStorage', () => {
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
