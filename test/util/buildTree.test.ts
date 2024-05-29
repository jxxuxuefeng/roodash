import { buildTree } from '../../src';

describe('buildTree function', () => {
  it('如果数据为空，则应返回空数组', () => {
    expect(buildTree([])).toEqual([]);
  });

  it('如果数据不是数组，则应返回空数组', () => {
    expect(buildTree(null as any)).toEqual([]);
    expect(buildTree(undefined as any)).toEqual([]);
    expect(buildTree('not an array' as any)).toEqual([]);
  });
  it('应该用级别正确构建树结构', () => {
    const data = [
      { id: '1', pId: null, name: 'root1' },
      { id: '2', pId: '1', name: 'child1' },
      { id: '3', pId: '1', name: 'child2' },
      { id: '4', pId: '2', name: 'child1.1' },
      { id: '5', pId: null, name: 'root2' },
    ];

    const expectedTree = [
      {
        id: '1',
        pId: null,
        name: 'root1',
        level: 1,
        children: [
          {
            id: '2',
            pId: '1',
            name: 'child1',
            level: 2,
            children: [
              {
                id: '4',
                pId: '2',
                name: 'child1.1',
                level: 3,
                children: [],
              },
            ],
          },
          {
            id: '3',
            pId: '1',
            name: 'child2',
            level: 2,
            children: [],
          },
        ],
      },
      {
        id: '5',
        pId: null,
        name: 'root2',
        level: 1,
        children: [],
      },
    ];

    expect(buildTree(data)).toEqual(expectedTree);
  });

  it('应该支持自定义childrenKey和levelKey', () => {
    const data = [
      { id: '1', pId: null, name: 'root1' },
      { id: '2', pId: '1', name: 'child1' },
      { id: '3', pId: '1', name: 'child2' },
    ];

    const expectedTree = [
      {
        id: '1',
        pId: null,
        name: 'root1',
        depth: 1,
        nodes: [
          {
            id: '2',
            pId: '1',
            name: 'child1',
            depth: 2,
            nodes: [],
          },
          {
            id: '3',
            pId: '1',
            name: 'child2',
            depth: 2,
            nodes: [],
          },
        ],
      },
    ];

    expect(buildTree(data, { childrenKey: 'nodes', levelKey: 'depth' })).toEqual(expectedTree);
  });

  it('应该正确处理额外数据', () => {
    const data = [
      { id: '1', pId: null, name: 'root1' },
      { id: '2', pId: '1', name: 'child1' },
    ];

    const extraData = { extraField: 'extraValue' };

    const expectedTree = [
      {
        id: '1',
        pId: null,
        name: 'root1',
        level: 1,
        extraField: 'extraValue',
        children: [
          {
            id: '2',
            pId: '1',
            name: 'child1',
            level: 2,
            extraField: 'extraValue',
            children: [],
          },
        ],
      },
    ];

    expect(buildTree(data, { extra: extraData })).toEqual(expectedTree);
  });

  it('如果数据为多层级，则应正确构建树结构', () => {
    const data = [
      { id: 1, pId: null, name: '张三' },
      { id: 2, pId: 1, name: '李四' },
      { id: 3, pId: 1, name: '王五' },
      { id: 4, pId: 2, name: '赵六' },
      { id: 5, pId: 2, name: '孙七' },
    ];

    const tree = buildTree(data);

    expect(tree).toEqual([
      {
        id: 1,
        pId: null,
        name: '张三',
        level: 1,
        children: [
          {
            id: 2,
            pId: 1,
            name: '李四',
            level: 2,
            children: [
              {
                id: 4,
                pId: 2,
                name: '赵六',
                level: 3,
                children: [],
              },
              {
                id: 5,
                pId: 2,
                name: '孙七',
                level: 3,
                children: [],
              },
            ],
          },
          {
            id: 3,
            pId: 1,
            name: '王五',
            level: 2,
            children: [],
          },
        ],
      },
    ]);
  });
});
