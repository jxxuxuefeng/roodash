/**
 * 检查一个值是否为Symbol
 * @param value
 * @returns {boolean}
 */
export const isSymbol = (value: unknown): boolean => {
  return !!value && value.constructor === Symbol;
};
