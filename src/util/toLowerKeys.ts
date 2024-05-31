import { isArray } from '../typed/isArray';
import { isObject } from '../typed/isObject';

type RecordItem = Record<string, any>;

type ToLowercaseKeys<T> = {
  [K in keyof T as K extends string ? Lowercase<K> : K]: T[K] extends object
    ? ToLowercaseKeysRecursive<T[K]>
    : T[K];
};

type ToLowercaseKeysRecursive<T> = T extends (infer U)[]
  ? ToLowercaseKeys<U>[]
  : T extends object
    ? ToLowercaseKeys<T>
    : T;

// 将对象的 key 转换为小写
const convertObjectKeysToLowercase = (obj: RecordItem) => {
  const newObj: RecordItem = {};
  for (const [key, value] of Object.entries(obj)) {
    const newObjKey = key.charAt(0).toLowerCase() + key.slice(1);
    newObj[newObjKey] = isArray(value)
      ? value.map((item) => (isObject(item) ? convertObjectKeysToLowercase(item) : item))
      : isObject(value)
        ? convertObjectKeysToLowercase(value)
        : value;
  }
  return newObj;
};

/**
 * 将对象或者数组的 key 转换为小写
 * @param data - 需要转换的数据
 * @returns ToLowercaseKeysRecursive<T> - 转换后的数据
 */
export const toLowerKeys = <T extends RecordItem>(data: T): ToLowercaseKeysRecursive<T> => {
  if (!isArray(data) && !isObject(data)) return data as ToLowercaseKeysRecursive<T>;

  if (Array.isArray(data)) {
    return data.map((item) => convertObjectKeysToLowercase(item)) as ToLowercaseKeysRecursive<T>;
  }

  return convertObjectKeysToLowercase(data) as ToLowercaseKeysRecursive<T>;
};
