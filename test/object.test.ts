import { pick, omit } from '../src';

describe('object module', () => {
  /**
   * test pick function
   */
  describe('pick function', () => {
    test('handles null input', () => {
      const result = pick(null as unknown as Record<string, unknown>, []);
      expect(result).toEqual({});
    });
    test('handles empty keys', () => {
      const result = pick({ a: 2 }, []);
      expect(result).toEqual({});
    });
    test('handle key not in object', () => {
      const result = pick({ a: 2, b: 3 }, ['c'] as any);
      expect(result).toEqual({});
    });
    test('handle one key not in object', () => {
      const result = pick({ a: 2, b: 3 }, ['a', 'c'] as any);
      expect(result).toEqual({ a: 2 });
    });
    test('does not ignore undefined values', () => {
      const result = pick({ a: 2, b: undefined }, ['b']);
      expect(result).toEqual({ b: undefined });
    });
    test('returns picked properties only', () => {
      const result = pick({ a: 2, b: 4 }, ['a']);
      expect(result).toEqual({ a: 2 });
    });
    test('type: accepts an interface', () => {
      interface SomeDeclaredType {
        a: string;
        b: Error;
        c: number[];
      }
      const x: SomeDeclaredType = {
        a: 'alpha',
        b: new Error('beta'),
        c: [3],
      };
      const result = pick(x, ['a']);
      expect(result).toEqual({ a: 'alpha' });
    });
    test('works with proxied objects', () => {
      const target = {
        a: 'hello',
        b: 'everyone',
      };
      const handler1 = {
        get() {
          return 'world';
        },
      };
      const proxied = new Proxy(target, handler1);
      const result = pick(proxied, ['a']);
      expect(result).toEqual({ a: 'world' });
    });
    test('works with objects created without the prototype chain of Object e.g. by `Object.create(null)`', () => {
      const obj = Object.create(null);
      obj.a = 2;
      obj.b = 4;
      const result = pick(obj, ['a']);
      expect(result).toEqual({ a: 2 });
    });
    test('works with objects that have `hasOwnProperty` overwritten', () => {
      const obj = { a: 2, b: 4 };
      // @ts-expect-error overwrite hasOwnProperty
      obj.hasOwnProperty = 'OVERWRITTEN';
      const result = pick(obj, ['a']);
      expect(result).toEqual({ a: 2 });
    });
  });

  /**
   * test omit function
   */
  describe('omit function', () => {
    const person = {
      name: 'jay',
      age: 20,
      active: true,
    };
    test('handles null input', () => {
      const result = omit(null, []);
      expect(result).toEqual({});
    });
    test('handles empty keys', () => {
      const result = omit(person, []);
      expect(result).toEqual(person);
    });
    test('handles null keys', () => {
      const result = omit(person, null as unknown as []);
      expect(result).toEqual(person);
    });
    test('returns object without omitted properties', () => {
      const result = omit(person, ['name']);
      expect(result).toEqual({
        age: 20,
        active: true,
      });
    });
  });
});
