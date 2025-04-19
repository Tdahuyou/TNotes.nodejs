# [0069. 文件重命名](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0069.%20%E6%96%87%E4%BB%B6%E9%87%8D%E5%91%BD%E5%90%8D)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - 重命名文件 - `rename`](#2--demos1---重命名文件---rename)
- [3. 💻 demos.2 - 照片儿批量重命名 - `rename`](#3--demos2---照片儿批量重命名---rename)

<!-- endregion:toc -->

## 1. 📒 概述

- 可以使用 `fs.rename()` 或其同步版本 `fs.renameSync()` 实现重命名文件或移动文件到另一个位置。

## 2. 💻 demos.1 - 重命名文件 - `rename`

::: code-group

<<< ./demos/1/1.cjs {js 10}

:::

## 3. 💻 demos.2 - 照片儿批量重命名 - `rename`

- 场景描述：
  - 你有一个存放照片儿的文件夹，你想要对这些照片儿批量重命名。
- 重命名的规则：
  - 按照图片的创建时间排序，第一个文件重命名为 1.png，第二个文件重命名为 2.png，以此类推。

::: code-group

<<< ./demos/2/1.cjs {js}

:::
