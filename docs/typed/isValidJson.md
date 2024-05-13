# isValidJson

`0.1.0`

检查一个字符串是否为有效的JSON格式

### 基本用法
传入一个字符串，返回一个布尔值，表示该字符串是否为有效的JSON格式。

```typescript
import { isValidJson } from 'roodash';

isValidJson('{"name": "John", "age": 30, "city": "New York",}');
// => false

isValidJson('  ');
// => false

isValidJson('{"name":"roodash"}');
// => true

isValidJson('[1, 2, 3]');
// => true
```