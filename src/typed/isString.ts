/**
 * 检查一个值是否为字符串
 * @param value
 * @returns {boolean}
 */
export const isString = (value: unknown): boolean => {
  return typeof value === 'string';
};
