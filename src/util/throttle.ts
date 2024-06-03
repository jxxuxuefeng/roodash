interface ThrottleFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
}

/**
 * 节流函数
 * @param func
 * @param wait
 * @returns 节流函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300,
): ThrottleFunc<T> => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (timeout === null) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(this, args);
      }, wait);
    }
  };
};
