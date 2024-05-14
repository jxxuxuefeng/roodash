import { cloneDeep } from '../../src';

describe('cloneDeep function', () => {
  test('非对象类型返回相同的值', () => {
    expect(cloneDeep(42)).toBe(42);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(true)).toBe(true);
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
  });
  test('深度克隆对象', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: [3, 4, { e: 5 }],
      },
      f: null,
    };
    const clonedObj = cloneDeep(obj);

    expect(obj).not.toBe(clonedObj);
    expect(obj).toEqual(clonedObj);
  });
  test('深度克隆数组', () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = cloneDeep(arr);
    expect(arr).not.toBe(clonedArr);
    expect(arr).toEqual(clonedArr);
  });
  test('正确处理循环引用', () => {
    const obj: any = { a: 1 };
    obj.b = obj;
    const clonedObj = cloneDeep(obj);

    expect(obj).not.toBe(clonedObj);
    expect(obj).toEqual(clonedObj);
  });
});
