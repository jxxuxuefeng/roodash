# pick

仅从对象中选取所需的属性

### 基本用法
给定一个对象和该对象中的键列表，返回一个仅包含给定键的新对象

```typescript
import { pick } from 'roodash'

const fish = {
    name: 'Bass',
    weight: 8,
    source: 'lake',
    barckish: false
}

pick(fish, ['name', 'source'])
// { name, source }
```