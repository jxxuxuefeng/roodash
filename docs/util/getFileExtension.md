# getFileExtension

`1.4.0`

获取文件的扩展名

### 基本用法
输入一个文件名，返回文件的扩展名

### 参数
- `filename` (string): 传入的文件名

```typescript
import { getFileExtension } from 'roodash';

getFileExtension('roodash.txt');
// => 'txt'

getFileExtension('roodash.min.js');
// => 'js'

getFileExtension('');
// => ''

```