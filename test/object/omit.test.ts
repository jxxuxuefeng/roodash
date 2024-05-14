import { omit } from '../../src';

describe('omit function', () => {
  const person = {
    name: 'jay',
    age: 20,
    active: true,
  };
  test('传入null，返回空对象', () => {
    const result = omit(null, []);
    expect(result).toEqual({});
  });
  test('输入空，返回传入的对象', () => {
    const result = omit(person, []);
    expect(result).toEqual(person);
  });
  test('输入null，返回传入的对象', () => {
    const result = omit(person, null as unknown as []);
    expect(result).toEqual(person);
  });
  test('输入“name”，返回忽略“name”属性的对象', () => {
    const result = omit(person, ['name']);
    expect(result).toEqual({
      age: 20,
      active: true,
    });
  });
});
