# isDate

检查一个值是否为日期对象

### 基本用法
传入一个值并获取一个布尔值，告诉您该值是否是日期对象

```typescript
import { isDate } from 'roodash';

isDate('2019-01-01');
// false

isDate(1546300800000);
// false

isDate({});
// false

isDate([]);
// false

isDate(null);
// false

isDate(undefined);
// false

isDate(NaN);
// false

isDate(Infinity);
// false

isDate(true);
// false

isDate(0);
// false

isDate(new Date());
// true
```