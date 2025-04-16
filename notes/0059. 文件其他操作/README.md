# [0059. 文件其他操作](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0059.%20%E6%96%87%E4%BB%B6%E5%85%B6%E4%BB%96%E6%93%8D%E4%BD%9C)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - 截断文件 - `truncate()`](#2--demos1---截断文件---truncate)
- [3. 💻 demos.2 - 删除文件 - `unlink()`](#3--demos2---删除文件---unlink)
- [4. 💻 demos.3 - 复制文件 - 使用流 `stream` 的方式](#4--demos3---复制文件---使用流-stream-的方式)
- [5. 💻 demos.4 - 复制文件 - `copyFile()`](#5--demos4---复制文件---copyfile)
- [6. 💻 demos.5 - 重命名文件 - `rename`](#6--demos5---重命名文件---rename)

<!-- endregion:toc -->

## 1. 📒 概述

- 文件其他操作主要包括：截断文件、删除文件、复制文件和重命名文件。
- **截断文件**
  - 截断文件意味着改变文件的大小。
  - 使用 `fs.truncate()` 或其同步版本 `fs.truncateSync()` 可以实现这一功能。
  - 截断的两种情况：
    - 如果指定的新长度小于文件当前的长度，则文件会被裁剪；
    - 如果新长度大于当前长度，文件会扩展并在末尾填充空字节；
- **删除文件**
  - 要删除一个文件，可以使用 `fs.unlink()` 或其同步版本 `fs.unlinkSync()`。
- **复制文件**
  - 做法 1：将文件从一个位置复制到另外一个位置；
    - 通过 `fs.copyFile()` 或其同步版本 `fs.copyFileSync()` 来实现文件的复制。
  - 做法 2：从原文件中读取数据并写入一个新文件中；
    - 可以通过流（streams）或结合 `fs.read()` 和 `fs.write()` 方法来实现。
    - 使用流是更常见的方式。
- **重命名文件**
  - 重命名文件或移动文件到另一个位置，可以使用 `fs.rename()` 或其同步版本 `fs.renameSync()`。

## 2. 💻 demos.1 - 截断文件 - `truncate()`

::: code-group

<<< ./demos/1/1.cjs {9 js}

<<< ./demos/1/1.txt {txt}

<<< ./demos/1/2.cjs {9 js}

<<< ./demos/1/2.txt {txt}

:::

- `1.cjs` 截断的长度 3 小于文件内容长度 6。
  - 指定的新长度小于文件当前的长度，则文件会被裁剪。
- `2.cjs` 截断的长度 10 大于文件内容长度 6。
  - 新长度大于当前长度，文件会扩展并在末尾填充空字节。
  - 这些空字节在以 UTF-8 编码打开预览时会以乱码的形式呈现。
  - ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-16-21-28-54.png)

## 3. 💻 demos.2 - 删除文件 - `unlink()`

::: code-group

<<< ./demos/2/1.cjs {12 js}

:::

## 4. 💻 demos.3 - 复制文件 - 使用流 `stream` 的方式

::: code-group

<<< ./demos/3/1.cjs {js}

<<< ./demos/3/1.txt {txt}

<<< ./demos/3/2.txt {txt}

:::

## 5. 💻 demos.4 - 复制文件 - `copyFile()`

::: code-group

<<< ./demos/4/1.cjs {10 js}

<<< ./demos/4/1.txt {txt}

<<< ./demos/4/2.txt {txt}

:::

## 6. 💻 demos.5 - 重命名文件 - `rename`

::: code-group

<<< ./demos/5/1.cjs {10 js}

:::
