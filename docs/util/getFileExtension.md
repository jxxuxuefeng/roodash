# getFileExtension

`1.4.0`

获取文件的扩展名

### 基本用法
输入一个文件名，返回文件的扩展名

### 参数
| 属性        | 说明      | 类型      | 默认值  | 版本      | 是否必填 |
|------------|-----------|-----------|---------|---------|------|
| `filename` | 文件名    | `string`  | -       | `1.4.0` | 是    |


```typescript
import { getFileExtension } from 'roodash';

getFileExtension('roodash.txt');
// => 'txt'

getFileExtension('roodash.min.js');
// => 'js'

getFileExtension('');
// => ''

```