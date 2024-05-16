import { isObject } from '../typed/isObject';
import { isEmpty } from '../typed/isEmpty';

type Map = { [key: string]: string };

type RecordItem = Record<string, any>;

// 定义允许的 data 类型
type Data = RecordItem | Array<RecordItem>;

interface FormatDataOptions {
  /**
   * 映射关系
   */
  map?: Map;
  /**
   * 是否保留原始 key，默认为 false
   */
  keep?: boolean;
  /**
   * 额外的数据
   */
  extra?: RecordItem;
  /**
   * 是否深度格式化，默认为 false
   */
  deep?: boolean;
  /**
   * 深度格式化key，默认为 'children'
   */
  deepKey?: string;
}

/**
 * 获取默认的映射关系
 * @param item
 * @returns 默认的映射关系
 */
const getDefaultMap = (item: RecordItem): Map => {
  const map: Map = {};
  Object.keys(item).forEach((key) => {
    map[key] = key;
  });
  return map;
};

/**
 * 获取有效的映射关系
 * @param data - 需要格式化的数据
 * @param mapping - 提供的映射关系
 * @returns 有效的映射关系
 */
const getEffectiveMap = (data: Data, mapping: Map): Map => {
  if (!isEmpty(mapping) && isObject(mapping)) {
    return mapping;
  }
  return getDefaultMap(Array.isArray(data) ? data[0] : data);
};

/**
 * 格式化单个 item
 * @param item - 单个对象项
 * @param mapping - 映射关系
 * @param keep - 是否保留原始 key
 * @param extra - 额外的数据
 * @param deep - 是否深度格式化
 * @param deepKey - 深度格式化 key 值 默认为 'children'
 * @returns 格式化后的对象
 */
const formatSingleItem = (
  item: RecordItem,
  mapping: Map,
  keep: boolean,
  extra: RecordItem,
  deep: boolean,
  deepKey: string,
): RecordItem => {
  const formattedItem: RecordItem = isObject(extra) ? { ...extra } : {};
  Object.keys(item).forEach((key) => {
    const mappedKey = mapping[key] || key;
    if (keep && mappedKey !== key) {
      formattedItem[key] = item[key];
    }
    if (deep && key === deepKey && Array.isArray(item[key])) {
      formattedItem[key] = item[key].map((child: RecordItem) =>
        formatSingleItem(child, mapping, keep, extra, deep, deepKey),
      );
    } else {
      formattedItem[mappedKey] = item[key];
    }
  });
  return formattedItem;
};

/**
 * 格式化数据
 * @param data - 需要格式化的数据，可以是对象或数组,如果是原始类型直接返回
 * @param options - 可选项，包含映射关系
 * @returns 格式化后的数据
 */
export const formatData = <T extends Data>(data: T, options?: FormatDataOptions): Data => {
  // 如果 data 不是对象或数组，或 data 为空，直接返回
  if (typeof data !== 'object' || data === null || isEmpty(data)) {
    return data;
  }

  // 解构参数，设置默认值
  const { map = {}, keep = false, extra = {}, deep = false, deepKey = 'children' } = options || {};

  // 获取有效的 mapping
  const effectiveMap = getEffectiveMap(data, map);

  // 处理数组或单个对象
  return Array.isArray(data)
    ? data.map((item) => formatSingleItem(item, effectiveMap, keep, extra, deep, deepKey))
    : formatSingleItem(data, effectiveMap, keep, extra, deep, deepKey);
};
