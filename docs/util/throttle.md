# throttle

`1.2.0`

一个简单的节流函数

### 基本用法
创建一个节流函数，在`wait` 毫秒内最多执行一次`func`函数

### 参数
- `func` (Function): 要防抖的函数
- `wait` (number): 节流的时间间隔

```typescript
import { throttle } from 'roodash';

const throttled = throttle((value: string) => {
  console.log(value);
}, 1000);

throttled('a');

setTimeout(() => {
  throttled('b');
}, 200);

setTimeout(() => {
  throttled('c');
}, 500);

// after 1000ms

// => a
```