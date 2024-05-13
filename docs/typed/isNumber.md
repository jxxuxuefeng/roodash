# isNumber

检查一个值是否为数字

### 基本用法
传入一个值并获取一个布尔值，告诉您该值是否是数字

```typescript
import { isNumber } from 'roodash';

isNumber('1');
// => false

isNumber(NaN);
// => false

isNumber(Infinity);
// => false

isNumber(-Infinity);
// => false

isNumber('1');
// => false

isNumber(() => {});
// => false

isNumber({});
// => false

isNumber([]);
// => false

isNumber(null);
// => false

isNumber(undefined);
// => false

isNumber(true);
// => false

isNumber(Symbol('1'));
// => false

isNumber(new Date());
// => false

isNumber(1);
// => true
```