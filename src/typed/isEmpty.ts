import { isNumber } from './isNumber';
import { isDate } from './isDate';
import { isFunction } from './isFunction';
import { isSymbol } from './isSymbol';

/**
 * 检查一个值是否为空
 * @param value
 * @returns {boolean}
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === true || value === false) return true;
  if (value === null || value === undefined) return true;
  if (isNumber(value)) return value === 0;
  if (isDate(value)) return isNaN((value as Date).getTime());
  if (isFunction(value)) return false;
  if (isSymbol(value)) return false;
  const length = (value as []).length;
  if (isNumber(length)) return length === 0;
  const size = (value as Map<string, unknown>).size;
  if (isNumber(size)) return size === 0;
  const keys = Object.keys(value).length;
  return keys === 0;
};
