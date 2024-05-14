/**
 * 检查一个值是否为日期
 * @param value
 * @returns {boolean}
 */
export const isDate = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Date]';
};
