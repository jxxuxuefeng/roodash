/**
 * 检查一个字符串是否为有效的JSON格式
 * @param {string} str - 要检查的字符串
 * @returns {boolean}
 */
export const isValidJson = (str: string): boolean => {
  // 尝试将字符串解析为JSON对象
  try {
    JSON.parse(str);
    // 如果解析成功，返回true
    return true;
  } catch (error) {
    // 如果解析失败，返回false
    return false;
  }
};

/**
 * 检查一个值是否为数组
 * @param {any} value - 要检查的值
 * @returns {boolean}
 */
export const isArray = Array.isArray;

/**
 * 检查一个值是否为对象
 * @param value
 * @returns {boolean}
 */
export const isObject = (value: unknown): boolean => {
  return !!value && value.constructor === Object;
};

/**
 * 检查一个值是否为函数
 * @param value
 * @returns {boolean}
 */
export const isFunction = (value: unknown): boolean => {
  return typeof value === 'function';
};

/**
 * 检查一个值是否为字符串
 * @param value
 * @returns {boolean}
 */
export const isString = (value: unknown): boolean => {
  return typeof value === 'string';
};

/**
 * 检查一个值是否为数字
 * @param value
 * @returns {boolean}
 */
export const isNumber = (value: unknown): boolean => {
  return typeof value === 'number' && isFinite(value);
};

/**
 * 检查一个值是否为日期
 * @param value
 * @returns {boolean}
 */
export const isDate = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Date]';
};

/**
 * 检查一个值是否为Symbol
 * @param value
 * @returns {boolean}
 */
export const isSymbol = (value: unknown): boolean => {
  return !!value && value.constructor === Symbol;
};

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

/**
 * 检查2个值是否相等
 * @param x
 * @param y
 * @returns {boolean}
 */
export const isEqual = <T>(x: T, y: T): boolean => {
  if (Object.is(x, y)) return true;
  if (x instanceof Date && y instanceof Date) {
    return x.getTime() === y.getTime();
  }
  if (x instanceof RegExp && y instanceof RegExp) {
    return x.toString() === y.toString();
  }
  if (typeof x !== 'object' || x === null || typeof y !== 'object' || y === null) {
    return false;
  }
  const keysX = Reflect.ownKeys(x as unknown as object) as (keyof typeof x)[];
  const keysY = Reflect.ownKeys(y as unknown as object);
  if (keysX.length !== keysY.length) return false;
  for (let i = 0; i < keysX.length; i++) {
    if (!Reflect.has(y as unknown as object, keysX[i])) return false;
    if (!isEqual(x[keysX[i]], y[keysX[i]])) return false;
  }
  return true;
};
