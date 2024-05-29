import { isEmpty } from '../typed/isEmpty';
import { isArray } from '../typed/isArray';
import { isObject } from '../typed/isObject';

type RecordItem = Record<string, any>;

interface BuildTreeOptions<T extends string, L extends string> {
  /**
   * 主键节点 key
   */
  key?: string;
  /**
   * 父节点 key
   */
  parentKey?: string;
  /**
   * 子节点 key
   */
  childrenKey?: T;
  /**
   * 层级 key
   */
  levelKey?: L;
  /**
   * 额外的数据
   */
  extra?: RecordItem;
}

type NodeTree<T extends RecordItem, K extends string, L extends string> = T & {
  [Key in L]: number;
} & {
  [Key in K]: NodeTree<T, K, L>[];
};

/**
 * 构建树形结构
 * @param data - 需要转换的数组
 * @param options - 配置项
 * @returns NodeTree<T, K>[] - 转换后的树形结构
 */
export const buildTree = <
  T extends RecordItem,
  K extends string = 'children',
  L extends string = 'level',
>(
  data: T[],
  options?: BuildTreeOptions<K, L>,
): NodeTree<T, K, L>[] => {
  // 如果 data 为空或者不是数组，则返回空数组
  if (isEmpty(data) || !isArray(data)) {
    return [];
  }

  // 解构参数，设置默认值
  const {
    key = 'id',
    parentKey = 'pId',
    childrenKey = 'children' as K,
    levelKey = 'level' as L,
    extra = {},
  } = options || {};
  // 创建一个 Map 用于存储节点
  const nodeMap = new Map<string, NodeTree<T, K, L>>();
  // 创建一个数组用于存储根节点
  const roots: NodeTree<T, K, L>[] = [];

  // 遍历 data，将每一项转换为节点
  data.forEach((item) => {
    const _extra = isObject(extra) ? { ...extra } : {};
    const node: NodeTree<T, K, L> = {
      ...item,
      ..._extra,
      [levelKey]: 1 as number,
      [childrenKey]: [],
    };
    nodeMap.set(node[key], node);
  });

  // 遍历 data，构建树形结构
  data.forEach((item) => {
    const node = nodeMap.get(item[key]);
    if (!node) return;
    if (!item[parentKey]) {
      roots.push(node);
    } else {
      const parentNode = nodeMap.get(item[parentKey]);
      if (parentNode) {
        node[levelKey] = (parentNode as any)[levelKey] + 1;
        parentNode[childrenKey].push(node);
      }
    }
  });

  return roots;
};
