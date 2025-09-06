# [0073. os 操作系统模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0073.%20os%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 `os` 模块常用方法](#2--os-模块常用方法)
  - [2.1. 操作系统信息](#21-操作系统信息)
  - [2.2. CPU 信息](#22-cpu-信息)
  - [2.3. 内存信息](#23-内存信息)
  - [2.4. 网络接口信息](#24-网络接口信息)
  - [2.5. 其他信息](#25-其他信息)
- [3. 📒 `os` 模块常用属性](#3--os-模块常用属性)
- [4. 💻 demos.1 - 获取操作系统平台和类型](#4--demos1---获取操作系统平台和类型)
- [5. 💻 demos.2 - 获取 CPU 和内存信息](#5--demos2---获取-cpu-和内存信息)
- [6. 💻 demos.3 - 获取网络接口信息](#6--demos3---获取网络接口信息)
- [7. 💻 demos.4 - 获取主机名及运行时间](#7--demos4---获取主机名及运行时间)
- [8. 🔗 References](#8--references)

<!-- endregion:toc -->

## 1. 📝 概述

- **`os` 模块**
  - `os` 是 operating system 的简写，表示操作系统。
  - `os` 模块是 Node.js 中内置的一个操作系统模块，**使用它可以访问与操作系统相关的信息和功能**。
  - 主要功能包括获取操作系统信息、CPU 和内存使用情况、网络接口信息等。
  - 熟悉 `os` 模块的方法和属性，能够高效地获取系统运行状态和硬件资源信息。
- **无需区分异步与同步**：所有方法均为同步操作，简单易用。
  - `os` 模块提供的方法均为同步操作，直接返回结果，不会阻塞主线程。
  - 不涉及文件 I/O 或网络请求，因此无需异步处理。
- **应用场景**：系统信息获取、资源监控、跨平台开发等。
  - **系统监控**
    - 使用 `os` 模块可以实时监控系统的 CPU、内存、网络接口等资源使用情况。
    - 适用于构建系统管理工具或性能监控工具。
    - CPU 使用率、总内存、内存使用率等系统信息数据，都可以通过 os 模块来读取到，再稍加渲染优化，就基本实现了系统核心信息的预览功能。
      - 比如开源项目：[Stats](https://github.com/exelban/stats)
      - ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-19-23-57-28.png)
  - **跨平台兼容性**
    - 使用 `os.platform()` 和 `os.arch()` 可以根据不同的操作系统和架构执行特定的代码逻辑。
  - **用户信息获取**
    - 使用 `os.userInfo()` 获取当前用户的详细信息，便于实现用户相关的功能。
  - **临时文件管理**
    - 使用 `os.tmpdir()` 获取系统的临时文件目录，便于存储临时数据。

## 2. 📒 `os` 模块常用方法

### 2.1. 操作系统信息

| **方法名称** | **描述** |
| --- | --- |
| `os.platform()` | 返回操作系统平台（如 `'linux'`, `'darwin'`, `'win32'`）。<br>常用于判断当前的操作系统是 Windows、Linux 还是 macOS。 |
| `os.type()` | 返回操作系统的类型（如 `'Linux'`, `'Darwin'`, `'Windows_NT'`）。 |
| `os.release()` | 返回操作系统的发行版本号。 |
| `os.version()` | 返回操作系统的内核版本的字符串。 |

### 2.2. CPU 信息

| **方法名称** | **描述** |
| --- | --- |
| `os.cpus()` | 返回一个包含每个 CPU 核心信息的数组（如速度 `speed`、型号 `model` 等）。 |
| `os.arch()` | 返回操作系统的 CPU 架构（如 `'x64'`、`'arm64'`、`'ia32'` 等）。 |

- `cpus()` 方法的返回值为一个对象数组，其中包含各 CPU 内核的信息，并且每个对象包含以下属性。
  - `model`：字符串类型，表示 CPU 内核的型号。
  - `speed`：整型，以兆赫兹(MHz)为单位，表示 CPU 内核的速度。
  - `times`：是一个对象，其包含的属性如下表所示。

| 属性名 | 说明 |
| --- | --- |
| `user` | 整型，表示 CPU 在用户模式下花费的毫秒数。 |
| `nice` | 整型，表示 CPU 在正常模式下花费的毫秒数（`nice` 值仅用于可移植操作系统接口 POSIX，在 Windows 操作系统上，该值始终为 0）。 |
| `sys` | 整型，表示 CPU 在系统模式下花费的毫秒数。 |
| `idle` | 整型，表示 CPU 在空闲模式下花费的毫秒数。 |
| `irq` | 整型，表示 CPU 在中断请求模式下花费的毫秒数。 |

### 2.3. 内存信息

| **方法名称**    | **描述**                                 |
| --------------- | ---------------------------------------- |
| `os.totalmem()` | 返回系统的总内存大小（以字节为单位）。   |
| `os.freemem()`  | 返回系统的空闲内存大小（以字节为单位）。 |

### 2.4. 网络接口信息

| **方法名称** | **描述** |
| --- | --- |
| `os.networkInterfaces()` | 返回一个对象，包含每个网络接口的详细信息（如 IP 地址、MAC 地址等）。 |

### 2.5. 其他信息

| **方法名称**    | **描述**                                   |
| --------------- | ------------------------------------------ |
| `os.hostname()` | 返回操作系统的主机名。                     |
| `os.tmpdir()`   | 返回操作系统的默认临时文件目录路径。       |
| `os.uptime()`   | 返回操作系统的运行时间（以秒为单位）。     |
| `os.userInfo()` | 返回当前用户的信息（如用户名、主目录等）。 |

## 3. 📒 `os` 模块常用属性

| 属性名 | 描述 |
| --- | --- |
| `os.EOL` | 全称 `end of line`，表示操作系统特定的行末标志，用于处理跨平台的换行符问题。<br>在 POSIX 系统上是 `\n`，在 Windows 上是 `\r\n`。 |
| `os.constants` | 包含信号常量、错误常量、`dlopen` 常量、优先级常量以及 `libuv` 常量的列表。<br>可通过 `os.constants.<类别>` 访问具体常量列表。 |
| `os.constants.signals` | 信号常量列表。 |
| `os.constants.priority` | 优先级常量列表。 |
| `os.constants.errno` | 错误常量列表。 |
| `os.constants.dlopen` | `dlopen` 常量列表。 |

## 4. 💻 demos.1 - 获取操作系统平台和类型

::: code-group

```js [1.cjs]
const os = require('os')

console.log(`操作系统平台: ${os.platform()}`)
console.log(`操作系统类型: ${os.type()}`)

// 输出：
// 操作系统平台: darwin
// 操作系统类型: Darwin
```

:::

## 5. 💻 demos.2 - 获取 CPU 和内存信息

::: code-group

```js [1.cjs]
const os = require('os')

console.log(`CPU 核心数: ${os.cpus().length}`)
console.log(`总内存: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`)
console.log(`空闲内存: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`)
console.log(
  `内存使用率：${(
    ((os.totalmem() - os.freemem()) / os.totalmem()) *
    100
  ).toFixed(2)}%`
)

// 输出：
// CPU 核心数: 12
// 总内存: 32.00 GB
// 空闲内存: 0.93 GB
// 内存使用率：97.09%
```

:::

## 6. 💻 demos.3 - 获取网络接口信息

::: code-group

```js [1.cjs]
const os = require('os')

const networkInterfaces = os.networkInterfaces()
console.log(networkInterfaces)

// 输出：
// {
//   lo0: [
//     {
//       address: '127.0.0.1',
//       ...
//     },
//     ...
//   ],
//   ...
// }
```

:::

- `os.networkInterfaces()` 返回一个 `NodeJS.Dict<os.NetworkInterfaceInfo[]>` 对象。
- **键（Key）**：表示网络接口的名称（如 `lo0`, `en0`, `utun0` 等）。
  - 每个网络接口代表一个物理或虚拟的网络设备。
  - 例如：
    - `lo0`：本地回环接口（Loopback Interface），用于本机通信。
    - `en0`：以太网接口，通常用于有线或无线网络连接。
    - `utun*`：虚拟网络接口，通常用于隧道协议（如 VPN）。
    - ……
- **值（Value）**：是一个数组，包含该网络接口的所有配置信息。
  - 每个数组元素是一个对象，表示该接口的一个网络地址配置。
- **单个网络接口的属性**：

| 属性名 | 描述 |
| --- | --- |
| `address` | IP 地址（IPv4 或 IPv6），字符串类型。 |
| `netmask` | 子网掩码，用于划分网络和主机部分，字符串类型。 |
| `family` | 协议族，表示 IP 地址类型：<br>`'IPv4'`：IPv4 地址。<br>`'IPv6'`：IPv6 地址。 |
| `mac` | MAC 地址（物理地址），格式为 `xx:xx:xx:xx:xx:xx`，字符串类型。 |
| `internal` | 是否为内部接口：<br>`true`：内部接口（如 `lo0` 回环接口）。<br>`false`：外部接口。 |
| `cidr` | CIDR 表示法，表示 IP 地址和子网掩码的组合（如 `192.168.1.4/24`）。如果网络掩码无效，则设置为 `null`。 |
| `scopeid` | 仅适用于 IPv6 地址，表示作用域 ID（Scope ID），数字类型。 |

- **关键字段**：
  - `address` 和 `netmask` 定义了网络地址范围。
  - `mac` 提供了物理地址信息。
  - `internal` 标识接口的用途。
- **网络接口分类**：
  - **内部接口**：如 `lo0`，用于本机通信。
  - **外部接口**：如 `en0`、`en12`，用于连接外部网络。
  - **虚拟接口**：如 `utun*`，用于隧道协议或特殊服务。
- **IP 地址类型**：
  - **IPv4**：如 `127.0.0.1`、`192.168.1.4`。
  - **IPv6**：如 `::1`、`fe80::1`。

## 7. 💻 demos.4 - 获取主机名及运行时间

::: code-group

```js [1.cjs]
const os = require('os')

console.log(`主机名: ${os.hostname()}`) // 输出主机名
console.log(`运行时间: ${os.uptime()} 秒`) // 输出操作系统的运行时间（秒）
console.log(`运行天数：${(os.uptime() / 86400).toFixed(2)} 天`)

// 输出：
// 主机名: Mac-Studio.local
// 运行时间: 1343431 秒
// 运行天数：15.55 天
```

:::

## 8. 🔗 References

- https://github.com/exelban/stats
  - github 开源项目
  - 简介：
    - macOS system monitor in your menu bar
    - 一个免费的 macOS 系统监控工具。
    - 可以监控你的 CPU、内存、磁盘、网络等信息。
    - 你可以在菜单栏中很直观地看到相关监控数据。
      - ![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-20-00-01-21.png)
    - 比如 CPU 监视面板：
      - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-19-23-56-05.png)
