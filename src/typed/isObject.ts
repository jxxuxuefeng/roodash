/**
 * 检查一个值是否为对象
 * @param value
 * @returns {boolean}
 */
export const isObject = (value: unknown): boolean => {
  return !!value && value.constructor === Object;
};
