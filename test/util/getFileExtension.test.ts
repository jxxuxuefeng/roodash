import { getFileExtension } from '../../src';

describe('getFileExtension function', () => {
  it('当给定带有扩展名的文件名时应该返回文件扩展名', () => {
    expect(getFileExtension('example.txt')).toBe('txt');
    expect(getFileExtension('document.pdf')).toBe('pdf');
    expect(getFileExtension('image.jpeg')).toBe('jpeg');
  });

  it('当给定不带扩展名的文件名时应返回空字符串', () => {
    expect(getFileExtension('file')).toBe('');
    expect(getFileExtension('another_file')).toBe('');
  });

  it('当给定空字符串时应该返回空字符串', () => {
    expect(getFileExtension('')).toBe('');
  });

  it('当给定非字符串输入时应返回空字符串', () => {
    // 测试传入数字
    expect(getFileExtension(123 as any)).toBe('');
    // 测试传入数组
    expect(getFileExtension(['file.txt'] as any)).toBe('');
    // 测试传入对象
    expect(getFileExtension({ filename: 'file.txt' } as any)).toBe('');
    // 测试传入布尔值
    expect(getFileExtension(true as any)).toBe('');
    // 测试传入 null
    expect(getFileExtension(null as any)).toBe('');
    // 测试传入 undefined
    expect(getFileExtension(undefined as any)).toBe('');
  });
});
