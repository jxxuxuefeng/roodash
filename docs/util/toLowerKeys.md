# toLowerKeys

`1.10.0`

将属性名转为小写开头

## 基本用法
遍历对象或者数组，将属性名转为小写开头

```typescript
import { toLowerKeys } from 'roodash';

const data = {
  Name: 'roodash',
  Age: 1,
}

const result = toLowerKeys(data);

console.log(result);

// => {name: 'roodash', age: 1}

```

## 参数

| 属性     | 说明    | 类型                                               | 默认值 | 版本       | 是否必填 |
|--------|-------|--------------------------------------------------|-----|----------|------|
| `data` | 传入的数据 | `Record<string, any>` \| `Record<string, any>[]` | -   | `1.10.0` | 是    |

