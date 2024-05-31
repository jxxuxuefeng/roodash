---
outline: deep
---

# 更新日志
`roodash` 遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布规范
- 修订版本号：bugfix 更新
- 次版本号：带有新特性的向下兼容的版本
- 主版本号：含有破坏性更新和新特性

## 1.10.1

`2024-05-31`

- 💄 优化了 [`toLowerKeys`] [`arrToObj`]的ts类型定义问题
- 💄 补全了 [`buildTree`]  [`toLowerKeys`] 的单元测试

## 1.10.0

`2024-05-29`

- 🎉 新增 [`toLowerKeys`](/util/toLowerKeys)方法

## 1.9.1
    
`2024-05-29`

- 💄 调整package.json文件 node 版本限制

## 1.9.0

`2024-05-29`

- 🎉 新增 [`buildTree`](/util/buildTree)方法

## 1.8.0

`2024-05-24`

- 🎉 新增 [`arrToObj`](/util/arrToObj)方法


## 1.7.0

`2024-05-23`

- 🎉 新增 [`formatBytes`](/util/formatBytes)方法

## 1.6.0

`2024-05-16`

- 🎉 新增 [`generateUUID`](/util/generateUUID)方法

## 1.5.0

`2024-05-16`

- 🆕 新增 [`formatData`](/util/formatData)方法的 `deepKeyMap`参数
- 🐞 修复 [`formatData`](/util/formatData)方法的 `deep` 为 true 时，传入数据的`deepKey`子集为`对象`时无法正确格式化的问题

## 1.4.0

`2024-05-16`

- 🎉 新增 [`getFileExtension`](/util/getFileExtension)方法
- 🆕 新增 [`formatData`](/util/formatData)方法的 `deep` 和 `deepKey` 参数
- 💄 优化 [`cloneDeep`](/util/cloneDeep) [`throttle`](/util/throttle) [`debounce`](/util/debounce)文档参数说明

## 1.3.0

`2024-05-15`

- 🎉 新增 [`formatData`](/util/formatData)方法

## 1.2.0

`2024-05-14`

- 🎉 新增 [`debounce`](/util/debounce)方法
- 🎉 新增 [`throttle`](/util/throttle)方法

## 1.1.0

`2024-05-13`

- 🎉 新增 [`cloneDeep`](/util/cloneDeep)方法

## 1.0.0

`2024-05-09`

- 🔥 1.0.0正式版本发布
- 🎉 新增 [`isObject`](/typed/isObject)方法
- 🎉 新增 [`isFunction`](/typed/isFunction)方法
- 🎉 新增 [`isString`](/typed/isString)方法
- 🎉 新增 [`isNumber`](/typed/isNumber)方法
- 🎉 新增 [`isDate`](/typed/isDate)方法
- 🎉 新增 [`isSymbol`](/typed/isSymbol)方法
- 🎉 新增 [`isEmpty`](/typed/isEmpty)方法
- 🎉 新增 [`isEqual`](/typed/isEqual)方法
- 🎉 新增 [`omit`](/object/omit)方法
- 🎉 新增 [`pick`](/object/pick)方法

## 0.2.0

`2024-05-09`

- 🎉 新增 [`isArray`](/typed/isArray)方法

## 0.1.0

`2024-05-08`

- 🔥 初始版本发布
- 🎉 新增 [`local`](/storage/local) 方法
- 🎉 新增 [`session`](/storage/session) 方法
- 🎉 新增 [`isValidJson`](/typed/isValidJson)方法