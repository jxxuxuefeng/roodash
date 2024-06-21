import { isValidJson } from '../typed/isValidJson';

/**
 * 操作localStorage
 */
export const local = {
  /**
   * 取值
   * @param key
   * @returns {any}
   */
  get(key: string): unknown {
    if (!key) return null;
    const res = localStorage.getItem(key);
    return res && isValidJson(res) ? JSON.parse(res) : res;
  },

  /**
   * 赋值
   * @param key
   * @param value
   * @returns {void} | {null}
   */
  set(key: string, value: string | number | boolean | null | Record<string, unknown>): void | null {
    if (!key || value === undefined) return null;
    if (typeof value === 'string') {
      return localStorage.setItem(key, value);
    }
    return localStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * 移除
   * @param key
   * @returns {void} | {null}
   */
  remove(key: string): void | null {
    if (!key) return null;
    return localStorage.removeItem(key);
  },

  /**
   * 清空
   * @returns {void}
   */
  clear(): void {
    return localStorage.clear();
  },
};
