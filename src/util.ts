import { isArray } from './typed';

/**
 * 深拷贝
 * @param obj
 * @param clonedMap
 * @returns new obj
 */
export const cloneDeep = <T>(obj: T, clonedMap = new Map()): T => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const cloned = (isArray(obj) ? [] : {}) as T;

  if (clonedMap.has(obj)) {
    return clonedMap.get(obj);
  }

  clonedMap.set(obj, cloned);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        cloned[key] = cloneDeep(value, clonedMap);
      } else {
        cloned[key] = value;
      }
    }
  }
  return cloned;
};
