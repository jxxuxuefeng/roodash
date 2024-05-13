# isSymbol

检查一个值是否为Symbol

### 基本用法
传入一个值并获取一个布尔值，告诉您该值是否是Symbol

```typescript
import { isSymbol } from 'roodash';

isSymbol('foo');
// => false

isSymbol(123);
// => false

isSymbol({});
// => false

isSymbol([]);
// => false

isSymbol(null);
// => false

isSymbol(undefined);
// => false

isSymbol(NaN);
// => false

isSymbol(Infinity);
// => false

isSymbol(Symbol('foo'));
// => true
```