# [0064. 读取目录内容](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0064.%20%E8%AF%BB%E5%8F%96%E7%9B%AE%E5%BD%95%E5%86%85%E5%AE%B9)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - 读取目录内容 `readdir`](#2--demos1---读取目录内容-readdir)
- [3. 💻 demos.1 - 读取不存在的目录会报错](#3--demos1---读取不存在的目录会报错)

<!-- endregion:toc -->

## 1. 📒 概述

| 方法名          | 功能描述         |
| --------------- | ---------------- |
| `readdir()`     | 异步读取目录内容 |
| `readdirSync()` | 同步读取目录内容 |

## 2. 💻 demos.1 - 读取目录内容 `readdir`

::: code-group

<<< demos/1/1.cjs {js 9}

:::

## 3. 💻 demos.1 - 读取不存在的目录会报错

::: code-group

<<< demos/2/1.cjs {js 9}

:::
