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
