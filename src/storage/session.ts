import { isValidJson } from '../typed/isValidJson';

/**
 * 操作sessionStorage
 */
export const session = {
  /**
   * 取值
   * @param key
   * @returns {any}
   */
  get<T>(key: string): T | null {
    if (!key) return null;
    const res = sessionStorage.getItem(key);
    return res && isValidJson(res) ? JSON.parse(res) : res;
  },

  /**
   * 赋值
   * @param key  键
   * @param value 值
   * @returns {void} | {null}
   */
  set(key: string, value: string | number | boolean | null | Record<string, unknown>): void | null {
    if (!key || value === undefined) return null;
    if (typeof value === 'string') {
      return sessionStorage.setItem(key, value);
    }
    return sessionStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * 移除
   * @param key
   * @returns {void} | {null}
   */
  remove(key: string): void | null {
    if (!key) return null;
    return sessionStorage.removeItem(key);
  },

  /**
   * 清空
   * @returns {void}
   */
  clear(): void {
    return sessionStorage.clear();
  },
};
