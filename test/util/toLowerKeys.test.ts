import { toLowerKeys } from '../../src';

describe('toLowerKeys', () => {
  it('如果输入不是对象或数组，则应返回相同的值', () => {
    expect(toLowerKeys(null as any)).toBe(null);
    expect(toLowerKeys(123 as any)).toBe(123);
    expect(toLowerKeys('foo' as any)).toBe('foo');
  });
  it('如果输入的数据首字母本来就是小写，应该返回原来的数据', () => {
    const obj = {
      foo: 'foo',
      bar: 'bar',
      obj: {
        secondFoo: 'foo',
        secondBar: 'bar',
      },
      children: [{ name: 'foo', age: 18, newObj: { demo: '1' } }],
    };

    expect(toLowerKeys(obj)).toEqual(obj);
  });
  it('应该将对象键转换为小写', () => {
    const obj = {
      Foo: 'foo',
      Bar: 'bar',
      Obj: {
        SecondFoo: 'foo',
        SecondBar: 'bar',
      },
      Children: [{ Name: 'foo', Age: 18, NewObj: { Demo: '1' } }],
    };

    expect(toLowerKeys(obj)).toEqual({
      foo: 'foo',
      bar: 'bar',
      obj: {
        secondFoo: 'foo',
        secondBar: 'bar',
      },
      children: [{ name: 'foo', age: 18, newObj: { demo: '1' } }],
    });
  });

  it('应该将对象数组键转换为小写', () => {
    const arr = [
      {
        Foo: 'foo',
        Bar: 'bar',
        Object: { Name: '张三', Age: 18 },
        Children: [{ Name: '张三-a', Age: 18 }],
        ChildrenTwo: [1],
      },
      {
        Foo: 'foo',
        Bar: 'bar',
        Object: { Name: '李四', Age: 20 },
        Children: [{ Name: '张三-a', Age: 18 }],
        ChildrenTwo: [1],
      },
    ];

    expect(toLowerKeys(arr)).toEqual([
      {
        foo: 'foo',
        bar: 'bar',
        object: { name: '张三', age: 18 },
        children: [{ name: '张三-a', age: 18 }],
        childrenTwo: [1],
      },
      {
        foo: 'foo',
        bar: 'bar',
        object: { name: '李四', age: 20 },
        children: [{ name: '张三-a', age: 18 }],
        childrenTwo: [1],
      },
    ]);
  });
});
