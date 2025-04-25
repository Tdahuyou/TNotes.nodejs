# [0080. http 模块概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0080.%20http%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - `server` 对象](#2--demos1---server-对象)
- [3. 💻 demos.2 - `response` 对象](#3--demos2---response-对象)
- [4. 💻 demos.3 - 响应 html 文件](#4--demos3---响应-html-文件)
- [5. 💻 demos.4 - 响应媒体资源](#5--demos4---响应媒体资源)
- [6. 💻 demos.5 - 重定向](#6--demos5---重定向)
- [7. 📒 `request` 对象](#7--request-对象)

<!-- endregion:toc -->

## 1. 📒 概述

- http 模块中主要有 `server` 对象、`response` 对象和 `request` 对象，也是本节笔记主要介绍的内容。

## 2. 💻 demos.1 - `server` 对象

- `server` 对象用来创建一个服务。
- 在 Node.js 中，使用 `http` 模块中的 `createServer()` 方法，可以创建一个 `server` 对象
  - `const server = require('http').createServer()`
- `server` 对象中主要使用的方法有 `listen()` 方法和 `close()` 方法，它们分别控制着服务器的启动和结束。
  - `server.listen(port)` 启动服务器，并监听指定端口。
    - 端口 `port` 是计算机与计算机之间信息的通道。
    - 计算机中的端口从 `0` 开始，一共有 `65535` 个端口。
  - `server.close()` 关闭服务器。

::: code-group

<<< ./demos/1/1.cjs {js}

:::

- 在服务启动期间访问：`http://127.0.0.1:23523`
  - ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-24-21-07-01.png)
- 上述程序的大致流程：
  - 引入 `http` 模块并创建服务器对象。
  - 服务器接收到请求时，设置响应头 `Content-Type` 为 `text/plain; charset=utf-8`
    - `Content-Type` 设置为文本类型
    - `text/plain` 设置为纯文本类型
    - `charset=utf-8` 设置为 UTF-8 编码，以避免乱码。
  - `res.end('服务器正在运行中...\n')`
    - 并返回中文消息 "服务器正在运行中..."。
    - 这里的 `res` 其实就是 `response` 对象。
  - 服务器监听端口 `23523`，启动后输出监听地址。
    - `we` 的生日是 `2023.05.23`
  - 启动后 10 秒自动关闭服务器。
  - 关闭服务器后输出 "服务器已成功关闭"。

## 3. 💻 demos.2 - `response` 对象

- `response` 对象用于向客户端发送响应。
- 主要方法：
  - `writeHead(statusCode [,statusMessage]​ [,headers])`：设置响应头。
    - `statusCode`：数字类型的 HTTP 状态码。
    - `statusMessage`：HTTP 状态码对应的消息。
    - `headers`：响应头对象。
  - `end([data], [encoding])`：结束响应并发送数据到客户端。
    - `data`：可选参数，执行完毕后要发送的字符。
    - `encoding`：可选参数，数据编码格式。

::: code-group

<<< ./demos/2/1.cjs {js}

:::

- ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-25-10-41-40.png)

## 4. 💻 demos.3 - 响应 html 文件

::: code-group

<<< ./demos/3/1.cjs {js}

<<< ./demos/3/1.html {html}

:::

- ![图 1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-25-11-00-09.png)

## 5. 💻 demos.4 - 响应媒体资源

::: code-group

<<< ./demos/4/1.cjs {js}

<<< ./demos/4/1.html {html}

:::

- ![图 1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-25-11-00-09.png)

## 6. 💻 demos.5 - 重定向

::: code-group

<<< ./demos/5/1.cjs {js}

<<< ./demos/5/1.html {html}

:::

- ![图 1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-25-11-00-09.png)

## 7. 📒 `request` 对象

- `request` 对象用于处理客户端请求。
- 主要属性：
  - `method`：请求方法（如 `GET`, `POST` 等）。
  - `url`：请求的 URL。
  - `headers`：请求头对象。
- 主要方法：
  - `on(event, listener)`：监听请求事件。
    - `event`：事件名称。
    - `listener`：事件处理函数。
