interface DebounceFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
}

/**
 * 防抖函数
 * @param func
 * @param wait
 * @returns 防抖函数
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300,
): DebounceFunc<T> => {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(this, args);
    }, wait);
  };
};
