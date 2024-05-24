# arrToObj

`1.8.0`

数组转对象

## 基本用法
用于将一个数组转换为一个对象，可以自定义一个数组的键值对。

```typescript
import { arrToObj } from 'roodash';

const arr = [
  { id: 1, name: 'roo' },
  { id: 2, name: 'dash' },
];

const obj = arrToObj(arr);
console.log(obj);
// => { 1: { id: 1, name: 'roo' }, 2: { id: 2, name: 'dash' } }

const arrT = [
  { id: 1, name: 'roo', children: [{ id: 3, name: 'dash' }] },
  { id: 2, name: 'dash' },
];

const objT = arrToObj(arr, { deep: true, keepDeepKey: false  });
console.log(objT);
// => { 1: { id: 1, name: 'roo' }, 2: { id: 2, name: 'dash' }, 3: { id: 3, name: 'dash' } }

```

## 参数

| 属性        | 说明         | 类型                                               | 默认值  | 版本      | 是否必填 |
|-----------|------------|--------------------------------------------------|------|---------|------|
| `data`    | 传入的数据 |`Record<string, any>[]` | -    | `1.8.0` | 是    |
| `options` | 可选参数       | [`ArrToObjOptions`](#arrToObjOptions)        | `{}` | `1.8.0` | 否    |


### ArrToObjOptions
| 属性            | 说明                | 类型        | 默认值        | 版本      | 是否必填 |
|---------------|-------------------|-----------|------------|---------|------|
| `mapKey`      | 映射key             | `string`  | `id`       | `1.8.0` | 否    |
| `deep`        | 是否深度格式化           | `boolean` | `false`    | `1.8.0` | 否    |
| `deepKey`     | 深度格式化key          | `string`  | `children` | `1.8.0` | 否    |
| `keepDeepKey` | 深度话格式时是否保留deepKey | `boolean` | `true`     | `1.8.0` | 否    |
