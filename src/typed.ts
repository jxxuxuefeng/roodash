/**
 * 检查一个字符串是否为有效的JSON格式
 * @param {string} str - 要检查的字符串
 * @returns {boolean}
 */
export const isJson = (str: string): boolean => {
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
