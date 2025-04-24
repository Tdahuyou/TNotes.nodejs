# [0080. http 模块概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0080.%20http%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 📒 `server` 对象](#2--server-对象)
- [3. 📒 `response` 对象](#3--response-对象)
- [4. 📒 `request` 对象](#4--request-对象)
- [5. 💻 demos.1 - 使用 `server` 对象创建一个服务](#5--demos1---使用-server-对象创建一个服务)

<!-- endregion:toc -->

## 1. 📒 概述

- http 模块中主要有 `server` 对象、`response` 对象和 `request` 对象，也是本节笔记主要介绍的内容。

## 2. 📒 `server` 对象

- `server` 对象用来创建一个服务。
- 在 Node.js 中，使用 `http` 模块中的 `createServer()` 方法，可以创建一个 `server` 对象
  - `const server = require('http').createServer()`
- `server` 对象中主要使用的方法有 `listen()` 方法和 `close()` 方法，它们分别控制着服务器的启动和结束。
  - `server.listen(port)` 启动服务器，并监听指定端口。
    - 端口 `port` 是计算机与计算机之间信息的通道。
    - 计算机中的端口从 `0` 开始，一共有 `65535` 个端口。
  - `server.close()` 关闭服务器。

## 3. 📒 `response` 对象

- `response` 对象用于向客户端发送响应。
- 主要方法：
  - `writeHead(statusCode, headers)`：设置响应头。
    - `statusCode`：HTTP 状态码。
    - `headers`：响应头对象。
  - `end([data], [encoding])`：结束响应并发送数据到客户端。
    - `data`：可选参数，要发送的数据。
    - `encoding`：可选参数，数据编码格式。

## 4. 📒 `request` 对象

- `request` 对象用于处理客户端请求。
- 主要属性：
  - `method`：请求方法（如 `GET`, `POST` 等）。
  - `url`：请求的 URL。
  - `headers`：请求头对象。
- 主要方法：
  - `on(event, listener)`：监听请求事件。
    - `event`：事件名称。
    - `listener`：事件处理函数。

## 5. 💻 demos.1 - 使用 `server` 对象创建一个服务

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
