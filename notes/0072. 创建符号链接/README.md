# [0072. 创建符号链接](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0072.%20%E5%88%9B%E5%BB%BA%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - 创建符号链接 `symlink`](#2--demos1---创建符号链接-symlink)

<!-- endregion:toc -->

## 1. 📒 概述

- 在 Node.js 中，可以使用 `fs.symlink()` 或 `fs.symlinkSync()` 方法创建符号链接。

## 2. 💻 demos.1 - 创建符号链接 `symlink`

::: code-group

<<< ./demos/1/1.cjs {js 10}

<<< ./demos/1/1.txt {txt}

<<< ./demos/1/1_link.txt {txt}

:::

- ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-19-21-31-00.png)
- 仔细观察会发现符号链接文件的右侧会有一个 `->` 标志，这表示它是一个符号链接，链接到其它文件。
