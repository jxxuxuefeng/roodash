import { omit } from '../../src';

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
