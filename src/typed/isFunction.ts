/**
 * 检查一个值是否为函数
 * @param value
 * @returns {boolean}
 */
export const isFunction = (value: unknown): boolean => {
  return typeof value === 'function';
};
