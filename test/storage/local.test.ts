import { local } from '../../src';

describe('local', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('对于空键返回 null', () => {
    const key = '';
    const result = local.get(key);
    expect(result).toBeNull();
  });

  test('从本地存储返回值', () => {
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    localStorage.setItem(key, JSON.stringify(value));
    const result = local.get(key);
    expect(result).toEqual(value);
  });

  test('从本地存储返回值', () => {
    const key = 'testKey';
    localStorage.setItem(key, '{"name": "John", "age": 30, "city": "New York",}');
    const result = local.get(key);
    expect(result).toBe('{"name": "John", "age": 30, "city": "New York",}');
  });

  test('对于空键返回 null', () => {
    const key = '';
    const value = { name: 'John', age: 30 };
    const result = local.set(key, value);
    expect(result).toBeNull();
  });

  test('返回值保存在localStorage中', () => {
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    local.set(key, value);
    const result = localStorage.getItem(key);
    expect(result).toBe(JSON.stringify(value));
  });

  test('对于空键返回 null', () => {
    const key = '';
    const result = local.remove(key);
    expect(result).toBeNull();
  });

  test('应该从 localStorage 中删除值', () => {
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    localStorage.setItem(key, JSON.stringify(value));
    local.remove(key);
    const result = localStorage.getItem(key);
    expect(result).toBeNull();
  });

  test('应该清除本地存储', () => {
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
