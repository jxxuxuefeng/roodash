# isArray

`0.2.0`

检查一个值是否为数组

### 基本用法
传入一个值并获取一个布尔值，告诉您该值是否是数组

```typescript
import { isArray } from 'roodash';

isArray('hello');
// => false

isArray(1);
// => false

isArray(true);
// => false

isArray(undefined);
// => false

isArray(null);
// => false

isArray(function(){});
// => false

isArray({name: 'roodash'});
// => false

isArray([1,2,3]);
// => true
```