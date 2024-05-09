import {
  isValidJson,
  isArray,
  isObject,
  isFunction,
  isString,
  isNumber,
  isEmpty,
  isDate,
  isSymbol,
  isEqual,
} from '../src';

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

  /**
   * test isObject function
   */
  describe('isObject', () => {
    test('returns false for null', () => {
      const result = isObject(null);
      expect(result).toBe(false);
    });
    test('returns false for undefined', () => {
      const result = isObject(undefined);
      expect(result).toBe(false);
    });
    test('returns false for boolean', () => {
      const result = isObject(false);
      expect(result).toBe(false);
    });
    test('returns false for class instance', () => {
      class Data {}
      const result = isObject(new Data());
      expect(result).toBe(false);
    });
    test('returns false for number', () => {
      const result = isObject(22);
      expect(result).toBe(false);
    });
    test('returns false for string', () => {
      const result = isObject('abc');
      expect(result).toBe(false);
    });
    test('returns false for array', () => {
      const result = isObject([1, 2, 3]);
      expect(result).toBe(false);
    });
    test('returns true for object', () => {
      const result = isObject({});
      expect(result).toBe(true);
    });
  });

  /**
   * test isFunction function
   */
  describe('isFunction function', () => {
    test('returns false for null', () => {
      const result = isFunction(null);
      expect(result).toBe(false);
    });
    test('returns false for undefined', () => {
      const result = isFunction(undefined);
      expect(result).toBe(false);
    });
    test('returns false for boolean', () => {
      const result = isFunction(false);
      expect(result).toBe(false);
    });
    test('returns false for class instance', () => {
      class Data {}
      const result = isFunction(new Data());
      expect(result).toBe(false);
    });
    test('returns false for number', () => {
      const result = isFunction(22);
      expect(result).toBe(false);
    });
    test('returns false for string', () => {
      const result = isFunction('abc');
      expect(result).toBe(false);
    });
    test('returns false for array', () => {
      const result = isFunction([1, 2, 3]);
      expect(result).toBe(false);
    });
    test('returns false for object', () => {
      const result = isFunction({});
      expect(result).toBe(false);
    });
    test('returns true for function', () => {
      const result = isFunction(function () {});
      expect(result).toBe(true);
    });
    test('returns true for arrow function', () => {
      const result = isFunction(() => {});
      expect(result).toBe(true);
    });
    test('returns true for named function', () => {
      function sayHello() {
        return 'hello';
      }
      const result = isFunction(sayHello);
      expect(result).toBe(true);
    });
  });

  /**
   * test isString function
   */
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

  /**
   * test isNumber function
   */
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

  /**
   * test isDate function
   */
  describe('isDate function', () => {
    test('returns false for null', () => {
      const result = isObject(null);
      expect(result).toBe(false);
    });
    test('returns false for undefined', () => {
      const result = isObject(undefined);
      expect(result).toBe(false);
    });
    test('returns false for boolean', () => {
      const result = isObject(false);
      expect(result).toBe(false);
    });
    test('returns false for class instance', () => {
      class Data {}

      const result = isDate(new Data());
      expect(result).toBe(false);
    });
    test('returns false for number', () => {
      const result = isDate(22);
      expect(result).toBe(false);
    });
    test('returns false for string', () => {
      const result = isDate('abc');
      expect(result).toBe(false);
    });
    test('returns false for array', () => {
      const result = isDate([1, 2, 3]);
      expect(result).toBe(false);
    });
    test('returns false for object', () => {
      const result = isDate({});
      expect(result).toBe(false);
    });
    test('returns false for function', () => {
      const result = isDate(function () {});
      expect(result).toBe(false);
    });
    test('returns true for date', () => {
      const result = isDate(new Date());
      expect(result).toBe(true);
    });
  });

  /**
   * test isSymbol function
   */
  describe('isSymbol function', () => {
    test('returns false for null', () => {
      const result = isObject(null);
      expect(result).toBe(false);
    });
    test('returns false for undefined', () => {
      const result = isObject(undefined);
      expect(result).toBe(false);
    });
    test('returns false for boolean', () => {
      const result = isObject(false);
      expect(result).toBe(false);
    });
    test('returns false for class instance', () => {
      class Data {}

      const result = isSymbol(new Data());
      expect(result).toBe(false);
    });
    test('returns false for number', () => {
      const result = isSymbol(22);
      expect(result).toBe(false);
    });
    test('returns false for string', () => {
      const result = isSymbol('abc');
      expect(result).toBe(false);
    });
    test('returns false for array', () => {
      const result = isSymbol([1, 2, 3]);
      expect(result).toBe(false);
    });
    test('returns false for object', () => {
      const result = isSymbol({});
      expect(result).toBe(false);
    });
    test('returns false for function', () => {
      const result = isSymbol(function () {});
      expect(result).toBe(false);
    });
    test('returns true for symbol', () => {
      const result = isSymbol(Symbol('x'));
      expect(result).toBe(true);
    });
  });

  /**
   * test isEmpty function
   */
  describe('isEmpty function', () => {
    class Data {}
    class Person {
      name: string = 'ray';
    }
    test('returns true for empty values', () => {
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
    test('returns false for non-empty values', () => {
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

  /**
   * test isEqual function
   */
  describe('isEqual function', () => {
    class Person {
      name: string;
      friends: Person[] = [];
      self?: Person;
      constructor(name: string) {
        this.name = name;
      }
    }
    const jake = new Person('jake');
    jake.self = jake;
    jake.friends = [jake, jake];
    const symbolKey = Symbol('1');
    const complex = {
      num: 0,
      str: '',
      boolean: true,
      unf: void 0,
      nul: null,
      obj: { name: 'object', id: 1, children: [0, 1, 2] },
      arr: [0, 1, 2],
      func() {
        console.log('function');
      },
      loop: {},
      person: jake,
      date: new Date(0),
      reg: new RegExp('/regexp/ig'),
      [symbolKey]: 'symbol',
    };
    complex.loop = complex;
    test('returns true for equal things', () => {
      expect(isEqual(0, 0)).toBe(true);
      expect(isEqual('a', 'a')).toBe(true);
      const hello = Symbol('hello');
      expect(isEqual(hello, hello)).toBe(true);
      expect(isEqual({}, {})).toBe(true);
      expect(isEqual(true, true)).toBe(true);
      expect(isEqual(new RegExp(/a*s/), new RegExp(/a*s/))).toBe(true);
      const now = new Date();
      expect(isEqual(now, now)).toBe(true);
      expect(isEqual([], [])).toBe(true);
      expect(isEqual(complex, { ...complex })).toBe(true);
      expect(isEqual([complex, complex], [{ ...complex }, { ...complex }])).toBe(true);
      expect(
        isEqual(
          { name: '张三', age: 18, skill: { skillName: 'jc' } },
          { name: '张三', age: 18, skill: { skillName: 'jc' } },
        ),
      ).toBe(true);
    });
    test('returns false for non-equal things', () => {
      expect(isEqual(0, 1)).toBe(false);
      expect(isEqual('a', 'b')).toBe(false);
      expect(isEqual(new RegExp(/^http:/), new RegExp(/https/))).toBe(false);
      expect(isEqual(Symbol('hello'), Symbol('goodbye'))).toBe(false);
      expect(isEqual({ z: 23 }, { a: 1 })).toBe(false);
      expect(isEqual(true, false)).toBe(false);
      expect(isEqual(new Date(), new Date('2022-09-01T03:25:12.750Z'))).toBe(false);
      expect(isEqual([], [1])).toBe(false);
      expect(isEqual(complex, { ...complex, num: 222 })).toBe(false);
      expect(isEqual([complex], [{ ...complex, num: 222 }])).toBe(false);
    });
  });
});
