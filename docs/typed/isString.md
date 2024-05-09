# isString

检查一个值是否为字符串

### 基本用法
传入一个值并获取一个布尔值，告诉您该值是否是字符串

```typescript
import { isString } from 'roodash';

isString(123);
// false

isString(null);
// false

isString(undefined);
// false

isString({});
// false

isString([]);
// false

isString(() => {});
// false

isString(true);
// false

isString(Symbol('foo'));
// false

isString(new Date());
// false

isString('hello');
// true
```