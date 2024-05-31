import { arrToObj } from '../../src';
type ArrType = { id: number; name: string };
describe('arrToObj function', () => {
  it('传入数组，返回对象', () => {
    const arr = [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
    ];
    const obj = arrToObj<ArrType[]>(arr);
    expect(obj).toEqual({ 1: { id: 1, name: '张三' }, 2: { id: 2, name: '李四' } });
  });

  it('传入数组，返回对象，映射key为name', () => {
    const arr = [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
    ];
    const obj = arrToObj(arr, { mapKey: 'name' });
    expect(obj).toEqual({ 张三: { id: 1, name: '张三' }, 李四: { id: 2, name: '李四' } });
  });

  it('传入数组，返回对象，深度格式化', () => {
    const arr = [
      { id: 1, name: '张三', children: [{ id: 3, name: '王五' }] },
      { id: 2, name: '李四' },
    ];
    const obj = arrToObj(arr, { deep: true });
    expect(obj).toEqual({
      1: { id: 1, name: '张三', children: [{ id: 3, name: '王五' }] },
      2: { id: 2, name: '李四' },
      3: { id: 3, name: '王五' },
    });
  });

  it('传入数组，返回对象，深度格式化，映射key为name', () => {
    const arr = [
      { id: 1, name: '张三', children: [{ id: 3, name: '王五' }] },
      { id: 2, name: '李四' },
    ];
    const obj = arrToObj(arr, { deep: true, mapKey: 'name' });
    expect(obj).toEqual({
      张三: { id: 1, name: '张三', children: [{ id: 3, name: '王五' }] },
      李四: { id: 2, name: '李四' },
      王五: { id: 3, name: '王五' },
    });
  });

  it('传入数组，返回对象，深度格式化', () => {
    const arr = [
      {
        id: 1,
        name: '张三',
        children: [{ id: 3, name: '王五', children: [{ id: 4, name: '赵六' }] }],
      },
      { id: 2, name: '李四' },
    ];
    const obj = arrToObj(arr, { deep: true });
    expect(obj).toEqual({
      1: {
        id: 1,
        name: '张三',
        children: [{ id: 3, name: '王五', children: [{ id: 4, name: '赵六' }] }],
      },
      2: { id: 2, name: '李四' },
      3: { id: 3, name: '王五', children: [{ id: 4, name: '赵六' }] },
      4: { id: 4, name: '赵六' },
    });
  });

  it('传入数组，返回对象，深度格式化，不保留deepKey', () => {
    const arr = [
      {
        id: 1,
        name: '张三',
        children: [{ id: 3, name: '王五', children: [{ id: 4, name: '赵六' }] }],
      },
      { id: 2, name: '李四' },
    ];
    const obj = arrToObj(arr, { deep: true, keepDeepKey: false });
    expect(obj).toEqual({
      1: { id: 1, name: '张三' },
      2: { id: 2, name: '李四' },
      3: { id: 3, name: '王五' },
      4: { id: 4, name: '赵六' },
    });
  });

  it('应该使用自定义映射键将数组转换为对象', () => {
    const data = [
      { key: 'x', value: 1 },
      { key: 'y', value: 2 },
    ];
    const options = { mapKey: 'key' };
    const result = arrToObj(data, options);
    expect(result).toEqual({
      x: { key: 'x', value: 1 },
      y: { key: 'y', value: 2 },
    });
  });

  it('应该使用自定义的 deepKey', () => {
    const data = [
      {
        id: 'a',
        value: 1,
        nodes: [{ id: 'b', value: 2, nodes: [{ id: 'c', value: 3 }] }],
      },
    ];
    const options = { deep: true, deepKey: 'nodes', keepDeepKey: false };
    const result = arrToObj(data, options);
    expect(result).toEqual({
      a: {
        id: 'a',
        value: 1,
      },
      b: {
        id: 'b',
        value: 2,
      },
      c: {
        id: 'c',
        value: 3,
      },
    });
  });

  it('应该处理一个空数组', () => {
    const data: any[] = [];
    const result = arrToObj(data);
    expect(result).toEqual({});
  });

  it('应该处理没有mapKey的数组', () => {
    const data = [{ value: 1 }, { value: 2 }];
    const result = arrToObj(data);
    expect(result).toEqual({ undefined: { value: 2 } }); // Last entry with undefined key will be kept
  });

  it('传入非数组，返回空对象', () => {
    const obj = arrToObj('string' as any);
    const obj1 = arrToObj({} as any);
    const obj2 = arrToObj(1 as any);
    const obj3 = arrToObj(null as any);
    const obj4 = arrToObj(undefined as any);
    const obj5 = arrToObj(true as any);
    const obj6 = arrToObj(false as any);
    const obj7 = arrToObj(Symbol('test') as any);
    const obj8 = arrToObj(function () {} as any);
    const obj9 = arrToObj(new Date() as any);
    const obj10 = arrToObj(/test/ as any);
    const obj11 = arrToObj(new Error() as any);

    expect(obj).toEqual({});
    expect(obj1).toEqual({});
    expect(obj2).toEqual({});
    expect(obj3).toEqual({});
    expect(obj4).toEqual({});
    expect(obj5).toEqual({});
    expect(obj6).toEqual({});
    expect(obj7).toEqual({});
    expect(obj8).toEqual({});
    expect(obj9).toEqual({});
    expect(obj10).toEqual({});
    expect(obj11).toEqual({});
  });
});
