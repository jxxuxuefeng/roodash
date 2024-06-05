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

  it('应该正确处理额外数据', () => {
    const data = [
      { id: 1, pId: null, name: '张三' },
      { id: 2, pId: 1, name: '李四' },
    ];

    const extraData = 111 as any;

    const expectedTree = [
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
            children: [],
          },
        ],
      },
    ];

    expect(buildTree(data, { extra: extraData })).toEqual(expectedTree);
  });
  it('正确处理层级关系', () => {
    const data = [
      {
        Id: 'ab3a5f1c-3da2-4ecd-9140-e63583a7aede',
        ClassifyName: '测试分类',
        ParentId: null,
        CompanyId: '0702',
      },
      {
        Id: '228debab-8f40-40bd-9eb6-8cdae237469f',
        ClassifyName: '测试分类-1-1-11',
        ParentId: 'a086b0d4-efdc-49ed-bacb-09f875d7a586',
        CompanyId: '0702',
      },

      {
        Id: 'fbe4ca8d-2a82-4eb0-9f4c-6ba76488f3f8',
        ClassifyName: '测试分类-1',
        ParentId: 'ab3a5f1c-3da2-4ecd-9140-e63583a7aede',
        CompanyId: '0702',
      },
      {
        Id: 'a086b0d4-efdc-49ed-bacb-09f875d7a586',
        ClassifyName: '测试分类-1-1',
        ParentId: 'fbe4ca8d-2a82-4eb0-9f4c-6ba76488f3f8',
        CompanyId: '0702',
      },

      {
        Id: '70ebe1d7-2388-4a2a-93a2-e0694f4312d6',
        ClassifyName: '测试分类-1-1-111',
        ParentId: '228debab-8f40-40bd-9eb6-8cdae237469f',
        CompanyId: '0702',
      },
    ];
    const result = buildTree(data, {
      key: 'Id',
      parentKey: 'ParentId',
      levelKey: 'ClassifyLevel',
    });

    expect(result).toEqual([
      {
        ClassifyLevel: 1,
        ClassifyName: '测试分类',
        CompanyId: '0702',
        Id: 'ab3a5f1c-3da2-4ecd-9140-e63583a7aede',
        ParentId: null,
        children: [
          {
            ClassifyLevel: 2,
            ClassifyName: '测试分类-1',
            CompanyId: '0702',
            Id: 'fbe4ca8d-2a82-4eb0-9f4c-6ba76488f3f8',
            ParentId: 'ab3a5f1c-3da2-4ecd-9140-e63583a7aede',
            children: [
              {
                ClassifyLevel: 3,
                ClassifyName: '测试分类-1-1',
                CompanyId: '0702',
                Id: 'a086b0d4-efdc-49ed-bacb-09f875d7a586',
                ParentId: 'fbe4ca8d-2a82-4eb0-9f4c-6ba76488f3f8',
                children: [
                  {
                    ClassifyLevel: 4,
                    ClassifyName: '测试分类-1-1-11',
                    CompanyId: '0702',
                    Id: '228debab-8f40-40bd-9eb6-8cdae237469f',
                    ParentId: 'a086b0d4-efdc-49ed-bacb-09f875d7a586',
                    children: [
                      {
                        ClassifyLevel: 5,
                        ClassifyName: '测试分类-1-1-111',
                        CompanyId: '0702',
                        Id: '70ebe1d7-2388-4a2a-93a2-e0694f4312d6',
                        ParentId: '228debab-8f40-40bd-9eb6-8cdae237469f',
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
  });
});
