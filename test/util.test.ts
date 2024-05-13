import { cloneDeep } from '../src';

describe('util module', () => {
  /**
   * test cloneDeep function
   */
  describe('cloneDeep function', () => {
    test('return the same value for non-object types', () => {
      expect(cloneDeep(42)).toBe(42);
      expect(cloneDeep('hello')).toBe('hello');
      expect(cloneDeep(true)).toBe(true);
      expect(cloneDeep(null)).toBe(null);
      expect(cloneDeep(undefined)).toBe(undefined);
    });
    test('deeply clone objects', () => {
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
    test('deeply clone arrays', () => {
      const arr = [1, 2, { a: 3 }];
      const clonedArr = cloneDeep(arr);
      expect(arr).not.toBe(clonedArr);
      expect(arr).toEqual(clonedArr);
    });
    test('handle circular references correctly', () => {
      const obj: any = { a: 1 };
      obj.b = obj;
      const clonedObj = cloneDeep(obj);

      expect(obj).not.toBe(clonedObj);
      expect(obj).toEqual(clonedObj);
    });
  });
});
