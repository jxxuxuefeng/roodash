import { isArray } from '../typed/isArray';
import { isEmpty } from '../typed/isEmpty';

type Item = Record<string, any>;

type Data = Array<Item>;

interface ArrToObjOptions {
  /**
   * 映射key
   */
  mapKey?: string;
  /**
   * 是否深度格式化，默认为 false
   */
  deep?: boolean;
  /**
   * 深度格式化key，默认为 'children'
   */
  deepKey?: string;
  /**
   * 深度话格式时是否保留deepKey 默认为 true
   */
  keepDeepKey?: boolean;
}

/**
 * 将数组转换为对象
 * @param data - 需要转换的数组
 * @param options - 配置项
 * @returns 转换后的对象
 */
export const arrToObj = <T extends Data>(
  data: T,
  options?: ArrToObjOptions,
): Record<string, any> => {
  // 如果 data 为空或者不是数组，则返回空对象
  if (isEmpty(data) || !isArray(data)) {
    return {};
  }

  // 解构参数，设置默认值
  const { mapKey = 'id', deep = false, deepKey = 'children', keepDeepKey = true } = options || {};

  // reduce 方法将数组转换为对象
  const result = data.reduce((previousValue, currentValue) => {
    // 获取当前项的 key
    const key = currentValue[mapKey];
    // 如果 deep 为 true 并且当前项的 deepKey 是数组，则递归调用 arrToObj 方法
    if (deep && isArray(currentValue[deepKey])) {
      return { ...previousValue, [key]: currentValue, ...arrToObj(currentValue[deepKey], options) };
    }
    // 返回转换后的对象
    return { ...previousValue, [key]: currentValue };
  }, {});

  // 如果 deep 为 true 并且 keepDeepKey 为 false，则删除 deepKey
  if (deep && !keepDeepKey) {
    Object.keys(result).forEach((key) => {
      delete result[key][deepKey];
    });
  }

  return result;
};
