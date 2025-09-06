# [0040. npm 版本](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0040.%20npm%20%E7%89%88%E6%9C%AC)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 查看 npm 版本](#2--查看-npm-版本)
- [3. 💻 npm 版本升级](#3--npm-版本升级)
- [4. 💻 安装最新的 npm 版本](#4--安装最新的-npm-版本)

<!-- endregion:toc -->

## 1. 📝 概述

- npm 版本管理相关命令：
  - 查看 npm 版本：`npm -v`
  - npm 版本升级：`npm install -g npm`
  - 查看最新的 npm 版本：`npm show npm version`
  - 安装指定的 npm 版本：`npm install -g npm@版本号`
- “安全升级”机制：
  - 通常不需要安装指定的 npm 版本，因为 npm 的版本更新机制是“安全升级”，当你执行 `npm install -g npm` 的时候，会根据当前所使用的 Node.js 版本安装合适的 npm 版本。
  - 比如，当你的 node 版本是 `v20.14.0` 的时候，执行 `npm install -g npm` 会安装 `10.9.2` 版本的 npm。
  - 比如，当你的 node 版本是 `v23.11.0` 的时候，执行 `npm install -g npm` 会安装 `11.2.0` 版本的 npm。

## 2. 💻 查看 npm 版本

```bash
npm -v
```

- ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-05-12-49-26.png)

## 3. 💻 npm 版本升级

```bash
# 虽然 Node.js 自带 npm，但有可能不是最新的版本
# 这时可以使用下面的命令对 npm 的版本进行升级
npm install -g npm
```

- ![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-05-12-49-46.png)

```bash
npm -v # 查看当前的 npm 版本
# 10.9.1
npm install npm -g # 升级 npm 到最新版本
# removed 15 packages, and changed 20 packages in 2s
# 25 packages are looking for funding
#   run `npm fund` for details
npm -v # 查看升级后的 npm 版本
# 10.9.2
```

## 4. 💻 安装最新的 npm 版本

```bash
# 查看当前最新的 npm 版本
npm show npm version
```

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-05-12-57-48.png)

- **🤔 为什么上面执行 `npm install npm -g` 之后没有下载到最新的 `npm` 版本呢？**
  - **npm 的更新机制 - 安全升级**
    - npm 的版本更新策略默认倾向于“安全升级”，而不是直接跳到最新版本。
    - 当你运行 `npm install npm -g` 时，npm 会根据你的当前版本和 Node.js 环境选择一个“适合”的新版本进行安装。
    - 如果你的 Node.js 版本较低，npm 可能会选择一个与当前环境兼容的中间版本（如 `10.9.2`），而不是最新版本（`11.2.0`）。
    - 这种行为通常是为了确保兼容性，避免因版本差异过大而导致潜在问题。
  - **Node.js 和 npm 的耦合关系**
    - npm 是 Node.js 的包管理工具，两者的版本之间存在一定的依赖关系。
    - 如果你的 Node.js 版本较旧，可能会限制 npm 升级到最新版本。例如，某些 npm 版本可能需要更高版本的 Node.js 才能正常运行。

```bash
npm show node version # 查看当前最新的 Node.js 版本
node -v # 查看本地安装的 Node.js 版本
```

- ![图 4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-05-13-04-39.png)
- 如果把本地的 Node.js 版本升级到最新版，再执行 `npm install -g npm` 安装 npm，下载的就是最新版了。

```bash {1,8,12}
nvm i 23 # 使用 nvm 安装最新版本的 Node.js（nvm 是 Node.js 的版本管理工具，后续会介绍。）
# Downloading and installing node v23.11.0...
# Downloading https://nodejs.org/dist/v23.11.0/node-v23.11.0-darwin-arm64.tar.xz...
#################################################################################################################################### 100.0%
# Computing checksum with shasum -a 256
# Checksums matched!
# Now using node v23.11.0 (npm v10.9.2)
npm install -g npm # 重新安装 npm 最新版
# removed 13 packages, and changed 54 packages in 1s
# 24 packages are looking for funding
#   run `npm fund` for details
npm -v # 查看当前的 npm 版本
# 11.2.0
```
