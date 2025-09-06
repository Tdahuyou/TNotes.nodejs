# [0041. 常见的 npm 命令](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🔍 npm 命令速查](#3--npm-命令速查)
- [4. 💻 npm 命令 - 安装包](#4--npm-命令---安装包)
- [5. 💻 npm 命令 - 查看已安装的包](#5--npm-命令---查看已安装的包)
- [6. 💻 npm 命令 - 卸载包](#6--npm-命令---卸载包)
- [7. 💻 npm 命令 - 更新包](#7--npm-命令---更新包)
- [8. 💻 npm 命令 - 查看 npm 版本](#8--npm-命令---查看-npm-版本)
- [9. 💻 npm 命令 - 清理缓存](#9--npm-命令---清理缓存)
- [10. 💻 npm 命令 - 搜索包](#10--npm-命令---搜索包)
- [11. 💻 npm 命令 - 查看包信息](#11--npm-命令---查看包信息)
- [12. 💻 npm 命令 - 初始化项目](#12--npm-命令---初始化项目)
- [13. 💻 npm 命令 - 运行脚本](#13--npm-命令---运行脚本)
- [14. 💻 npm 命令 - 查看帮助文档](#14--npm-命令---查看帮助文档)
- [15. 💻 npm 命令 - 查看 npm 配置](#15--npm-命令---查看-npm-配置)
- [16. 🔗 引用](#16--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- npm 命令大全
- 学会在 [npm Docs][2] 中快速查阅 npm 命令

## 2. 🫧 评价

- npm 提供了丰富的命令来管理包、依赖和项目，本文记录了一些常用的 npm 命令及其用途。
- 如果要查阅 npm 命令的官方介绍，可以上 [npm Docs][2] 查阅，介绍会更为权威和详细。
- 提示
  - 大多数命令支持 `--global` (`-g`) 参数用于全局操作。
  - 所有命令均可通过 `npm help <command>` 获取详细文档。
  - 大多命令支持缩写别名，例如 `npm i` = `npm install`，`npm un` = `npm uninstall`，`npm ls` = `npm list` 等。
  - 推荐在 CI/CD 中使用 `npm ci` 替代 `npm install` 以保证一致性。
- 补充：版本信息
  - 笔记中记录的 npm 命令速查表格记录时间：`2025 年 9 月 4 日 20:47:30`，此时的最新 npm 版本：`11.6.0`。

## 3. 🔍 npm 命令速查

- npm 官方文档 👉 [CLI Commands][1]，可以在线查阅 npm 所有命令。
  - 官方文档中的 npm 命令列表默认是升序排序的，查阅起来非常方便。
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-04-20-22-45.png)
- npm 命令速查表

| 命令 | 说明 |
| --- | --- |
| `npm access` | `Set access level on published packages`<br/>查看或管理包的访问权限（如公开/私有、团队权限），适用于组织包。 |
| `npm adduser` | `Add a registry user account`<br/>创建或登录一个 npm 用户账户（等同于 `npm login` 的注册流程）。 |
| `npm audit` | `Run a security audit`<br/>扫描项目依赖中的安全漏洞，并给出修复建议。 |
| `npm bugs` | `Bugs for a package in a web browser maybe`<br/>打开指定包的 issue tracker 页面（通常是 GitHub Issues）。 |
| `npm cache` | `Manipulates packages cache`<br/>管理 npm 缓存目录，支持查看、清理、验证等操作。 |
| `npm ci` | `Install a project with a clean slate`<br/>在持续集成环境中安装依赖，基于 `package-lock.json` 快速重建 node_modules。 |
| `npm completion` | `Tab completion for npm`<br/>启用命令行自动补全功能（适用于 bash/zsh 等 shell）。 |
| `npm config` | `Manage the npm configuration files`<br/>管理 npm 配置项，如 registry、prefix、proxy 等。 |
| `npm dedupe` | `Reduce duplication`<br/>尝试减少重复依赖，优化依赖树结构（也称为 `npm ddp`）。 |
| `npm deprecate` | `Deprecate a version of a package`<br/>为已发布的包版本添加弃用警告信息。 |
| `npm diff` | `The registry diff command`<br/>显示两个版本之间文件的差异（本地与远程或不同版本间）。 |
| `npm dist-tag` | `Modify package distribution tags`<br/>管理包版本的标签（如 `latest`、`beta` 等）。 |
| `npm docs` | `Docs for a package in a web browser maybe`<br/>打开指定包的文档网页（通常是 README 或官网）。 |
| `npm doctor` | `Check your environments`<br/>检查本地 npm 环境是否健康（如权限、网络、配置等）。 |
| `npm edit` | `Edit an installed package`<br/>直接编辑已安装包的内容（用于调试，不推荐生产使用）。 |
| `npm exec` | `Run a command from an npm package`<br/>在不全局安装的情况下执行本地或远程包中的命令。 |
| `npm explain` | `Explain installed packages`<br/>解释某个包为何被安装、版本来源及依赖路径。 |
| `npm explore` | `Browse an installed package`<br/>进入指定已安装包的目录并执行 shell 命令。 |
| `npm find-dupes` | `Find duplication in the package tree`<br/>（非标准命令）部分工具中用于查找重复依赖（实际较少使用）。 |
| `npm fund` | `Retrieve funding information`<br/>显示项目支持的赞助链接，帮助用户支持开源维护者。 |
| `npm help` | `Search npm help documentation`<br/>显示 npm 帮助信息，可查看命令列表和基本用法。 |
| `npm help-search` | `Get help on npm`<br/>搜索 npm 帮助文档中的相关内容。 |
| `npm init` | `Create a package.json file`<br/>初始化项目，交互式创建 `package.json` 文件。 |
| `npm install` | `Install a package`<br/>安装包依赖（本地、全局、开发等），最常用命令之一。 |
| `npm install-ci-test` | `Install a project with a clean slate and run tests`<br/>安装依赖并运行测试，专为 CI 环境设计。 |
| `npm install-test` | `Install package(s) and run tests`<br/>安装依赖后运行测试脚本。 |
| `npm link` | `Symlink a package folder`<br/>将本地包链接到全局或其他项目，便于开发调试。 |
| `npm login` | `Login to a registry user account`<br/>登录 npm 账户（用于发布包或访问私有仓库）。 |
| `npm logout` | `Log out of the registry`<br/>注销当前登录的 npm 账户。 |
| `npm ls` | `List installed packages`<br/>列出已安装的包及其依赖树结构。 |
| `npm org` | `Manage orgs`<br/>管理 npm 组织（创建、删除、管理成员等）。 |
| `npm outdated` | `Check for outdated packages`<br/>检查哪些依赖有新版本可用。 |
| `npm owner` | `Manage package owners`<br/>管理包的所有者（添加、移除所有者）。 |
| `npm pack` | `Create a tarball from a package`<br/>将当前项目打包为 `.tgz` 文件，用于分发或测试。 |
| `npm ping` | `Ping npm registry`<br/>测试与 npm registry 的连接是否正常。 |
| `npm pkg` | `Manages your package.json`<br/>查看或修改 `package.json` 内容的安全方式。 |
| `npm prefix` | `Display prefix`<br/>输出当前 npm 的安装前缀路径（常用于定位全局路径）。 |
| `npm profile` | `Change settings on your registry profile`<br/>管理用户个人资料（如更新邮箱、密码等）。 |
| `npm prune` | `Remove extraneous packages`<br/>删除 `package.json` 中未声明的依赖（多余包）。 |
| `npm publish` | `Publish a package`<br/>发布包到 npm registry（公开或私有）。 |
| `npm query` | `Retrieve a filtered list of packages`<br/>使用类似 CSS 选择器的语法查询 `package-lock.json` 中的依赖。 |
| `npm rebuild` | `Rebuild a package`<br/>重新编译原生模块（如 node-gyp 编译的包）。 |
| `npm repo` | `Open package repository page in the browser`<br/>打开指定包的源码仓库页面（如 GitHub）。 |
| `npm restart` | `Restart a package`<br/>先执行 `stop` 脚本，再执行 `start` 脚本。 |
| `npm root` | `Display npm root`<br/>显示当前项目的 `node_modules` 所在目录。 |
| `npm run` | `Run arbitrary package scripts`<br/>运行 `package.json` 中定义的自定义脚本。 |
| `npm sbom` | `Generate a Software Bill of Materials (SBOM)`<br/>生成软件物料清单（Software Bill of Materials），用于安全合规审计。 |
| `npm search` | `Search for packages`<br/>在 npm 仓库中搜索包（按关键词）。 |
| `npm shrinkwrap` | `Lock down dependency versions for publication`<br/>锁定依赖版本生成 `npm-shrinkwrap.json`（旧版锁定机制，现多用 `package-lock.json`）。 |
| `npm star` | `Mark your favorite packages`<br/>给某个包添加“收藏”（点赞），表示支持。 |
| `npm stars` | `View packages marked as favorites`<br/>查看当前登录用户收藏的所有包。 |
| `npm start` | `Start a package`<br/>启动应用（执行 `package.json` 中的 `start` 脚本）。 |
| `npm stop` | `Stop a package`<br/>停止应用（执行 `stop` 脚本）。 |
| `npm team` | `Manage organization teams and team memberships`<br/>管理组织下的团队及其成员权限。 |
| `npm test` | `Test a package`<br/>运行项目的测试脚本（即 `test` script）。 |
| `npm token` | `Manage your authentication tokens`<br/>管理认证 token（创建、删除、列出），用于 CI/CD 自动化。 |
| `npm undeprecate` | `Undeprecate a version of a package`<br/>取消对某个包版本的弃用标记。 |
| `npm uninstall` | `Remove a package`<br/>卸载已安装的包（本地或全局）。 |
| `npm unpublish` | `Remove a package from the registry`<br/>从 npm registry 删除已发布的包版本（有时间限制）。 |
| `npm unstar` | `Remove an item from your favorite packages`<br/>取消对某个包的“收藏”。 |
| `npm update` | `Update a package`<br/>更新包到符合版本范围的最新版本。 |
| `npm version` | `Bump a package version`<br/>更新项目版本号，并自动创建 git commit 和 tag。 |
| `npm view` | `View registry info`<br/>查看远程包的元数据信息（版本、维护者、依赖等）。 |
| `npm whoami` | `Display npm username`<br/>显示当前已登录的用户名。 |
| `npx` | `Run a command from an npm package`<br/>执行 npm 包中的命令，无需全局安装（常用于临时工具）。 |

## 4. 💻 npm 命令 - 安装包

```bash
# 根据 package.json 文件中记录的依赖信息，安装项目所需的所有依赖。
npm install
```

```bash
# 安装全局包
npm install -g <package-name>

# 作用：全局安装指定的包，使其在系统中可用。
# 示例：
npm install -g create-react-app
```

```bash
# 安装本地包
npm install <package-name>

# 作用：将指定的包安装到当前项目的 node_modules 目录，并更新 package.json 文件中的依赖列表。
# 示例：
npm install express
```

```bash
# 安装特定版本的包
npm install <package-name>@<version>

# 作用：安装指定版本的包。
npm install react@18.2.0
```

```bash
# 安装开发依赖
npm install --save-dev <package-name>

# 作用：将指定的包作为开发依赖安装，并将其添加到 devDependencies 中。
# 示例：
npm install --save-dev eslint
```

```bash
# 简写
npm i

# 上述所有的 npm install 都可以直接简写为 npm i
```

## 5. 💻 npm 命令 - 查看已安装的包

```bash
# 查看全局安装的包
npm list -g --depth=0

# 作用：列出所有全局安装的包。
# 示例：
npm list -g --depth=0
# /Users/huyouda/.nvm/versions/node/v20.14.0/lib
# ├── @yuque/sdk@1.1.1
# ├── corepack@0.28.1
# ├── create-react-app@5.0.1
# ├── egg-init@3.1.0
# ├── less@4.2.0
# ├── live-server@1.2.2
# ├── my-module@
# ├── npm@10.9.2
# ├── nrm@2.0.1
# ├── pnpm@10.6.3
# ├── sass@1.77.6
# └── tnotes@0.0.1 -> ./../../../../../zm/notes/_
```

```bash
# 查看本地安装的包
npm list

# 作用：列出当前项目中安装的所有包及其依赖关系。
# 示例：
npm list
# TNotes.nodejs@ /Users/huyouda/zm/notes/TNotes.nodejs
# ├── dayjs@1.11.13
# ├── github-slugger@2.0.0
# ├── markdown-it-container@4.0.0
# ├── markdown-it-link-attributes@4.0.1
# ├── markdown-it-mathjax3@4.3.2
# ├── markdown-it-task-lists@2.1.1
# ├── mermaid@11.5.0
# ├── minimist@1.2.8
# ├── swiper@11.2.5
# ├── vitepress-plugin-mermaid@2.0.17
# └── vitepress@1.6.3
```

## 6. 💻 npm 命令 - 卸载包

```bash
# 卸载全局包
npm uninstall -g <package-name>

# 作用：卸载全局安装的指定包。
# 示例：
npm uninstall -g create-react-app
```

```bash
# 卸载本地包
npm uninstall <package-name>

# 作用：从当前项目中卸载指定的包，并移除其依赖关系。
# 示例：
npm uninstall express
```

- `npm uninstall` 会自动检测包是在 `dependencies` 还是 `devDependencies` 中，并从相应的位置移除，无需额外指定 `--save-dev` 或 `-D`。
- 如果要卸载的软件包是全局安装的，则需要添加 `--global` 或 `-g` 标志。

```bash
npm uninstall express --global
npm uninstall express -g
```

## 7. 💻 npm 命令 - 更新包

```bash
# 更新全局包
npm update -g

# 作用：更新所有全局安装的包到最新版本。
```

```bash
# 更新本地包
npm update

# 作用：更新当前项目中所有依赖包到最新版本。
```

```bash
# 更新单个包
npm update <package-name>

# 作用：仅更新指定的包到最新版本。
# 示例：
npm update express
# 这个升级会根据 package.json 中记录的语义化版本范围来升级。
# 比如最新版本是 "v2.0.0"
# 当前 package.json 中记录的语义版本是 "^1.2.3"
# 使用 npm update express 命令作版本升级的时候，主版本号 v1 不会升级，只会升级次版本号和补丁版本号，再怎么升都升不到 v2。

npm update express@latest
# 这会直接安装最新的包。
```

- 使用 `npm update` 命令更新软件包版本时，只更新次版本或补丁版本，并且在更新时，`package.json` 文件中的版本信息保持不变，但是 `package-lock.json` 文件会被新版本填充。
- 如果要更新主版本，则需要全局地安装 `npm-check-updates` 软件包。

```bash
# 全局安装 npm-check-updates
npm install -g npm-check-updates

# 检查可更新的依赖
ncu

# 使用 npm-check-updates 更新 package.json 中所有包的版本范围
ncu -u
# 这样即可升级 package.json 文件的 dependencies 和 devDependencies 中的所有版本，以便 npm 可以安装新的主版本。
# 注意：ncu -u 会更新依赖的主版本，这可能导致破坏性变更，升级需谨慎。
```

## 8. 💻 npm 命令 - 查看 npm 版本

```bash
# 查看当前 npm 版本
npm -v

# 作用：显示当前安装的 npm 版本号。
# 示例：
npm -v
# 11.2.0

# node 命令 - 查看当前 Node.js 版本
node -v

# 作用：显示当前安装的 Node.js 版本号。
# 示例：
node -v
# v23.11.0
```

## 9. 💻 npm 命令 - 清理缓存

```bash
# 清除 npm 缓存
npm cache clean --force

# 作用：强制清除 npm 的缓存文件，解决因缓存问题导致的安装失败。
```

## 10. 💻 npm 命令 - 搜索包

```bash
# 搜索 npm 包
npm search <keyword>

# 作用：根据关键词搜索 npm 注册表中的包。
# 示例：
npm search react
# react
# React is a JavaScript library for building user interfaces.
# Version 19.1.0 published 2025-03-28 by react-bot
# Maintainers: fb react-bot
# Keywords: react
# https://npm.im/react

# react-is
# Brand checking of React Elements.
# Version 19.1.0 published 2025-03-28 by react-bot
# Maintainers: fb react-bot
# Keywords: react
# https://npm.im/react-is

# react-dom
# React package for working with the DOM.
# Version 19.1.0 published 2025-03-28 by react-bot
# Maintainers: fb react-bot
# Keywords: react
# https://npm.im/react-dom

# @types/react
# TypeScript definitions for react
# Version 19.1.0 published 2025-04-02 by types
# Maintainers: types
# https://npm.im/@types/react

# react-router
# Declarative routing for React
# Version 7.5.0 published 2025-04-04 by mjackson
# Maintainers: mjackson timdorr chancestrickland brophdawg11
# Keywords: react router route routing history link
# https://npm.im/react-router

# react-refresh
# React is a JavaScript library for building user interfaces.
# Version ...
# ...

# 带有 react 关键字的包还有很多。
```

## 11. 💻 npm 命令 - 查看包信息

```bash
# 查看包详细信息
npm info <package-name>

# 作用：显示指定包的详细信息，包括版本、描述、依赖等。
# 示例：
npm info express
# express@5.1.0 | MIT | deps: 27 | versions: 283
# Fast, unopinionated, minimalist web framework
# https://expressjs.com/

# keywords: express, framework, sinatra, web, http, rest, restful, router, app, api

# dist
# .tarball: https://registry.npmmirror.com/express/-/express-5.1.0.tgz
# .shasum: d31beaf715a0016f0d53f47d3b4d7acf28c75cc9
# .integrity: sha512-DT9ck5YIRU+8GYzzU5kT3eHGA5iL+1Zd0EutOmTE9Dtk+Tvuzd23VBU+ec7HPNSTxXYO55gPV/hq4pSBJDjFpA==
# .unpackedSize: 197.0 kB

# dependencies:
# accepts: ^2.0.0             cookie: ^0.7.1              finalhandler: ^2.1.0        on-finished: ^2.4.1         range-parser: ^1.2.1
# body-parser: ^2.2.0         debug: ^4.4.0               fresh: ^2.0.0               once: ^1.4.0                router: ^2.2.0
# content-disposition: ^1.0.0 encodeurl: ^2.0.0           http-errors: ^2.0.0         parseurl: ^1.3.3            send: ^1.1.0
# content-type: ^1.0.5        escape-html: ^1.0.3         merge-descriptors: ^2.0.0   proxy-addr: ^2.0.7          serve-static: ^2.2.0
# cookie-signature: ^1.2.1    etag: ^1.8.1                mime-types: ^3.0.0          qs: ^6.14.0
# (...and 3 more.)

# maintainers:
# - wesleytodd <wes@wesleytodd.com>
# - jonchurch <npm@jonchurch.com>
# - ctcpip <c@labsector.com>
# - sheplu <jean.burellier@gmail.com>

# dist-tags:
# latest: 5.1.0    latest-4: 4.21.2

# published 5 days ago by wesleytodd <wes@wesleytodd.com>
```

```bash
# 查看 npm 包的许可证
npm view <package-name> license

# 作用：显示指定包的许可证类型。
# 示例：
npm view express license
# MIT
```

```bash
# 查看 npm 包的作者信息
npm view <package-name> author

# 作用：显示指定包的作者信息。
# 示例：
npm view express author
# TJ Holowaychuk <tj@vision-media.ca>
```

```bash
# 查看 npm 包的版本
npm view <package-name> version

# 作用：显示指定包的版本信息。
# 示例：
npm view express version
# 5.1.0

npm view vue version
# 3.5.13

npm view react version
# 19.1.0
```

## 12. 💻 npm 命令 - 初始化项目

```bash
# 创建一个新的 npm 项目
npm init [-y]

# 作用：生成一个 package.json 文件，用于管理项目的元数据和依赖。
# 参数：
# -y：自动使用默认配置，无需交互式输入。
# 示例：
npm init -y
```

## 13. 💻 npm 命令 - 运行脚本

```bash
# 运行自定义脚本
npm run <script-name>

# 作用：执行 package.json 中定义的自定义脚本。
# 示例：
npm run tn:dev
```

## 14. 💻 npm 命令 - 查看帮助文档

```bash
# 查看 npm 帮助信息
npm help

# 作用：显示 npm 的帮助文档，包含常用命令和选项的说明。
# 示例：
npm help
# npm <command>

# Usage:

# npm install        install all the dependencies in your project
# npm install <foo>  add the <foo> dependency to your project
# npm test           run this project's tests
# npm run <foo>      run the script named <foo>
# npm <command> -h   quick help on <command>
# npm -l             display usage info for all commands
# npm help <term>    search for help on <term>
# npm help npm       more involved overview

# All commands:

#     access, adduser, audit, bugs, cache, ci, completion,
#     config, dedupe, deprecate, diff, dist-tag, docs, doctor,
#     edit, exec, explain, explore, find-dupes, fund, get, help,
#     help-search, init, install, install-ci-test, install-test,
#     link, ll, login, logout, ls, org, outdated, owner, pack,
#     ping, pkg, prefix, profile, prune, publish, query, rebuild,
#     repo, restart, root, run-script, sbom, search, set,
#     shrinkwrap, star, stars, start, stop, team, test, token,
#     undeprecate, uninstall, unpublish, unstar, update, version,
#     view, whoami

# Specify configs in the ini-formatted file:
#     /Users/huyouda/.npmrc
# or on the command line via: npm <command> --key=value

# More configuration info: npm help config
# Configuration fields: npm help 7 config

# npm@11.2.0 /Users/huyouda/.nvm/versions/node/v23.11.0/lib/node_modules/npm
```

## 15. 💻 npm 命令 - 查看 npm 配置

```bash
# 查看全局配置
npm config list

# 作用：显示当前的 npm 全局配置。
# 示例：
npm config list
# ; "user" config from /Users/huyouda/.npmrc

# //registry.npmjs.org/:_authToken = (protected)
# registry = "https://registry.npmmirror.com/"

# ; node bin location = /Users/huyouda/.nvm/versions/node/v23.11.0/bin/node
# ; node version = v23.11.0
# ; npm local prefix = /Users/huyouda/zm/notes/TNotes.nodejs
# ; npm version = 11.2.0
# ; cwd = /Users/huyouda/zm/notes/TNotes.nodejs
# ; HOME = /Users/huyouda
# ; Run `npm config ls -l` to show all defaults.
```

```bash
# 设置配置项
npm config set <key> <value>

# 作用：设置或修改 npm 的配置项。
# 示例：
npm config set registry https://registry.npmmirror.com/
```

## 16. 🔗 引用

- [npm Docs][2]
- [CLI Commands][1]
  - npm 官方文档 - npm CLI Commands
  - 在线查阅 npm 所有命令
  - 官方文档中的 npm 命令列表默认是升序排序的，查阅起来非常方便。
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-04-20-22-45.png)

[1]: https://docs.npmjs.com/cli/v11/commands
[2]: https://docs.npmjs.com/
