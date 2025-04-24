# [0080. http 模块概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0080.%20http%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)

<!-- endregion:toc -->

## 1. 📒 概述

- http 模块中主要有 `server` 对象、`response` 对象和 `request` 对象，该笔记主要会对它们进行介绍。
- **`server` 对象**：
  - `server` 对象用来创建一个服务。
  - 在 Node.js 中，使用 `http` 模块中的 `createServer()` 方法，可以创建一个 `server` 对象
    - `const server = require('http').createServer()`
  - `server` 对象中主要使用的方法有 `listen()` 方法和 `close()` 方法，它们分别控制着服务器的启动和结束。
    - `server.listen(port)` 启动服务器，并监听指定端口。
      - 端口 `port` 是计算机与计算机之间信息的通道。
      - 计算机中的端口从 `0` 开始，一共有 `65535` 个端口。
    - `server.close()` 关闭服务器。
