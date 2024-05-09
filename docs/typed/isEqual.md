# isEqual

检查两个值是否相等


### 基本用法
传入两个值，检查是否相等

```typescript
import { isEqual } from 'roodash';

isEqual('hello', 'world')
// false

isEqual(22, 'abc')
// false

isEqual(null, null) 
// true

isEqual([], [])     
// true
```