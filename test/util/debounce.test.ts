import { debounce } from '../../src';

jest.useFakeTimers();
describe('debounce function', () => {
  test('应在指定的等待时间后调用去抖函数', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 300);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('如果在等待期内再次调用，应重置等待时间', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 300);

    debouncedFunc();
    jest.advanceTimersByTime(100);
    debouncedFunc();
    jest.advanceTimersByTime(100);
    debouncedFunc();
    jest.advanceTimersByTime(100);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('应该使用最新的参数调用去抖函数', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 300);

    debouncedFunc('first call');
    jest.advanceTimersByTime(100);
    debouncedFunc('second call');
    jest.advanceTimersByTime(100);
    debouncedFunc('third call');
    jest.advanceTimersByTime(300);

    expect(func).toHaveBeenCalledWith('third call');
  });

  test('应该保持正确的“this”上下文', () => {
    const context = { value: 42 };
    const func = jest.fn(function (this: { value: number }) {
      return this.value;
    });
    const debouncedFunc = debounce(func.bind(context), 300);

    debouncedFunc();
    jest.advanceTimersByTime(300);

    expect(func).toHaveReturnedWith(42);
  });
});
