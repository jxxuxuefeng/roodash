# isObject

检查一个值是否为对象

### 基本用法
传入一个值并获取一个布尔值，告诉您该值是否是对象

```typescript
import { isObject } from 'roodash';

isObject('hello');
// => false

isObject(1);
// => false

isObject(true);
// => false

isObject(undefined);
// => false

isObject(null);
// => false

isObject(function(){});
// => false

isObject([1,2,3]);
// => false

isObject(new Date());
// => false

isObject({name: 'roodash'});
// => true
```