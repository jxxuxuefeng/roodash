import { formatBytes } from '../../src';

describe('formatBytes', () => {
  test('应返回“0B”场景', () => {
    expect(formatBytes(undefined as any)).toBe('0B');
    expect(formatBytes(null as any)).toBe('0B');
    expect(formatBytes('' as any)).toBe('0B');
    expect(formatBytes(Symbol(1) as any)).toBe('0B');
    expect(formatBytes('abc' as any)).toBe('0B');
    expect(formatBytes(-1)).toBe('0B');
    expect(formatBytes(1.5)).toBe('0B');
    expect(formatBytes({} as any)).toBe('0B');
    expect(formatBytes(new Date() as any)).toBe('0B');
    expect(formatBytes(function () {} as any)).toBe('0B');
    expect(formatBytes(true as any)).toBe('0B');
    expect(formatBytes(false as any)).toBe('0B');
    expect(formatBytes(RegExp as any)).toBe('0B');
    expect(formatBytes([] as any)).toBe('0B');
  });

  test('应正确设置千字节格式', () => {
    expect(formatBytes(1025)).toBe('1.00KB');
    expect(formatBytes(1048575, 1)).toBe('1024.0KB');
  });

  test('应正确格式化兆字节', () => {
    expect(formatBytes(1048576)).toBe('1.00MB');
    expect(formatBytes(1073741823)).toBe('1024.00MB');
  });

  test('应正确格式化千兆字节', () => {
    expect(formatBytes(1073741824)).toBe('1.00GB');
    expect(formatBytes(1099511627775, 0)).toBe('1024GB');
  });

  test('应该处理自定义精度', () => {
    expect(formatBytes(1048576, 0)).toBe('1MB');
    expect(formatBytes(1048576, 3)).toBe('1.000MB');
  });

  test('应该处理非常大的尺寸', () => {
    expect(formatBytes(1.2089258196146292e24)).toBe('1.00YB');
  });

  test('should not exceed defined units', () => {
    expect(formatBytes(1.2089258196146292e27)).toBe('1000.00YB');
  });
});
