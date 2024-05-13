# isFunction

`1.0.0`

检查一个值是否为函数

### 基本用法
传入一个值并获取一个布尔值，告诉您该值是否是一个函数

```typescript
import { isFunction } from 'roodash';

isFunction('hello');
// => false

isFunction(1);
// => false

isFunction(true);
// => false

isFunction(undefined);
// => false

isFunction(null);
// => false

isFunction([1,2,3]);
// => false

isFunction(new Date());
// => false

isFunction(function(){});
// => true
```