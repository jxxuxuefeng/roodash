# formatBytes

`1.7.0`

格式化字节

## 基本用法
接受一个以字节为单位的文件大小，并返回一个包含适当单位（B, KB, MB, GB 等）的易读字符串

```typescript
import { formatBytes } from 'roodash'

formatBytes(1024)
// => 1.00KB

formatBytes(1048576)
// => 1.00MB

formatBytes(1073741824)
// => 1.00GB

formatBytes(1099511627776, 0)
// => 1TB

```

## 参数
| 属性    | 说明      | 类型       | 默认值 | 版本      | 是否必填 |
|-------|---------|----------|-----|---------|------|
| `size` | 文件大小，以字节为单位 | `number` | -   | `1.7.0` | 是    |
| `precision` | 保留的小数位数 | `number` | 2   | `1.7.0` | 否    |
