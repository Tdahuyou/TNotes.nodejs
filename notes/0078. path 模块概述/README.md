# [0078. path 模块概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0078.%20path%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - `path.join([...paths])`](#2--demos1---pathjoinpaths)
- [3. 💻 demos.2 - `path.resolve([...paths])`](#3--demos2---pathresolvepaths)
- [4. 💻 demos.3 - `path.basename(path[, ext])`](#4--demos3---pathbasenamepath-ext)
- [5. 💻 demos.4 - `path.dirname(path)`](#5--demos4---pathdirnamepath)
- [6. 💻 demos.5 - `path.extname(path)`](#6--demos5---pathextnamepath)
- [7. 💻 demos.6 - `path.isAbsolute(path)`](#7--demos6---pathisabsolutepath)
- [8. 💻 demos.7 - `path.parse(path)` 和 `path.format(pathObject)`](#8--demos7---pathparsepath-和-pathformatpathobject)
- [9. 💻 demos.8 - `path.normalize(path)`](#9--demos8---pathnormalizepath)
- [10. 💻 demos.9 - `path.posix` 和 `path.win32`](#10--demos9---pathposix-和-pathwin32)

<!-- endregion:toc -->

## 1. 📒 概述

- **`path` 模块**：
  - `path` 模块在 Node.js 中主要是用来处理 **文件路径** 的。
  - `path` 模块提供了一系列方法来操作文件路径字符串，无论是绝对路径还是相对路径，都可以通过 `path` 模块进行解析、规范化和拼接等操作。
- **主要功能**：
  - 解析和规范化路径。
    - 由于路径在不同的操作系统中有不同的格式（例如 Windows 使用反斜杠 `\`，而 Unix/Linux 使用正斜杠 `/`），`path` 模块能够根据运行环境自动适配这些差异，从而确保跨平台兼容性。
  - 提取路径中的不同部分（如目录名、文件名、扩展名等）。
  - 拼接路径片段。
  - 判断路径是否为绝对路径。
- **注意事项**：
  - `path` 模块关注的是路径的处理，它 care 路径是否真实有效，比如你随便传递一个 `foo/bar` 不存在的路径，`path` 模块也能正常工作，并不会报错。
- **跨平台**：
  - 为了更好地支持跨平台开发，`path` 模块提供了两个子模块：`path.posix` 和 `path.win32`
  - **`path.posix`**：强制使用 POSIX 风格的路径（适用于 Unix/Linux 系统）。
  - **`path.win32`**：强制使用 Windows 风格的路径。
- **常用方法**：

| 方法名 | 描述 |
| --- | --- |
| `path.join([...paths])` | 将多个路径片段拼接成一个完整的路径，并规范化路径。 |
| `path.resolve([...paths])` | 将路径片段解析为绝对路径，从右向左解析直到生成绝对路径。 |
| `path.basename(path[, ext])` | 获取路径中的文件名部分，可选去除扩展名。 |
| `path.dirname(path)` | 获取路径中的目录部分。 |
| `path.extname(path)` | 获取路径中的文件扩展名，如果没有扩展名则返回空字符串。 |
| `path.isAbsolute(path)` | 判断给定路径是否为绝对路径格式。 |
| `path.parse(path)` | 将路径解析为对象形式，包含 `root`、`dir`、`base`、`ext` 和 `name`。 |
| `path.format(pathObject)` | 将路径对象重新格式化为字符串路径。 |
| `path.normalize(path)` | 规范化路径，去除多余的 `..`、`.` 和重复的分隔符。 |

## 2. 💻 demos.1 - `path.join([...paths])`

::: code-group

<<< ./demos/1/1.cjs {js}

:::

## 3. 💻 demos.2 - `path.resolve([...paths])`

::: code-group

<<< ./demos/2/1.cjs {js}

:::

## 4. 💻 demos.3 - `path.basename(path[, ext])`

::: code-group

<<< ./demos/3/1.cjs {js}

:::

## 5. 💻 demos.4 - `path.dirname(path)`

::: code-group

<<< ./demos/4/1.cjs {js}

:::

## 6. 💻 demos.5 - `path.extname(path)`

::: code-group

<<< ./demos/5/1.cjs {js}

<<< ./demos/5/2.cjs {js}

:::

## 7. 💻 demos.6 - `path.isAbsolute(path)`

::: code-group

<<< ./demos/6/1.cjs {js}

:::

## 8. 💻 demos.7 - `path.parse(path)` 和 `path.format(pathObject)`

::: code-group

<<< ./demos/7/1.cjs {js}

<<< ./demos/7/2.cjs {js}

<<< ./demos/7/ParsedPath.ts {ts} [ParsedPath]

<<< ./demos/7/FormatInputPathObject.ts {ts} [FormatInputPathObject]

:::

## 9. 💻 demos.8 - `path.normalize(path)`

::: code-group

<<< ./demos/8/1.cjs {js}

:::

## 10. 💻 demos.9 - `path.posix` 和 `path.win32`

::: code-group

<<< ./demos/9/1.cjs {js}

:::
