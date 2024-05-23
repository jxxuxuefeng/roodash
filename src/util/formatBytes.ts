import { isNumber } from '../typed/isNumber';
import { isEmpty } from '../typed/isEmpty';
import { isSymbol } from '../typed/isSymbol';
import { isDate } from '../typed/isDate';

/**
 * 将字节大小格式化为易读的字符串表示
 * @param {number} size - 文件大小，以字节为单位
 * @param {number} precision - 保留的小数位数 (默认为2)
 * @returns {string} - 格式化后的文件大小字符串，包括合适的单位（B, KB, MB, GB, 等）
 */
export const formatBytes = (size: number, precision: number = 2): string => {
  // 如果size是Date\Symbol类型\空,返回0B
  if (isDate(size) || isSymbol(size) || isEmpty(size)) return '0B';

  let newSize = +size;
  // 如果size不是数字，或者size小于0，或者site不是正整数 返回0B
  if (!isNumber(newSize) || newSize < 0 || !Number.isInteger(newSize)) {
    return '0B';
  }

  // 定义表示不同大小单位的数组
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  // 初始化单位指数为0，对应于字节
  let power = 0;

  // 当大小大于等于1024并且还没有超过单位数组的长度时，继续循环
  // 每次循环将大小除以1024，并增加单位指数
  while (newSize >= 1024 && power < units.length - 1) {
    newSize /= 1024;
    power++;
  }

  // 返回格式化后的大小字符串，默认保留两位小数，并附加对应的单位
  return `${newSize.toFixed(precision)}${units[power]}`;
};
