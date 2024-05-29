# buildTree

`1.9.0`

将一个扁平的数组结构转换为树形结构

## 基本用法
用于将一组带有父子关系的数据转换为树形结构

```typescript
import { buildTree } from 'roodash';

const data = [
    {id: 1, pId: null, name: '张三'},
    {id: 2, pId: 1, name: '李四'},
    {id: 3, pId: 1, name: '王五'},
    {id: 4, pId: 2, name: '赵六'},
    {id: 5, pId: 2, name: '孙七'},
]

const tree = buildTree(data);

console.log(tree);

// => [
//     {
//         id: 1,
//         pId: null,
//         name: '张三',
//         level: 1,
//         children: [
//             {
//                 id: 2,
//                 pId: 1,
//                 name: '李四',
//                 level: 2,
//                 children: [
//                     {id: 4, pId: 2, name: '赵六', level: 3, children: []},
//                     {id: 5, pId: 2, name: '孙七', level: 3, children: []}
//                 ]
//             },
//             {id: 3, pId: 1, name: '王五', level: 2, children: []}
//         ]
//     }
// ]
```

## 参数

| 属性        | 说明    | 类型                                      | 默认值  | 版本      | 是否必填 |
|-----------|-------|-----------------------------------------|------|---------|------|
| `data`    | 传入的数据 | `Record<string, any>[]`                 | -    | `1.9.0` | 是    |
| `options` | 可选参数  | [`BuildTreeOptions`](#buildTreeOptions) | `{}` | `1.9.0` | 否    |


### BuildTreeOptions
| 属性            | 说明      | 类型                    | 默认值        | 版本      | 是否必填 |
|---------------|---------|-----------------------|------------|---------|------|
| `key`         | 主键节点key | `string`              | `id`       | `1.9.0` | 否    |
| `parentKey`   | 父节点key  | `string`              | `pId`      | `1.9.0` | 否    |
| `childrenKey` | 子节点key  | `string`              | `children` | `1.9.0` | 否    |
| `levelKey`    | 层级key   | `string`              | `level`    | `1.9.0` | 否    |
| `extra`       | 额外的数据   | `Record<string, any>` | `{}`       | `1.9.0` | 否    |
