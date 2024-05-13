# isEmpty

检查一个值是否为空

### 基本用法
传入一个值并获取一个布尔值，告诉您该值是否是空的

```typescript
import { isEmpty } from 'roodash';

class Data {}
isEmpty(new Data())
// => false

isEmpty(new Date());
// => false

isEmpty('foo');
// => false

isEmpty(1);
// => false

isEmpty({ foo: 'bar' });
// => false

isEmpty([1, 2, 3]);
// => false

isEmpty(Symbol('foo'));
// => false

isEmpty(new Date());
// => false

isEmpty(() => {});
// => false

isEmpty(/foo/);
// => false

isEmpty(null);
// => true

isEmpty(undefined);
// => true

isEmpty(0);
// => true

isEmpty(true);
// => true

isEmpty(false);
// => true

isEmpty([]);
// => true

isEmpty({});
// => true

isEmpty('');
// => true

isEmpty(String());
// => true

isEmpty(new Date('invalid value'));
// => true

isEmpty(NaN);
// => true

isEmpty(Infinity);
// => true
```