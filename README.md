# nodejs

<!-- region:toc -->

- [nodejs](#nodejs)
  - [1. Node.js 学习资源](#1-nodejs-学习资源)
    - [1.1. 概述](#11-概述)
    - [1.2. 官方文档](#12-官方文档)
    - [1.3. Node.js 书籍](#13-nodejs-书籍)
    - [1.4. Node.js 掘金小册](#14-nodejs-掘金小册)
    - [1.5. 其他在线教程](#15-其他在线教程)
  - [2. 认识 Node.js](#2-认识-nodejs)
  - [3. Node.js 基础](#3-nodejs-基础)
    - [3.1. 全局模块](#31-全局模块)
    - [3.2. 事件的监听与触发](#32-事件的监听与触发)
    - [3.3. npm 包管理器](#33-npm-包管理器)
  - [4. Node.js 核心原理](#4-nodejs-核心原理)
  - [5. Node.js 内置模块 ⏰](#5-nodejs-内置模块-)
    - [5.1. https](#51-https)
    - [5.2. process](#52-process)
    - [5.3. crypto](#53-crypto)
  - [6. nodejs 的版本管理工具 ⏰](#6-nodejs-的版本管理工具-)
  - [7. koa ⏰](#7-koa-)
  - [8. npm 相关 ⏰](#8-npm-相关-)
  - [9. nodejs 命令行操作 ⏰](#9-nodejs-命令行操作-)
  - [10. 其他 ⏰](#10-其他-)
  - [11. 包管理器 ⏰](#11-包管理器-)

<!-- endregion:toc -->

## 1. Node.js 学习资源

### 1.1. 概述

- [x] [0030. nodejs 学习资源概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0030.%20nodejs%20%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E6%A6%82%E8%BF%B0/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0030.%20nodejs%20%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E6%A6%82%E8%BF%B0/README.md#1--概述)
  - [2. 🤔 如何获取相关学习资源？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0030.%20nodejs%20%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E6%A6%82%E8%BF%B0/README.md#2--如何获取相关学习资源)

### 1.2. 官方文档

- [ ] [0026. nodejs 官方文档](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0026.%20nodejs%20%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3/README.md)
  - [1. 🔗 nodejs 官方文档链接](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0026.%20nodejs%20%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3/README.md#1--nodejs-官方文档链接)
  - [2. ⏰ TODO](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0026.%20nodejs%20%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3/README.md#2--todo)

### 1.3. Node.js 书籍

- [x] [0032. 《Node.js 从入门到精通》](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0032.%20%E3%80%8ANode.js%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E3%80%8B/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0032.%20%E3%80%8ANode.js%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E3%80%8B/README.md#1--概述)
  - [2. 📂 本书对应学习资源](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0032.%20%E3%80%8ANode.js%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E3%80%8B/README.md#2--本书对应学习资源)
- [x] [0015. 《深入浅出 Node.js》](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0015.%20%E3%80%8A%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%20Node.js%E3%80%8B/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0015.%20%E3%80%8A%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%20Node.js%E3%80%8B/README.md#1--概述)
- [x] [0016. 《Node.js来一打C++扩展》](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0016.%20%E3%80%8ANode.js%E6%9D%A5%E4%B8%80%E6%89%93C%2B%2B%E6%89%A9%E5%B1%95%E3%80%8B/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0016.%20%E3%80%8ANode.js%E6%9D%A5%E4%B8%80%E6%89%93C%2B%2B%E6%89%A9%E5%B1%95%E3%80%8B/README.md#1--概述)
- [x] [0017. 《Node与Express开发》](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0017.%20%E3%80%8ANode%E4%B8%8EExpress%E5%BC%80%E5%8F%91%E3%80%8B/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0017.%20%E3%80%8ANode%E4%B8%8EExpress%E5%BC%80%E5%8F%91%E3%80%8B/README.md#1--概述)
- [x] [0018. 《Node.js开发指南》](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0018.%20%E3%80%8ANode.js%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97%E3%80%8B/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0018.%20%E3%80%8ANode.js%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97%E3%80%8B/README.md#1--概述)
- [x] [0019. 《了不起的Node js 将JavaScript进行到底》](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0019.%20%E3%80%8A%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84Node%20js%20%E5%B0%86JavaScript%E8%BF%9B%E8%A1%8C%E5%88%B0%E5%BA%95%E3%80%8B/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0019.%20%E3%80%8A%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84Node%20js%20%E5%B0%86JavaScript%E8%BF%9B%E8%A1%8C%E5%88%B0%E5%BA%95%E3%80%8B/README.md#1--概述)

### 1.4. Node.js 掘金小册

- [x] [0022. 《Node.js 入门教程》（免费掘金小册）](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0022.%20%E3%80%8ANode.js%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E3%80%8B%EF%BC%88%E5%85%8D%E8%B4%B9%E6%8E%98%E9%87%91%E5%B0%8F%E5%86%8C%EF%BC%89/README.md)
  - [1. 🔗 掘金小册](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0022.%20%E3%80%8ANode.js%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E3%80%8B%EF%BC%88%E5%85%8D%E8%B4%B9%E6%8E%98%E9%87%91%E5%B0%8F%E5%86%8C%EF%BC%89/README.md#1--掘金小册)
  - [2. 📒 教程目录](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0022.%20%E3%80%8ANode.js%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E3%80%8B%EF%BC%88%E5%85%8D%E8%B4%B9%E6%8E%98%E9%87%91%E5%B0%8F%E5%86%8C%EF%BC%89/README.md#2--教程目录)

### 1.5. 其他在线教程

- [x] [0025. 菜鸟教程](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0025.%20%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B/README.md)
  - [1. 🔗 菜鸟教程 nodejs 链接](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0025.%20%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B/README.md#1--菜鸟教程-nodejs-链接)

## 2. 认识 Node.js

- [x] [0031. 什么是 Node.js](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0031.%20%E4%BB%80%E4%B9%88%E6%98%AF%20Node.js/README.md)
  - [1. 📒 Node.js 和 JavaScript](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0031.%20%E4%BB%80%E4%B9%88%E6%98%AF%20Node.js/README.md#1--nodejs-和-javascript)
  - [2. 📒 Node.js 是什么？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0031.%20%E4%BB%80%E4%B9%88%E6%98%AF%20Node.js/README.md#2--nodejs-是什么)
- [x] [0033. Node.js 的工作原理概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0033.%20Node.js%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E8%BF%B0/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0033.%20Node.js%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E8%BF%B0/README.md#1--概述)
  - [2. 📒 事件驱动](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0033.%20Node.js%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E8%BF%B0/README.md#2--事件驱动)
  - [3. 📒 单线程](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0033.%20Node.js%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E8%BF%B0/README.md#3--单线程)
  - [4. 📒 非阻塞 I/O](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0033.%20Node.js%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E8%BF%B0/README.md#4--非阻塞-io)
  - [5. 📒 事件循环](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0033.%20Node.js%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E8%BF%B0/README.md#5--事件循环)
  - [6. 📒 模块化设计](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0033.%20Node.js%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E8%BF%B0/README.md#6--模块化设计)
- [x] [0034. Node.js 的优缺点](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0034.%20Node.js%20%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0034.%20Node.js%20%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9/README.md#1--概述)
  - [2. 📒 优点](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0034.%20Node.js%20%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9/README.md#2--优点)
  - [3. 📒 缺点](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0034.%20Node.js%20%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9/README.md#3--缺点)
- [x] [0035. Node.js 能用来做什么](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#1--概述)
  - [2. 📒 HTTP Web 服务器](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#2--http-web-服务器)
  - [3. 📒 微服务或无服务器 API 后端](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#3--微服务或无服务器-api-后端)
  - [4. 📒 数据库访问和查询的驱动程序](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#4--数据库访问和查询的驱动程序)
  - [5. 📒 交互式命令行接口](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#5--交互式命令行接口)
  - [6. 📒 桌面应用程序](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#6--桌面应用程序)
  - [7. 📒 实时物联网（IoT）客户端和服务器端](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#7--实时物联网iot客户端和服务器端)
  - [8. 📒 适用于桌面应用程序的插件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#8--适用于桌面应用程序的插件)
  - [9. 📒 用于文件处理或网络访问的 Shell 脚本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#9--用于文件处理或网络访问的-shell-脚本)
  - [10. 📒 机器学习库和模型](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md#10--机器学习库和模型)
- [x] [0036. 谁在使用 Node.js](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0036.%20%E8%B0%81%E5%9C%A8%E4%BD%BF%E7%94%A8%20Node.js/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0036.%20%E8%B0%81%E5%9C%A8%E4%BD%BF%E7%94%A8%20Node.js/README.md#1--概述)
  - [2. 🌟 使用 Node.js 的知名公司](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0036.%20%E8%B0%81%E5%9C%A8%E4%BD%BF%E7%94%A8%20Node.js/README.md#2--使用-nodejs-的知名公司)

## 3. Node.js 基础

- [x] [0037. 第一个 Node.js 服务器程序 - Hello World](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0037.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%20Node.js%20%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A8%8B%E5%BA%8F%20-%20Hello%20World/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0037.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%20Node.js%20%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A8%8B%E5%BA%8F%20-%20Hello%20World/README.md#1--概述)
  - [2. 💻 demos.1 - Hello World](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0037.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%20Node.js%20%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A8%8B%E5%BA%8F%20-%20Hello%20World/README.md#2--demos1---hello-world)
  - [3. 💻 demos.2 - 如果要响应中文，需要设置编码方式为 UTF-8 来避免乱码的问题](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0037.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%20Node.js%20%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A8%8B%E5%BA%8F%20-%20Hello%20World/README.md#3--demos2---如果要响应中文需要设置编码方式为-utf-8-来避免乱码的问题)

### 3.1. 全局模块

- [x] [0044. __filename 和 __dirname](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0044.%20__filename%20%E5%92%8C%20__dirname/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0044.%20__filename%20%E5%92%8C%20__dirname/README.md#1--概述)
  - [2. 💻 demos.1 - 打印 `__filename` 和 `__dirname`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0044.%20__filename%20%E5%92%8C%20__dirname/README.md#2--demos1---打印-__filename-和-__dirname)
- [x] [0045. console](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#1--概述)
  - [2. 💻 demos.1 - console 对象](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#2--demos1---console-对象)
    - [2.1. `console.log()`、`console.info()`、`console.error()`、`console.warn()`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#21-consolelogconsoleinfoconsoleerrorconsolewarn)
    - [2.2. `console.assert()`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#22-consoleassert)
    - [2.3. `console.count()`、`console.countReset()`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#23-consolecountconsolecountreset)
    - [2.4. `console.time()`、`console.timeEnd()`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#24-consoletimeconsoletimeend)
    - [2.5. `console.table()`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#25-consoletable)
    - [2.6. `console.group()`、`console.groupEnd()`、`console.groupCollapsed()`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#26-consolegroupconsolegroupendconsolegroupcollapsed)
    - [2.7. `console.dir()`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#27-consoledir)
    - [2.8. 占位符 `%d`、`%s`、`%j`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0045.%20console/README.md#28-占位符-dsj)
- [x] [0049. process](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0049.%20process/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0049.%20process/README.md#1--概述)
  - [2. 💻 demos.1 - process 常见字段](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0049.%20process/README.md#2--demos1---process-常见字段)
  - [3. 💻 demos.2 - 根据 `process.platform` 判断当前系统环境](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0049.%20process/README.md#3--demos2---根据-processplatform-判断当前系统环境)
- [x] [0046. 全局定时器：setTimeout、setInterval、setImmediate](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0046.%20%E5%85%A8%E5%B1%80%E5%AE%9A%E6%97%B6%E5%99%A8%EF%BC%9AsetTimeout%E3%80%81setInterval%E3%80%81setImmediate/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0046.%20%E5%85%A8%E5%B1%80%E5%AE%9A%E6%97%B6%E5%99%A8%EF%BC%9AsetTimeout%E3%80%81setInterval%E3%80%81setImmediate/README.md#1--概述)
  - [2. 💻 demos.1 - `setTimeout(cb, ms)`、`clearTimeout(t)`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0046.%20%E5%85%A8%E5%B1%80%E5%AE%9A%E6%97%B6%E5%99%A8%EF%BC%9AsetTimeout%E3%80%81setInterval%E3%80%81setImmediate/README.md#2--demos1---settimeoutcb-mscleartimeoutt)
  - [3. 💻 demos.2 - `setInterval(cb, ms)`、`clearInterval(t)`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0046.%20%E5%85%A8%E5%B1%80%E5%AE%9A%E6%97%B6%E5%99%A8%EF%BC%9AsetTimeout%E3%80%81setInterval%E3%80%81setImmediate/README.md#3--demos2---setintervalcb-msclearintervalt)
  - [4. 💻 demos.3 - `setImmediate(callback[, ...args])`、`clearImmediate(immediate)`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0046.%20%E5%85%A8%E5%B1%80%E5%AE%9A%E6%97%B6%E5%99%A8%EF%BC%9AsetTimeout%E3%80%81setInterval%E3%80%81setImmediate/README.md#4--demos3---setimmediatecallback-argsclearimmediateimmediate)
  - [5. 🤔 `setTimeout(fn, 0)` 和 `setImmediate(fn)` 之间的区别](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0046.%20%E5%85%A8%E5%B1%80%E5%AE%9A%E6%97%B6%E5%99%A8%EF%BC%9AsetTimeout%E3%80%81setInterval%E3%80%81setImmediate/README.md#5--settimeoutfn-0-和-setimmediatefn-之间的区别)
- [ ] [0047. exports 对象](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0047.%20exports%20%E5%AF%B9%E8%B1%A1/README.md)
  - [1. 💻 demos.1 - 使用 exports 对象实现模块化编程](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0047.%20exports%20%E5%AF%B9%E8%B1%A1/README.md#1--demos1---使用-exports-对象实现模块化编程)
- [ ] [0048. module 对象](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0048.%20module%20%E5%AF%B9%E8%B1%A1/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0048.%20module%20%E5%AF%B9%E8%B1%A1/README.md#1--概述)
  - [2. 💻 demos.1 - 打印 module 对象](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0048.%20module%20%E5%AF%B9%E8%B1%A1/README.md#2--demos1---打印-module-对象)
  - [3. 💻 demos.2 - 使用 module 对象实现模块化编程](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0048.%20module%20%E5%AF%B9%E8%B1%A1/README.md#3--demos2---使用-module-对象实现模块化编程)

### 3.2. 事件的监听与触发

- [ ] [0051. EventEmitter 对象-1](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0051.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-1/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0051.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-1/README.md#1--概述)
  - [2. 💻 demos.1 - 使用 EventEmitter 对象创建简单事件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0051.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-1/README.md#2--demos1---使用-eventemitter-对象创建简单事件)
  - [3. 💻 demos.2 - 监听事件的添加与触发](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0051.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-1/README.md#3--demos2---监听事件的添加与触发)
  - [4. 💻 demos.3 - 使用 once 方法添加监听事件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0051.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-1/README.md#4--demos3---使用-once-方法添加监听事件)
  - [5. 💻 demos.4 - 使用 emit 方法触发事件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0051.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-1/README.md#5--demos4---使用-emit-方法触发事件)
  - [6. 💻 demos.5 - 使用 emit 方法触发事件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0051.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-1/README.md#6--demos5---使用-emit-方法触发事件)
  - [7. 💻 demos.6 - 删除指定的监听事件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0051.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-1/README.md#7--demos6---删除指定的监听事件)
- [ ] [0052. EventEmitter 对象-2](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#1--概述)
  - [2. 💻 demos.1 - on、emit、addListener](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#2--demos1---onemitaddlistener)
  - [3. 💻 demos.2 - 多次 emit](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#3--demos2---多次-emit)
  - [4. 💻 demos.3 - 传递参数](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#4--demos3---传递参数)
  - [5. 💻 demos.4 - once](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#5--demos4---once)
  - [6. 💻 demos.5 - off、removeListener](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#6--demos5---offremovelistener)
  - [7. 💻 demos.6 - 多次 on](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#7--demos6---多次-on)
  - [8. 💻 demos.7 - listenerCount](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#8--demos7---listenercount)
  - [9. 💻 demos.8 - removeAllListeners](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#9--demos8---removealllisteners)
  - [10. 💻 demos.9 - 立即执行](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#10--demos9---立即执行)
  - [11. 💻 demos.10 - emit 一个不存在的事件，相当于什么也没做](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#11--demos10---emit-一个不存在的事件相当于什么也没做)
  - [12. 💻 demos.11 - emit('error')](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#12--demos11---emiterror)
  - [13. 🔗 参考资料](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2/README.md#13--参考资料)
- [ ] [0053. xxx](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0053.%20xxx/README.md)
  - [1. 📒 notes_title](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0053.%20xxx/README.md#1--notes_title)
- [ ] [0054. xxx](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0054.%20xxx/README.md)
  - [1. 📒 notes_title](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0054.%20xxx/README.md#1--notes_title)
- [ ] [0055. xxx](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0055.%20xxx/README.md)
  - [1. 📒 notes_title](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0055.%20xxx/README.md#1--notes_title)
- [ ] [0056. xxx](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0056.%20xxx/README.md)
  - [1. 📒 notes_title](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0056.%20xxx/README.md#1--notes_title)
- [ ] [0057. xxx](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0057.%20xxx/README.md)
  - [1. 📒 notes_title](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0057.%20xxx/README.md#1--notes_title)
- [ ] [0058. xxx](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0058.%20xxx/README.md)
  - [1. 📒 notes_title](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0058.%20xxx/README.md#1--notes_title)
- [ ] [0059. xxx](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0059.%20xxx/README.md)
  - [1. 📒 notes_title](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0059.%20xxx/README.md#1--notes_title)
- [ ] [0060. xxx](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0060.%20xxx/README.md)
  - [1. 📒 notes_title](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0060.%20xxx/README.md#1--notes_title)

### 3.3. npm 包管理器

- [x] [0038. 认识 npm](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0038.%20%E8%AE%A4%E8%AF%86%20npm/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0038.%20%E8%AE%A4%E8%AF%86%20npm/README.md#1--概述)
  - [2. 📒 npm 包数量](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0038.%20%E8%AE%A4%E8%AF%86%20npm/README.md#2--npm-包数量)
  - [3. 📒 npm 使用场景](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0038.%20%E8%AE%A4%E8%AF%86%20npm/README.md#3--npm-使用场景)
- [x] [0039. 常见的 npm 包及作用](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#1--概述)
  - [2. 📦 前端框架](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#2--前端框架)
  - [3. 📦 样式框架](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#3--样式框架)
  - [4. 📦 后端框架](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#4--后端框架)
  - [5. 📦 CORS 与请求](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#5--cors-与请求)
  - [6. 📦 API 服务](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#6--api-服务)
  - [7. 📦 Web Sockets](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#7--web-sockets)
  - [8. 📦 数据库工具](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#8--数据库工具)
  - [9. 📦 身份验证工具](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#9--身份验证工具)
  - [10. 📦 配置模块](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#10--配置模块)
  - [11. 📦 静态站点生成器](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#11--静态站点生成器)
  - [12. 📦 模板语言](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#12--模板语言)
  - [13. 📦 图像处理](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#13--图像处理)
  - [14. 📦 日期格式](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#14--日期格式)
  - [15. 📦 验证工具](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#15--验证工具)
  - [16. 📦 表单与电子邮件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#16--表单与电子邮件)
  - [17. 📦 测试工具](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#17--测试工具)
  - [18. 📦 Web 抓取与自动化](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#18--web-抓取与自动化)
  - [19. 📦 模块捆绑器与最小化工具](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#19--模块捆绑器与最小化工具)
  - [20. 📦 CLI 与调试器](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#20--cli-与调试器)
  - [21. 📦 系统模块](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#21--系统模块)
  - [22. 📦 其他](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md#22--其他)
- [x] [0040. npm 版本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0040.%20npm%20%E7%89%88%E6%9C%AC/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0040.%20npm%20%E7%89%88%E6%9C%AC/README.md#1--概述)
  - [2. 💻 查看 npm 版本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0040.%20npm%20%E7%89%88%E6%9C%AC/README.md#2--查看-npm-版本)
  - [3. 💻 npm 版本升级](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0040.%20npm%20%E7%89%88%E6%9C%AC/README.md#3--npm-版本升级)
  - [4. 💻 安装最新的 npm 版本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0040.%20npm%20%E7%89%88%E6%9C%AC/README.md#4--安装最新的-npm-版本)
- [x] [0041. 常见的 npm 命令](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#1--概述)
  - [2. 💻 npm 命令 - 安装包](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#2--npm-命令---安装包)
  - [3. 💻 npm 命令 - 查看已安装的包](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#3--npm-命令---查看已安装的包)
  - [4. 💻 npm 命令 - 卸载包](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#4--npm-命令---卸载包)
  - [5. 💻 npm 命令 - 更新包](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#5--npm-命令---更新包)
  - [6. 💻 npm 命令 - 查看 npm 版本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#6--npm-命令---查看-npm-版本)
  - [7. 💻 npm 命令 - 查看 Node.js 版本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#7--npm-命令---查看-nodejs-版本)
  - [8. 💻 npm 命令 - 清理缓存](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#8--npm-命令---清理缓存)
  - [9. 💻 npm 命令 - 搜索包](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#9--npm-命令---搜索包)
  - [10. 💻 npm 命令 - 查看包信息](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#10--npm-命令---查看包信息)
  - [11. 💻 npm 命令 - 初始化项目](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#11--npm-命令---初始化项目)
  - [12. 💻 npm 命令 - 运行脚本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#12--npm-命令---运行脚本)
  - [13. 💻 npm 命令 - 查看帮助文档](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#13--npm-命令---查看帮助文档)
  - [14. 💻 npm 命令 - 查看 npm 配置](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md#14--npm-命令---查看-npm-配置)
- [x] [0042. 认识 package.json](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0042.%20%E8%AE%A4%E8%AF%86%20package.json/README.md)
  - [1. 🔗 npm docs package.json](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0042.%20%E8%AE%A4%E8%AF%86%20package.json/README.md#1--npm-docs-packagejson)
  - [2. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0042.%20%E8%AE%A4%E8%AF%86%20package.json/README.md#2--概述)
  - [3. 💻 `package.json` 的初始化](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0042.%20%E8%AE%A4%E8%AF%86%20package.json/README.md#3--packagejson-的初始化)
  - [4. 📒 `package.json` 文件的基本结构](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0042.%20%E8%AE%A4%E8%AF%86%20package.json/README.md#4--packagejson-文件的基本结构)
  - [5. 📒 `package.json` 的其他常用字段](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0042.%20%E8%AE%A4%E8%AF%86%20package.json/README.md#5--packagejson-的其他常用字段)
- [x] [0043. 认识 package-lock.json](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0043.%20%E8%AE%A4%E8%AF%86%20package-lock.json/README.md)
  - [1. 🔗 npm docs package-lock.json](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0043.%20%E8%AE%A4%E8%AF%86%20package-lock.json/README.md#1--npm-docs-package-lockjson)
  - [2. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0043.%20%E8%AE%A4%E8%AF%86%20package-lock.json/README.md#2--概述)
  - [3. 📒 理解 `package-lock.json` 的必要性](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0043.%20%E8%AE%A4%E8%AF%86%20package-lock.json/README.md#3--理解-package-lockjson-的必要性)
  - [4. 📒 `package-lock.json` 文件结构](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0043.%20%E8%AE%A4%E8%AF%86%20package-lock.json/README.md#4--package-lockjson-文件结构)
  - [5. 📒 `package-lock.json` 会自动生成和更新](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0043.%20%E8%AE%A4%E8%AF%86%20package-lock.json/README.md#5--package-lockjson-会自动生成和更新)
  - [6. 📒 注意事项](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0043.%20%E8%AE%A4%E8%AF%86%20package-lock.json/README.md#6--注意事项)

## 4. Node.js 核心原理

- [x] [0050. Node.js 生命周期](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#1--概述)
  - [2. 📒 `timers、poll、check` 队列中分别存放哪些回调任务](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#2--timerspollcheck-队列中分别存放哪些回调任务)
  - [3. 📒 宏队列、微队列](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#3--宏队列微队列)
  - [4. 📒 `poll` 队列的特殊性](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#4--poll-队列的特殊性)
  - [5. 💻 demos.1 - 阻塞操作对计时器的影响](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#5--demos1---阻塞操作对计时器的影响)
  - [6. 💻 demos.2 - `setImmediate` 和 `setTimeout` 的性能对比](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#6--demos2---setimmediate-和-settimeout-的性能对比)
  - [7. 💻 demos.3 - `setTimeout(fn1, 0)` 和 `setImmediate(fm2)` 中的 `fn1`、`fn2` 哪个先执行？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#7--demos3---settimeoutfn1-0-和-setimmediatefm2-中的-fn1fn2-哪个先执行)
  - [8. 💼 demos.4 - 练手面试题 - 1](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#8--demos4---练手面试题---1)
  - [9. 💼 demos.5 - 练手面试题 - 2](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#9--demos5---练手面试题---2)
  - [10. 🔗 参考资料](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#10--参考资料)

## 5. Node.js 内置模块 ⏰

### 5.1. https

- [x] [0028. 基于 nodejs 在本地快速启动一个 https 服务](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0028.%20%E5%9F%BA%E4%BA%8E%20nodejs%20%E5%9C%A8%E6%9C%AC%E5%9C%B0%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E4%B8%AA%20https%20%E6%9C%8D%E5%8A%A1/README.md)
  - [1. 📒 运行 HTTPS 服务的前提条件 - 证书 ➕ 私钥](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0028.%20%E5%9F%BA%E4%BA%8E%20nodejs%20%E5%9C%A8%E6%9C%AC%E5%9C%B0%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E4%B8%AA%20https%20%E6%9C%8D%E5%8A%A1/README.md#1--运行-https-服务的前提条件---证书--私钥)
  - [2. 📒 安装工具 - OpenSSL](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0028.%20%E5%9F%BA%E4%BA%8E%20nodejs%20%E5%9C%A8%E6%9C%AC%E5%9C%B0%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E4%B8%AA%20https%20%E6%9C%8D%E5%8A%A1/README.md#2--安装工具---openssl)
  - [3. 💻 demos.1 - 实现方案：使用 Node.js 的 `https` 模块 + `express` 服务框架](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0028.%20%E5%9F%BA%E4%BA%8E%20nodejs%20%E5%9C%A8%E6%9C%AC%E5%9C%B0%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E4%B8%AA%20https%20%E6%9C%8D%E5%8A%A1/README.md#3--demos1---实现方案使用-nodejs-的-https-模块--express-服务框架)

### 5.2. process

- [ ] [0001. 使用 process 模块来区分不同的操作系统](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0001.%20%E4%BD%BF%E7%94%A8%20process%20%E6%A8%A1%E5%9D%97%E6%9D%A5%E5%8C%BA%E5%88%86%E4%B8%8D%E5%90%8C%E7%9A%84%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/README.md)
  - [1. 💻 demos.1 - 通过 process.platform 中记录的当前平台信息来区分不同的操作系统](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0001.%20%E4%BD%BF%E7%94%A8%20process%20%E6%A8%A1%E5%9D%97%E6%9D%A5%E5%8C%BA%E5%88%86%E4%B8%8D%E5%90%8C%E7%9A%84%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/README.md#1--demos1---通过-processplatform-中记录的当前平台信息来区分不同的操作系统)
- [ ] [0020. 通过 process.argv 获取脚本的命令行参数](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0020.%20%E9%80%9A%E8%BF%87%20process.argv%20%E8%8E%B7%E5%8F%96%E8%84%9A%E6%9C%AC%E7%9A%84%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0/README.md)
  - [1. 🤖 `node 1.js args` 如何在 1.js 中获取到 args？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0020.%20%E9%80%9A%E8%BF%87%20process.argv%20%E8%8E%B7%E5%8F%96%E8%84%9A%E6%9C%AC%E7%9A%84%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0/README.md#1--node-1js-args-如何在-1js-中获取到-args)
  - minimist
  - process.argv

### 5.3. crypto

- [ ] [0002. crypto 模块中的 hash 工具方法 createHash](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0002.%20crypto%20%E6%A8%A1%E5%9D%97%E4%B8%AD%E7%9A%84%20hash%20%E5%B7%A5%E5%85%B7%E6%96%B9%E6%B3%95%20createHash/README.md)
  - [1. ⏰ 待整理](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0002.%20crypto%20%E6%A8%A1%E5%9D%97%E4%B8%AD%E7%9A%84%20hash%20%E5%B7%A5%E5%85%B7%E6%96%B9%E6%B3%95%20createHash/README.md#1--待整理)
- [ ] [0007. crypto 模块](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0007.%20crypto%20%E6%A8%A1%E5%9D%97/README.md)
  - [1. ⏰ 语雀上记录了一些内容，找时间搬运过来。](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0007.%20crypto%20%E6%A8%A1%E5%9D%97/README.md#1--语雀上记录了一些内容找时间搬运过来)

## 6. nodejs 的版本管理工具 ⏰

- [x] [0029. nvm](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md)
  - [1. 📒 概述](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md#1--概述)
  - [2. 🔗 nvm-windows - Github 仓库](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md#2--nvm-windows---github-仓库)
  - [3. 🔗 nvm-sh - Github 仓库](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md#3--nvm-sh---github-仓库)
  - [4. 📒 什么是 NVM？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md#4--什么是-nvm)
  - [5. 💻 下载和安装 NVM](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md#5--下载和安装-nvm)
    - [5.1. Windows 用户：安装 `nvm-windows`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md#51-windows-用户安装-nvm-windows)
    - [5.2. macOS/Linux 用户：安装 nvm-sh](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md#52-macoslinux-用户安装-nvm-sh)
  - [6. 💻 使用 NVM 管理 Node.js 版本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md#6--使用-nvm-管理-nodejs-版本)

## 7. koa ⏰

- [ ] [0008. koa-send](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0008.%20koa-send/README.md)
  - [1. ⏰ 待搬运](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0008.%20koa-send/README.md#1--待搬运)
- [ ] [0009. koa-static](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0009.%20koa-static/README.md)
  - [1. ⏰ 待搬运](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0009.%20koa-static/README.md#1--待搬运)

## 8. npm 相关 ⏰

- [ ] [0012. 使用 nrm 管理 npm 源](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0012.%20%E4%BD%BF%E7%94%A8%20nrm%20%E7%AE%A1%E7%90%86%20npm%20%E6%BA%90/README.md)
  - [1. 📒 使用 nrm 管理 npm 源](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0012.%20%E4%BD%BF%E7%94%A8%20nrm%20%E7%AE%A1%E7%90%86%20npm%20%E6%BA%90/README.md#1--使用-nrm-管理-npm-源)
  - [2. 🤖 npm 都有哪些常用的镜像源？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0012.%20%E4%BD%BF%E7%94%A8%20nrm%20%E7%AE%A1%E7%90%86%20npm%20%E6%BA%90/README.md#2--npm-都有哪些常用的镜像源)
- [ ] [0014. 如何使用 nvm 管理 nodejs 版本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md)
  - [1. 🔗 nvm](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md#1--nvm)
  - [2. 📒 notes](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md#2--notes)
  - [3. 💻 demo - `nvm ls` 查看本地安装的所有 nodejs 版本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md#3--demo---nvm-ls-查看本地安装的所有-nodejs-版本)
  - [4. 💻 demo - `nvm install <version>` 安装指定版本的 nodejs](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md#4--demo---nvm-install-version-安装指定版本的-nodejs)
  - [5. `nvm use <version>` 使用指定版本的 nodejs](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md#5-nvm-use-version-使用指定版本的-nodejs)
  - [6. 🤖 如何下载 nvm 管理 nodejs 版本](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md#6--如何下载-nvm-管理-nodejs-版本)
    - [6.1. 安装 NVM](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md#61-安装-nvm)
    - [6.2. 设置 NVM](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md#62-设置-nvm)
    - [6.3. 使用 NVM 安装 Node.js](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md#63-使用-nvm-安装-nodejs)
  - 以下是 nvm 的一些常用命令
    - `nvm ls` 查看本地安装的所有 nodejs 版本。
    - `nvm install <version>` 安装指定版本的 nodejs。
    - `nvm use <version>` 使用指定版本的 nodejs。
  - nodejs 查看当前版本
    - `node -v`
    - 也可以通过 `nvm ls` 来查看，前面带有星号 * 的版本为当前使用的版本。
  - 官方文档的 README.md 内容很全，详细介绍可以参考官方文档。
- [ ] [0010. npm 生命周期 prepublish](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0010.%20npm%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%20prepublish/README.md)
  - [1. 💻 demos.1 - npm 生命周期 prepublish 的基本使用](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0010.%20npm%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%20prepublish/README.md#1--demos1---npm-生命周期-prepublish-的基本使用)
  - [2. 🤖 请介绍一下 package.json 中的 scripts 字段下的 prepublish](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0010.%20npm%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%20prepublish/README.md#2--请介绍一下-packagejson-中的-scripts-字段下的-prepublish)
    - [2.1. 使用 `prepublishOnly`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0010.%20npm%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%20prepublish/README.md#21-使用-prepublishonly)
    - [2.2. 注意事项](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0010.%20npm%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%20prepublish/README.md#22-注意事项)
- [ ] [0011. npm 配置文件 .npmrc](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md)
  - [1. 📝 npmrc 全称](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#1--npmrc-全称)
  - [2. 🤖 请介绍一下 .npmrc 文件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#2--请介绍一下-npmrc-文件)
    - [2.1. 常见配置项](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#21-常见配置项)
    - [2.2. 示例](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#22-示例)
      - [2.2.1. 项目级别的 `.npmrc`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#221-项目级别的-npmrc)
      - [2.2.2. 用户级别的 `.npmrc`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#222-用户级别的-npmrc)
      - [2.2.3. 全局级别的 `.npmrc`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#223-全局级别的-npmrc)
    - [2.3. 优先级](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#23-优先级)
    - [2.4. 查看当前配置](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#24-查看当前配置)
    - [2.5. 总结](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#25-总结)
  - [3. 🤖 rc 是什么单词的缩写？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#3--rc-是什么单词的缩写)
    - [3.1. 常见的 `.rc` 文件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#31-常见的-rc-文件)
    - [3.2. 用途](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#32-用途)
    - [3.3. 具体到 `.npmrc`](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#33-具体到-npmrc)
    - [3.4. 总结](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md#34-总结)
- [ ] [0024. npm link 基本使用](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0024.%20npm%20link%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md)
  - [1. 🔗 npm docs - npm-link](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0024.%20npm%20link%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--npm-docs---npm-link)
  - [2. 📒 `npm link` 简介](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0024.%20npm%20link%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--npm-link-简介)
  - [3. 💻 demo - `npm link` 基本使用](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0024.%20npm%20link%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#3--demo---npm-link-基本使用)
  - [4. 📒 和 link 相关的命令](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0024.%20npm%20link%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#4--和-link-相关的命令)
  - [5. 📒 `npm link` 的实际应用场景](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0024.%20npm%20link%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#5--npm-link-的实际应用场景)
  - 本节介绍了 `npm link` 的基本使用。
  - 重点在于理解 `npm link` 的应用场景，主要用于解决什么问题。
- [ ] [0023. npm 内置命令](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0023.%20npm%20%E5%86%85%E7%BD%AE%E5%91%BD%E4%BB%A4/README.md)
  - [1. 🔗 查看 npm 内置命令](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0023.%20npm%20%E5%86%85%E7%BD%AE%E5%91%BD%E4%BB%A4/README.md#1--查看-npm-内置命令)
  - [2. 🤔 思考：为什么 npm start 不需要 run，npm run start？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0023.%20npm%20%E5%86%85%E7%BD%AE%E5%91%BD%E4%BB%A4/README.md#2--思考为什么-npm-start-不需要-runnpm-run-start)
  - [3. 📒 npm 内置命令 vs. 非 npm 内置命令](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0023.%20npm%20%E5%86%85%E7%BD%AE%E5%91%BD%E4%BB%A4/README.md#3--npm-内置命令-vs-非-npm-内置命令)
  - [4. 📒 内置命令列表](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0023.%20npm%20%E5%86%85%E7%BD%AE%E5%91%BD%E4%BB%A4/README.md#4--内置命令列表)
  - [5. 📒 常见内置命令分类](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0023.%20npm%20%E5%86%85%E7%BD%AE%E5%91%BD%E4%BB%A4/README.md#5--常见内置命令分类)
  - 知道什么是 npm 内置命令。
  - 对目前（2024年11月6日18:52:37）能查询到的所有内置命令做了一个简单的描述、分类。

## 9. nodejs 命令行操作 ⏰

- [ ] [0003. 使用 npm_lifecycle_script 获取当前运行的 nodejs 命令](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0003.%20%E4%BD%BF%E7%94%A8%20npm_lifecycle_script%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%BF%90%E8%A1%8C%E7%9A%84%20nodejs%20%E5%91%BD%E4%BB%A4/README.md)
  - [1. 📒 npm_lifecycle_script 是什么?](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0003.%20%E4%BD%BF%E7%94%A8%20npm_lifecycle_script%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%BF%90%E8%A1%8C%E7%9A%84%20nodejs%20%E5%91%BD%E4%BB%A4/README.md#1--npm_lifecycle_script-是什么)
  - [2. 📒 npm_lifecycle_script 的作用](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0003.%20%E4%BD%BF%E7%94%A8%20npm_lifecycle_script%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%BF%90%E8%A1%8C%E7%9A%84%20nodejs%20%E5%91%BD%E4%BB%A4/README.md#2--npm_lifecycle_script-的作用)
  - [3. 💻 运行示例](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0003.%20%E4%BD%BF%E7%94%A8%20npm_lifecycle_script%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%BF%90%E8%A1%8C%E7%9A%84%20nodejs%20%E5%91%BD%E4%BB%A4/README.md#3--运行示例)
  - [4. 💻 demo](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0003.%20%E4%BD%BF%E7%94%A8%20npm_lifecycle_script%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%BF%90%E8%A1%8C%E7%9A%84%20nodejs%20%E5%91%BD%E4%BB%A4/README.md#4--demo)
  - 这篇笔记介绍了
    - npm_lifecycle_script 是什么
    - npm_lifecycle_script 有啥用
- [ ] [0004. 学会使用 nodejs 运行 .js 文件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0004.%20%E5%AD%A6%E4%BC%9A%E4%BD%BF%E7%94%A8%20nodejs%20%E8%BF%90%E8%A1%8C%20.js%20%E6%96%87%E4%BB%B6/README.md)
  - [1. 🔗 links](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0004.%20%E5%AD%A6%E4%BC%9A%E4%BD%BF%E7%94%A8%20nodejs%20%E8%BF%90%E8%A1%8C%20.js%20%E6%96%87%E4%BB%B6/README.md#1--links)
  - [2. 📒 使用 nodejs 运行 .js 文件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0004.%20%E5%AD%A6%E4%BC%9A%E4%BD%BF%E7%94%A8%20nodejs%20%E8%BF%90%E8%A1%8C%20.js%20%E6%96%87%E4%BB%B6/README.md#2--使用-nodejs-运行-js-文件)
  - [3. 📒 code runner 插件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0004.%20%E5%AD%A6%E4%BC%9A%E4%BD%BF%E7%94%A8%20nodejs%20%E8%BF%90%E8%A1%8C%20.js%20%E6%96%87%E4%BB%B6/README.md#3--code-runner-插件)
  - [4. 💻 使用 code runner 插件运行 .js 文件](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0004.%20%E5%AD%A6%E4%BC%9A%E4%BD%BF%E7%94%A8%20nodejs%20%E8%BF%90%E8%A1%8C%20.js%20%E6%96%87%E4%BB%B6/README.md#4--使用-code-runner-插件运行-js-文件)
  - 本文介绍了两种使用 nodejs 运行 .js 文件的方式。（使用终端手输 node 命令/使用插件 code runner 自动生成运行命令）
    - 使用 nodejs 运行 .js 脚本非常简单，只需要执行 `node xxx.js` 即可。使用插件 code runner 可以自动生成运行命令。
  - 视频：✅
  - ⏰ 早期录制过视频说明，在录制新视频的时候可以到语雀上回看下旧版视频。
  - ⏰ 替换为 gif 动图 👉 💻 使用 code runner 插件运行 .js 文件
- [ ] [0013. 安装 nodejs](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0013.%20%E5%AE%89%E8%A3%85%20nodejs/README.md)
  - [1. 🔗 links](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0013.%20%E5%AE%89%E8%A3%85%20nodejs/README.md#1--links)
  - [2. 📒 新版 nodejs](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0013.%20%E5%AE%89%E8%A3%85%20nodejs/README.md#2--新版-nodejs)
  - [3. 📒 旧版 nodejs](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0013.%20%E5%AE%89%E8%A3%85%20nodejs/README.md#3--旧版-nodejs)
  - 视频：✅
  - ⏰ 语雀知识库中存储的视频中演示流程是安装旧版 nodejs 的步骤。最新版的 nodejs 的页面发生了一些变化，可以结合着最新版的 nodejs 来重新录制一下基本的安装流程。
- [ ] [0021. minimist 基本使用](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0021.%20minimist%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md)
  - [1. 🔗 minimist](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0021.%20minimist%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--minimist)
  - [2. 🤖 `node 1.js args` 如何在 1.js 中获取到 args？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0021.%20minimist%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--node-1js-args-如何在-1js-中获取到-args)

## 10. 其他 ⏰

- [ ] [0005. 获取 macos 下都安装了哪些应用](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0005.%20%E8%8E%B7%E5%8F%96%20macos%20%E4%B8%8B%E9%83%BD%E5%AE%89%E8%A3%85%E4%BA%86%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8/README.md)
  - [1. 🔗 links](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0005.%20%E8%8E%B7%E5%8F%96%20macos%20%E4%B8%8B%E9%83%BD%E5%AE%89%E8%A3%85%E4%BA%86%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8/README.md#1--links)
  - [2. 📒 macOS 中的 system_profiler 是什么？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0005.%20%E8%8E%B7%E5%8F%96%20macos%20%E4%B8%8B%E9%83%BD%E5%AE%89%E8%A3%85%E4%BA%86%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8/README.md#2--macos-中的-system_profiler-是什么)
  - [3. 📒 plist.js 是什么？有什么用？](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0005.%20%E8%8E%B7%E5%8F%96%20macos%20%E4%B8%8B%E9%83%BD%E5%AE%89%E8%A3%85%E4%BA%86%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8/README.md#3--plistjs-是什么有什么用)
  - [4. 💻 demo](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0005.%20%E8%8E%B7%E5%8F%96%20macos%20%E4%B8%8B%E9%83%BD%E5%AE%89%E8%A3%85%E4%BA%86%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8/README.md#4--demo)
  - 本文介绍了类似 rubick 这样的效率工具，是如何实现本地应用快速检索并启动的。
- [ ] [0006. 使用 screencapture 命令实现 macos 系统截图](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0006.%20%E4%BD%BF%E7%94%A8%20screencapture%20%E5%91%BD%E4%BB%A4%E5%AE%9E%E7%8E%B0%20macos%20%E7%B3%BB%E7%BB%9F%E6%88%AA%E5%9B%BE/README.md)
  - [1. 🔗 links](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0006.%20%E4%BD%BF%E7%94%A8%20screencapture%20%E5%91%BD%E4%BB%A4%E5%AE%9E%E7%8E%B0%20macos%20%E7%B3%BB%E7%BB%9F%E6%88%AA%E5%9B%BE/README.md#1--links)
  - [2. 💻 demo1](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0006.%20%E4%BD%BF%E7%94%A8%20screencapture%20%E5%91%BD%E4%BB%A4%E5%AE%9E%E7%8E%B0%20macos%20%E7%B3%BB%E7%BB%9F%E6%88%AA%E5%9B%BE/README.md#2--demo1)
  - 本文介绍如何在 macOS 上使用 screencapture 命令来实现截图功能。

## 11. 包管理器 ⏰

- [ ] [0027. 在 Windows 的 power shell 中执行 pnpm i 命令错误问题](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0027.%20%E5%9C%A8%20Windows%20%E7%9A%84%20power%20shell%20%E4%B8%AD%E6%89%A7%E8%A1%8C%20pnpm%20i%20%E5%91%BD%E4%BB%A4%E9%94%99%E8%AF%AF%E9%97%AE%E9%A2%98/README.md)
  - [1. 📒 报错日志示例](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0027.%20%E5%9C%A8%20Windows%20%E7%9A%84%20power%20shell%20%E4%B8%AD%E6%89%A7%E8%A1%8C%20pnpm%20i%20%E5%91%BD%E4%BB%A4%E9%94%99%E8%AF%AF%E9%97%AE%E9%A2%98/README.md#1--报错日志示例)
  - [2. 💻 修改 Power Shell 执行策略 - 解决报错](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0027.%20%E5%9C%A8%20Windows%20%E7%9A%84%20power%20shell%20%E4%B8%AD%E6%89%A7%E8%A1%8C%20pnpm%20i%20%E5%91%BD%E4%BB%A4%E9%94%99%E8%AF%AF%E9%97%AE%E9%A2%98/README.md#2--修改-power-shell-执行策略---解决报错)
