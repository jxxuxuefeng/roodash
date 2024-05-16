# debounce

`1.2.0`

一个简单的防抖函数

### 基本用法
创建一个防抖函数会合并多次调用为一次调用，只会在最后一次调用后过 `wait` 毫秒后执行

### 参数
| 属性     | 说明      | 类型         | 默认值   | 版本      | 是否必填 |
|--------|---------|------------|-------|---------|------|
| `func` | 要防抖的函数  | `Function` | -     | `1.2.0` | 是    |
| `wait` | 防抖的时间间隔 | `number`   | `300` | `1.2.0` | 否    |

```typescript
import { debounce } from 'roodash';

const debounced = debounce((value: string) => {
  console.log(value);
}, 1000);

debounced('a');

setTimeout(() => {
  debounced('b');
}, 200);

setTimeout(() => {
  debounced('c');
}, 500);

// after 1000ms

// => c

```