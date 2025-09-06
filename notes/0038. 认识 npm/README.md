# [0038. 认识 npm](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0038.%20%E8%AE%A4%E8%AF%86%20npm)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 npm 包数量](#2--npm-包数量)
- [3. 📒 npm 使用场景](#3--npm-使用场景)

<!-- endregion:toc -->

## 1. 📝 概述

- Node.js 使用 npm 对包进行管理，其全称为 Node Package Manager，开发人员可以使用它安装、更新或者卸载 Node.js 的模块。
- npm 是 Node.js 的标准软件包管理器，其在 2020 年 3 月 17 日被 GitHub 收购，而且保证永久免费。
- npm 是 Node.js 自带的，当你安装好 Node.js 之后，npm 就自动安装到你的计算机上了。

## 2. 📒 npm 包数量

- 在 npm 仓库中有超过 340 万个软件包，这使 npm 成为世界上最大的单一语言代码仓库，并且它几乎有可用于一切的软件包。
- 你可以在 npm 中登录账号，在侧边 `By the numbers` 卡片中查看当前的包数量。
  - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-05-12-46-20.png)
  - 注：截图时间 `2025 年 4 月 5 日`
- 以下是几个主流语言的包管理平台及其包数量（截至 2023 年）：

| **语言**   | **包管理平台** | **包数量** |
| ---------- | -------------- | ---------- |
| JavaScript | npm            | > 200 万   |
| Python     | PyPI           | > 40 万    |
| Ruby       | RubyGems       | ~ 18 万    |
| PHP        | Packagist      | ~ 30 万    |
| Java       | Maven Central  | ~ 50 万    |

## 3. 📒 npm 使用场景

- 从 npm 服务器下载第三方包到本地使用。
- 从 npm 服务器下载并安装别人编写的命令行程序到本地使用。
- 将自己编写的包或命令行程序上传到 npm 服务器供别人使用。
- npm 起初是作为下载和管理 Node.js 包依赖的方式，但其现在已经成为前端 JavaScript 中使用的通用工具。
