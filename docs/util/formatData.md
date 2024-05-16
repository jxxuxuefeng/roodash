# formatData

`1.3.0`

格式化输入的数据(对象或数组)

## 基本用法
根据提供的选项进行数据格式化，包括映射关系、是否保留原始键以及额外的数据

```typescript
import { formatData } from 'roodash';

const data = {
  name: 'roodash',
  age: 1,
}

const options = {
  map: {
    name: 'title',
    age: 'years',
  },
}
const result = formatData(data, options)
console.log(result);
// => {title: 'roodash', years: 1}

const options = {
    map: {
        name: 'title',
        age: 'years',
    },
    keep: true,
    extra: {
        version: '1.3.0',
    },
}

const result = formatData(data, options);
console.log(result);
// => {
//     name: 'roodash',
//     age: 1,
//     title: 'roodash',
//     years: 1,
//     version: '1.3.0',
// }

const result = formatData(data, options);
console.log(result);
// => [{
//     title: 'roodash',
//     years: 1,
//     version: '1.3.0',
// }]
```

## 参数

| 属性        | 说明         | 类型                                               | 默认值  | 版本      | 是否必填 |
|-----------|------------|--------------------------------------------------|------|---------|------|
| `data`    | 传入的数据对象或数组 | `Record<string, any>` \| `Record<string, any>[]` | -    | `1.3.0` | 是    |
| `options` | 可选参数       | [`FormatDataOptions`](#formatdataoptions)        | `{}` | `1.3.0` | 否    |


### FormatDataOptions
| 属性        | 说明       | 类型                       | 默认值        | 版本      | 是否必填 |
|-----------|----------|--------------------------|------------|---------|------|
| `map`     | 映射关系     | `Record<string, string>` | `{}`       | `1.3.0` | 否    |
| `keep`    | 是否保留原始键  | `boolean`                | `false`    | `1.3.0` | 否    |
| `extra`   | 额外的数据    | `Record<string, any>`    | `{}`       | `1.3.0` | 否    |
| `deep`    | 是否深度格式化  | `boolean`                | `false`    | `1.4.0` | 否    |
| `deepKey` | 深度格式化key | `string`                 | `children` | `1.4.0` | 否    |
| `deepKeyMap` | 深度格式化 key 映射值 | `string`                 | `children` | `1.5.0` | 否    |