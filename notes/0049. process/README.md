# [0049. process](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0049.%20process)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 demos.1 - process 常见字段](#2--demos1---process-常见字段)
- [3. 💻 demos.2 - 根据 `process.platform` 判断当前系统环境](#3--demos2---根据-processplatform-判断当前系统环境)
- [4. 🔗 References](#4--references)

<!-- endregion:toc -->

## 1. 📝 概述

- process 用于获取当前 Node.js 程序状态。

## 2. 💻 demos.1 - process 常见字段

::: code-group

<<< ./demos/1/1.js [1.js]

:::

| 属性 | 说明 |
| --- | --- |
| `argv` | 返回一个数组，由命令行执行脚本时的各个参数组成 |
| `env` | 返回当前系统的环境变量 |
| `version` | 返回当前 Node.js 的版本 |
| `versions` | 返回当前 Node.js 的版本号以及依赖包 |
| `arch` | 返回当前 CPU 的架构，如 arm 或 x64 等 |
| `platform` | 返回当前运行程序所在的平台系统，如 win32、linux 等 |
| `execPath` | 返回执行当前脚本的 Node 二进制文件的绝对路径 |
| `execArgv` | 返回一个数组，成员是命令行下执行脚本时在 Node 可执行文件与脚本文件之间的命令行参数 |
| `exitCode` | 进程退出时的代码，如果进程通过 `process.exit()` 退出，不需要指定退出码 |
| `config` | 一个包含用来编译当前 Node 执行文件的 JavaScript 配置选项的对象。它与运行 ./configure 脚本生成的 config.gypi 文件相同 |
| `pid` | 当前进程的进程号 |
| `ppid` | 当前进程的父进程的进程号 |
| `title` | 进程名 |
| `arch` | 当前 CPU 的架构：arm、ia32 或者 x64 |
| `platform` | 运行程序所在的平台系统：darwin、freebsd、linux、sunos 或 win32 |

## 3. 💻 demos.2 - 根据 `process.platform` 判断当前系统环境

::: code-group

<<< ./demos/2/1.js [1.js]

:::

## 4. 🔗 References

- https://nodejs.org/api/process.html
  - 🔗 Node.js docs process
  - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-06-15-08-14.png)
