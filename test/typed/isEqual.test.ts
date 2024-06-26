import { isEqual } from '../../src';

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
  test('对于相同的事物返回 true', () => {
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
  test('对于不相等的事物返回 false', () => {
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
