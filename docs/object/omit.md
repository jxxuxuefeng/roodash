# omit

删除对象中不需要的属性

### 基本用法
给定一个对象和该对象中的键列表，返回一个没有任何给定键的新对象

```typescript
import { omit } from 'roodash'

const fish = {
    name: 'Bass',
    weight: 8,
    source: 'lake',
    brackish: false
}

omit(fish, ['name', 'source']) 
// => { weight, brackish }
```