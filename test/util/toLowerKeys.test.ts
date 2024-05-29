import { toLowerKeys } from '../../src';

describe('toLowerKeys', () => {
  it('should convert object keys to lowercase', () => {
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

  it('should convert array of objects keys to lowercase', () => {
    const arr = [
      {
        Foo: 'foo',
        Bar: 'bar',
      },
      {
        Foo: 'foo',
        Bar: 'bar',
      },
    ];

    expect(toLowerKeys(arr)).toEqual([
      {
        foo: 'foo',
        bar: 'bar',
      },
      {
        foo: 'foo',
        bar: 'bar',
      },
    ]);
  });
});
