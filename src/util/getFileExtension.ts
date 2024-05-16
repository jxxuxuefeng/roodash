import { isString } from '../typed/isString';

export const getFileExtension = (filename: string): string => {
  if (!isString(filename)) {
    return '';
  }
  // 找到文件名中最后一个点的位置
  const lastDotIndex = filename.lastIndexOf('.');
  // 如果没有点，说明没有后缀
  if (lastDotIndex === -1) {
    return '';
  }
  // 返回点后面的字符串
  return filename.slice(lastDotIndex + 1);
};
