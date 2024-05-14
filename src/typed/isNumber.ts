/**
 * 检查一个值是否为数字
 * @param value
 * @returns {boolean}
 */
export const isNumber = (value: unknown): boolean => {
  return typeof value === 'number' && isFinite(value);
};
