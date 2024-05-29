import { isArray } from '../typed/isArray';
import { isObject } from '../typed/isObject';

type RecordItem = Record<string, any>;

type Data = RecordItem | Array<RecordItem>;

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
 * @returns 转换后的数据
 */
export const toLowerKeys = <T extends RecordItem>(data: T | T[]): Data => {
  if (!isArray(data) && !isObject(data)) return data;

  if (Array.isArray(data)) {
    return data.map((item) => convertObjectKeysToLowercase(item));
  }

  return convertObjectKeysToLowercase(data);
};
