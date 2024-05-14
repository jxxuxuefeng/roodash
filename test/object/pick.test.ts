import { pick } from '../../src';

describe('pick function', () => {
  test('传入null，返回空对象', () => {
    const result = pick(null as unknown as Record<string, unknown>, []);
    expect(result).toEqual({});
  });
  test('传入空，返回空对象', () => {
    const result = pick({ a: 2 }, []);
    expect(result).toEqual({});
  });
  test('handle key not in object', () => {
    const result = pick({ a: 2, b: 3 }, ['c'] as any);
    expect(result).toEqual({});
  });
  test('处理不在对象中的键', () => {
    const result = pick({ a: 2, b: 3 }, ['a', 'c'] as any);
    expect(result).toEqual({ a: 2 });
  });
  test('不忽略未定义的值', () => {
    const result = pick({ a: 2, b: undefined }, ['b']);
    expect(result).toEqual({ b: undefined });
  });
  test('仅返回选取的属性', () => {
    const result = pick({ a: 2, b: 4 }, ['a']);
    expect(result).toEqual({ a: 2 });
  });
  test('type：接受接口', () => {
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
  test('与代理对象一起使用', () => {
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
  test('适用于在没有对象原型链的情况下创建的对象，例如通过`Object.create(null)`', () => {
    const obj = Object.create(null);
    obj.a = 2;
    obj.b = 4;
    const result = pick(obj, ['a']);
    expect(result).toEqual({ a: 2 });
  });
  test('适用于已覆盖“hasOwnProperty”的对象', () => {
    const obj = { a: 2, b: 4 };
    // @ts-expect-error overwrite hasOwnProperty
    obj.hasOwnProperty = 'OVERWRITTEN';
    const result = pick(obj, ['a']);
    expect(result).toEqual({ a: 2 });
  });
});
