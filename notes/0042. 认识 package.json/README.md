# [0042. 认识 package.json](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0042.%20%E8%AE%A4%E8%AF%86%20package.json)

<!-- region:toc -->

- [1. 🔗 npm docs package.json](#1--npm-docs-packagejson)
- [2. 📒 概述](#2--概述)
- [3. 💻 `package.json` 的初始化](#3--packagejson-的初始化)
- [4. 📒 `package.json` 文件的基本结构](#4--packagejson-文件的基本结构)
- [5. 📒 `package.json` 的其他常用字段](#5--packagejson-的其他常用字段)

<!-- endregion:toc -->

## 1. 🔗 npm docs package.json

- https://docs.npmjs.com/cli/v9/configuring-npm/package-json
- 这是 npm 的官方对 `package.json` 文件的说明。

## 2. 📒 概述

- **`package.json` 是什么？**
  - `package.json` 是 Node.js 项目的核心配置文件，采用 JSON 格式，用于定义项目的元数据、依赖项、脚本命令以及其他配置信息。它是 Node.js 和 npm（Node Package Manager）生态系统的重要组成部分。
- **`package.json` 的主要作用：**
  1. **定义元信息**：包括项目名称、版本号、描述、作者、许可证等基本信息。
  2. **管理依赖**：明确列出项目所需的生产环境和开发环境依赖及其版本范围，便于安装和更新。
  3. **定义脚本命令**：提供快捷的脚本命令（如启动、测试、构建），简化开发和部署流程。
  4. **提供配置信息**：支持额外的配置选项，例如运行环境要求（`engines`）、代码仓库地址（`repository`）等。
- 通过合理配置 `package.json`，可以显著提升项目的可维护性、协作效率和一致性。

## 3. 💻 `package.json` 的初始化

- 可以通过以下方式创建一个 `package.json` 文件：
  - **手动创建**：简单粗暴，直接创建一个符合 `package.json` 格式要求的文件。
  - **使用命令行工具**：`npm init [-y]`

```bash
npm init [-y]
# 其中参数 -y 是可选的

npm init
# 这会引导你填写项目的相关信息，并生成一个 package.json 文件。

npm init -y
# 这会快速生成一个 package.json 文件。
# -y 参数的作用：相关字段自动填写默认值。
```

## 4. 📒 `package.json` 文件的基本结构

- `package.json` 文件的基本结构如下：

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

- **基本信息**
  - `name`：应用程序或软件包的名称。名称必须少于 214 个字符，且不能包含空格，只能包含小写字母、连字符 `-` 或下画线 `_`。
  - `version`：项目的版本号，遵循语义化版本控制（SemVer），这意味着版本始终以 3 个数字表示 `x.x.x`，格式为 `主版本号.次版本号.修订号`。
  - `description`：应用程序/软件包的简短描述。如果要将软件包发布到 npm，则这个属性特别有用，使用者可以知道该软件包的具体作用。
  - `author`：作者信息，可以是字符串或对象形式。
  - `license`：项目的开源许可证类型，例如 `MIT` 或 `Apache-2.0`。
- **入口文件**
  - `main`：指定项目的入口文件（默认是 `index.js`）。当其他模块通过 `require` 或 `import` 引用该项目时，会加载这个文件。
- **依赖管理**
  - `dependencies`
    - 记录作为生产环境依赖安装的第三方库的列表。
    - 当使用 `npm install xxx` 安装软件包时，该软件包 `xxx` 会被自动插入此列表中。
  - `devDependencies`：开发环境依赖的第三方库，例如测试工具或构建工具。这些依赖通常不会在生产环境中使用。
  - `peerDependencies`：同行依赖，用于指定当前包需要的宿主环境依赖。常见于插件开发。
  - `optionalDependencies`：可选依赖，即使安装失败也不会影响项目的运行。

```json
"dependencies": {
  "express": "^4.18.2"
},
"devDependencies": {
  "nodemon": "^2.0.20"
}
// ^ 符号的含义说明：
// 比如："express": "^4.18.2"
// 这里的 ^4.18.2 表示允许安装 4.x.x 系列的最新版本，但不会升级到 5.x.x。
```

::: info 依赖版本管理

- `package.json` 中的依赖版本号支持多种格式，常用的有下面这些：
- **固定版本**：如 `1.2.3`，表示只安装指定版本。
- **波浪号 (`~`)**：如 `~1.2.3`，表示允许安装 `1.2.x` 系列的最新版本。
- **插入号 (`^`)**：如 `^1.2.3`，表示允许安装 `1.x.x` 系列的最新版本。
- **范围**：如 `>=1.2.3 <2.0.0`，表示允许安装 `1.2.3` 到 `2.0.0` 之间的版本。

:::

- **脚本命令**
  - `scripts`：定义一组可以运行的 Node.js 脚本，这些脚本是命令行应用程序。可以通过调用 `npm run xxx` 来运行它们，其中的 `xxx` 是命令的名称。例如 `npm run dev`。

```json
"scripts": {
  "start": "node index.js",
  "test": "jest",
  "build": "webpack"
}
// 解释：
// npm start 会运行 node index.js。
// npm test 会运行 jest。
// npm run build 会运行 webpack。

// 补充说明：
// npm run start 相当于 npm start
// npm run test 相当于 npm test
// 因为 start 和 test 是 npm 自带的命令，所以不需要加 run 写成 npm run xxx，可以直接简写 npm xxx。
```

## 5. 📒 `package.json` 的其他常用字段

- `keywords`: 关键词数组，用于描述项目的功能，方便在 npm 上搜索。
- `contributors`：除作者外，该项目可以有一个或多个贡献者，此属性是列出他们的数组。
- `repository`: 项目的代码仓库地址，通常是一个 GitHub 链接。
  - 也可以配置为一个对象，并通过 `type` 字段来指定仓库所使用的版本管理工具类型，如 `git`、`svn`。
- `bugs`: 提交问题的链接，通常是 GitHub Issues 的地址。
- `homepage`: 项目的主页 URL。
- `private`：如果设置为 true，则可以防止应用程序/软件包被意外发布到 npm 上。
- `engines`: 指定运行项目所需的 Node.js 和 npm 版本。例如：

```json
"engines": {
  "node": ">=16.0.0",
  "npm": ">=7.0.0"
}
```

- **🤔 在 `package.json` 文件中只能写官方指定的具有特殊含义的字段吗？可以添加自定义字段吗？**
  - 答：可以。
  - 这玩意儿是非常灵活的，比如你想要添加字段 `abc`、`123`，直接写进去就完事儿了，只不过默认情况下它没啥用罢了，但你可以自行编写逻辑去读取这些字段的值，并进行处理，使其具备一定的功能。
