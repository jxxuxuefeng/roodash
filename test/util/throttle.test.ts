import { throttle } from '../../src';

jest.useFakeTimers();

describe('throttle function', () => {
  it('应在等待时间后调用函数', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 300);

    throttledFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('应在等待时间内只调用该函数一次', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 300);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    jest.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('应该在等待时间过后再次调用该函数', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 300);

    throttledFunc();
    jest.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc();
    jest.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('应使用提供的最新参数', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 300);

    throttledFunc(1);
    throttledFunc(2);
    throttledFunc(3);

    jest.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledWith(3);
  });

  it('应保持上下文（`this`）', () => {
    const func = jest.fn(function (this: any) {
      expect(this).toBe(context);
    });

    const context = { someProperty: 'value' };
    const throttledFunc = throttle(func.bind(context), 300);

    throttledFunc();
    jest.advanceTimersByTime(300);
  });
});
