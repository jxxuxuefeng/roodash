import { formatData } from '../../src';

describe('formatData function', () => {
  it('传入非对象返回原来的值', () => {
    const stringValue: string = '123';
    const newStringValue = formatData(stringValue as any);
    expect(newStringValue).toBe(stringValue);

    const numberValue: number = 123;
    const newNumberValue = formatData(numberValue as any);
    expect(newNumberValue).toBe(numberValue);

    const booleanValue: boolean = true;
    const newBooleanValue = formatData(booleanValue as any);
    expect(newBooleanValue).toBe(booleanValue);

    const nullValue: null = null;
    const newNullValue = formatData(nullValue as any);
    expect(newNullValue).toBe(null);

    const undefinedValue: undefined = undefined;
    const newUndefinedValue = formatData(undefinedValue as any);
    expect(newUndefinedValue).toBe(undefined);

    const symbolValue: symbol = Symbol('123');
    const newSymbolValue = formatData(symbolValue as any);
    expect(newSymbolValue).toBe(symbolValue);
  });
  it('不传入映射关系，拿默认映射关系，返回和传入的数据保持一致', () => {
    const value = { name: '张三', age: 18 };
    const newValue = formatData(value);
    expect(newValue).toEqual(value);
  });
  it('传入空映射关系，拿默认映射关系，返回和传入的数据保持一致', () => {
    const value = { name: '张三', age: 18 };
    const newValue = formatData(value, { map: {} });
    expect(newValue).toEqual({ name: '张三', age: 18 });
  });
  it('传入错误格式的映射关系，拿默认映射关系，返回和传入的数据保持一致', () => {
    const value = { name: '张三', age: 18 };
    const newValue = formatData(value, { map: [1, 2, 3] as any });
    expect(newValue).toEqual({ name: '张三', age: 18 });
  });
  it('传入正确格式的映射关系，返回映射关系后的数据格式', () => {
    const value = { name: '张三', age: 18 };
    const newValue = formatData(value, { map: { name: 'userName', age: 'value' } });
    expect(newValue).toEqual({ userName: '张三', value: 18 });
  });
  it('传入部分正确格式的映射关系，返回映射关系后的数据格式', () => {
    const value = { name: '张三', age: 18 };
    const newValue = formatData(value, { map: { name: 'userName' } });
    expect(newValue).toEqual({ userName: '张三', age: 18 });
  });
  it('传入不正确格式的映射关系，只映射存在value中的key的关系', () => {
    const value = { name: '张三', age: 18 };
    const newValue = formatData(value, { map: { name1: 'userName', age: 'value' } });
    expect(newValue).toEqual({ name: '张三', value: 18 });
  });
  it('传入数组，使用第一个元素的映射关系', () => {
    const value = [{ name: '张三', age: 18 }];
    const newValue = formatData(value);
    expect(newValue).toEqual([{ name: '张三', age: 18 }]);
  });
  it('传入数组，使用第一个元素的映射关系', () => {
    const value = [{ name: '张三', age: 18 }];
    const newValue = formatData(value, { map: { name: 'userName', age: 'value' } });
    expect(newValue).toEqual([{ userName: '张三', value: 18 }]);
  });
  it('传入空数组，返回空数组', () => {
    const value = [] as any;
    const newValue = formatData(value);
    expect(newValue).toEqual([]);
  });
  it('keepOriginalKey 为 true 时，保留原始 key', () => {
    const value = { name: '张三', age: 18 };
    const newValue = formatData(value, { map: { name: 'username' }, keep: true });
    expect(newValue).toEqual({ username: '张三', name: '张三', age: 18 });
  });
  it('extraData有值时，返回的数据中包含 extraData的数据对象', () => {
    const value = { name: '张三', age: 18 };
    const newValue = formatData(value, { extra: { id: 1 } });
    expect(newValue).toEqual({ name: '张三', age: 18, id: 1 });
  });
  it('extraData有值时，返回的数据中包含 extraData的数据数组', () => {
    const value = [{ name: '张三', age: 18 }];
    const newValue = formatData(value, { extra: { id: 1 } });
    expect(newValue).toEqual([{ name: '张三', age: 18, id: 1 }]);
  });
  it('extraData不是对象，正确解析', () => {
    const value = { name: '张三', age: 18 };
    const newValue = formatData(value, { extra: 1 as any });
    expect(newValue).toEqual({ name: '张三', age: 18 });
  });
});
