# formatData

`1.3.0`

格式化输入的数据(对象或数组)

### 基本用法
根据提供的选项进行数据格式化，包括映射关系、是否保留原始键以及额外的数据

### 参数
- `data` (Record<string, any> | Record<string, any>[]): 传入的数据对象或数组
- `options?`: 传入的参数
  - `map?` (Record<string, string>): 映射关系 默认值: `{}`
  - `keep?` (boolean): 是否保留原始键 默认值: `false`
  - `extra?` (Record<string, any>): 额外的数据 默认值: `{}`

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