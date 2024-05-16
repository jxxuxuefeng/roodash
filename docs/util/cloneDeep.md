# cloneDeep

`1.1.0`

深拷贝对象或者数组

## 基本用法
给定一个值,返回一个深度复制的值

```typescript
import { cloneDeep } from 'roodash'

const fish = {
    name: 'Bass',
    person: {
        name: '张三',
        age: 18
    }
}

const cloneFish = cloneDeep(fish);
console.log(fish === cloneFish);
// => false
```

## 参数
| 属性    | 说明         | 类型                   | 默认值 | 版本      | 是否必填 |
|-------|------------|----------------------|-----|---------|------|
| `obj` | 要深拷贝的对象或数组 | `Object`  \| `Array` | -   | `1.1.0` | 是    |