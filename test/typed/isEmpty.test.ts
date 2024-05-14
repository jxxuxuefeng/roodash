import { isEmpty } from '../../src';

describe('isEmpty function', () => {
  class Data {}
  class Person {
    name: string = 'ray';
  }
  test('对于空值返回 true', () => {
    expect(isEmpty(new Data())).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(String())).toBe(true);
    expect(isEmpty(new Date('invalid value'))).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
    expect(isEmpty(Infinity)).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
  });
  test('对于非空值返回 false', () => {
    expect(isEmpty(new Date())).toBe(false);
    expect(isEmpty(new Date('2022-09-01T02:19:55.976Z'))).toBe(false);
    expect(isEmpty(22)).toBe(false);
    expect(isEmpty(new Person())).toBe(false);
    expect(isEmpty({ name: 'x' })).toBe(false);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(String('abc'))).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty(function work() {})).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
    expect(isEmpty(Symbol(''))).toBe(false);
    expect(isEmpty(Symbol('hello'))).toBe(false);
  });
});
