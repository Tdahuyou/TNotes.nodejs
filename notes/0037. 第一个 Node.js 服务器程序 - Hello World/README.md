# [0037. 第一个 Node.js 服务器程序 - Hello World](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0037.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%20Node.js%20%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A8%8B%E5%BA%8F%20-%20Hello%20World)

<!-- region:toc -->

- [1. 💻 demos.1 - Hello World](#1--demos1---hello-world)
- [2. 💻 demos.2 - 如果要响应中文，需要设置编码方式为 UTF-8 来避免乱码的问题](#2--demos2---如果要响应中文需要设置编码方式为-utf-8-来避免乱码的问题)

<!-- endregion:toc -->

## 1. 💻 demos.1 - Hello World

::: code-group

```js [demos/1/index.cjs]
// 加载 Node.js 内置的 http 模块
const http = require('http')

// 在控制台输出提示信息，引导用户访问指定地址
console.log('请打开浏览器，输入地址 http://127.0.0.1:3000/')

// 使用 http.createServer 创建一个 HTTP 服务器
http
  .createServer((req, res) => {
    // req（请求对象）：包含客户端发送的请求信息，例如 URL、HTTP 方法等。
    // res（响应对象）：用于向客户端发送响应数据。

    // 使用 res.end 方法结束响应，并向页面输出 "Hello World!" 文本
    res.end('Hello World!')

    // 在控制台输出日志提示，表示服务器已正确处理请求
    console.log('请求已处理')
  })
  // 使用 listen 方法启动服务器，监听指定的 IP 地址和端口号
  .listen(3000, '127.0.0.1')
```

:::

- 最终效果：
  - 执行 `node index.cjs` 启动服务。
  - 打开浏览器输入地址 http://127.0.0.1:3000/ 访问服务。
    - ![图 1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-04-11-15-49.png)
  - 控制台日志：
    - ![图 2](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-04-11-16-35.png)
- **🤔 问：为什么这里要命名为 index.cjs 呢，不能直接写 index.js 吗？**
  - 在 Node.js 中，如果项目的 `package.json` 文件中设置了 `"type": "module"`，则默认使用 ES Module 规范（即 `import` 和 `export`），而不是 CommonJS 规范（即 `require` 和 `module.exports`）。
  - 如果在 `"type": "module"` 的项目中使用 `require`，会报错：
    - `ReferenceError: require is not defined in ES module scope, you can use import instead`
    - ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-04-11-07-56.png)
  - **解决方法**：
    - 将文件扩展名改为 `.cjs`，明确告诉 Node.js 使用 CommonJS 规范加载模块。
    - 或者，移除 `package.json` 中的 `"type": "module"` 配置，让项目默认使用 CommonJS 规范。

::: tip

如果项目需要同时支持 CommonJS 和 ES Module，可以将 CommonJS 文件命名为 `.cjs`，将 ES Module 文件命名为 `.mjs`，以避免冲突。

:::

## 2. 💻 demos.2 - 如果要响应中文，需要设置编码方式为 UTF-8 来避免乱码的问题

::: code-group

```js [修改前]
const http = require('http')
console.log('请打开浏览器，输入地址 http://127.0.0.1:3000/')
http
  .createServer((req, res) => {
    res.end('你好，世界。')
    console.log('请求已处理')
  })
  .listen(3000, '127.0.0.1')
```

```js {6} [修改后]
const http = require('http')
console.log('请打开浏览器，输入地址 http://127.0.0.1:3000/')
http
  .createServer((req, res) => {
    // 要想让 Node.js 程序输出中文，只需要在输出内容之前将要显示网页的编码方式设置为 UTF-8。
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })

    res.end('你好，世界。')
    console.log('请求已处理')
  })
  .listen(3000, '127.0.0.1')
```

:::

- 最终效果：
  - 修改前：
    - ![图 3](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-04-11-19-19.png)
  - 修改后：
    - ![图 4](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-04-11-24-00.png)
  - 注：不要在意背景色，背景色仅仅是个人的主题配置，跟上述程序没有任何关系。
