# [0065. 查看目录或文件信息](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0065.%20%E6%9F%A5%E7%9C%8B%E7%9B%AE%E5%BD%95%E6%88%96%E6%96%87%E4%BB%B6%E4%BF%A1%E6%81%AF)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - 查看目录或文件信息 `stat`](#2--demos1---查看目录或文件信息-stat)
- [3. 💻 demos.2 - 检查是文件还是目录](#3--demos2---检查是文件还是目录)

<!-- endregion:toc -->

## 1. 📒 概述

- **异步方法**：`fs.stat(path, callback)`。
- **同步方法**：`fs.statSync(path)`。
- **返回值**：返回一个 `fs.Stats` 对象，包含文件或目录的详细信息。
  - `fs.Stats` 对象提供了以下常用方法和属性：
  - `isFile()`：判断是否为文件。
  - `isDirectory()`：判断是否为目录。
  - `size`：文件的大小（以字节为单位）。
  - `mtime`：最后修改时间。
  - `ctime`：创建时间或元数据更改时间。
  - `birthtime`：文件的创建时间（仅在某些操作系统上支持）。
- **跨平台兼容性**：
  - 文件的创建时间（`birthtime`）在某些操作系统（如 Windows）上支持，但在 Linux 上可能不可用。
- **符号链接**：
  - 如果路径是一个符号链接，`fs.stat()` 会解析符号链接并返回目标文件或目录的状态信息。
  - 如果需要直接获取符号链接本身的信息，可以使用 `fs.lstat()` 或 `fs.lstatSync()`。
- **ENOENT 错误**：
  - 如果传入的路径不存在，则会报错 `ENOENT`。

## 2. 💻 demos.1 - 查看目录或文件信息 `stat`

::: code-group

<<< ./demos/1/1.cjs {js 7}

<<< ./demos/1/1.txt {txt}

:::

## 3. 💻 demos.2 - 检查是文件还是目录

::: code-group

<<< ./demos/2/1.cjs {js 11}

<<< ./demos/2/1.txt {txt}

:::
