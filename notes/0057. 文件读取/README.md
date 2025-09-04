# [0057. 文件读取](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0057.%20%E6%96%87%E4%BB%B6%E8%AF%BB%E5%8F%96)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 demos.1 - 异步读取 - `fs.readFile`](#2--demos1---异步读取---fsreadfile)
- [3. 💻 demos.2 - 同步读取 - `fs.readFileSync`](#3--demos2---同步读取---fsreadfilesync)
- [4. 💻 demos.3 - 流式读取 - `fs.createReadStream`](#4--demos3---流式读取---fscreatereadstream)
- [5. 💻 demos.4 - 模拟听歌时显示歌词的效果](#5--demos4---模拟听歌时显示歌词的效果)
- [6. 🔗 References](#6--references)

<!-- endregion:toc -->

## 1. 📝 概述

- **读取文件**
  - 在 Node.js 中，文件读取是一个常见的操作，通常用于处理本地文件系统中的数据。
  - Node.js 提供了内置的 `fs`（File System）模块来实现文件的读取、写入以及其他文件系统操作。
- **编码**
  - 在读取文件时，可以通过 `options` 参数指定编码。
  - 如果未指定编码，返回的数据将以 `Buffer` 形式表示。
  - 如果指定了编码（比如 `utf8`），返回的数据将以对应编码的字符串形式表示。
- **同步与异步读取**
  - Node.js 的文件读取支持两种模式：同步和异步。
  - **同步读取**：会阻塞事件循环，直到文件读取完成。适用于简单的脚本或初始化阶段。
  - **异步读取**：不会阻塞事件循环，适合高并发场景。
- **适用场景**
  - **小文件**：直接使用 `fs.readFile` 或 `fs.readFileSync`。
  - **大文件**：使用流式读取（`fs.createReadStream`）以节省内存。
  - **实时性要求高**：优先选择异步方法，避免阻塞主线程。
  - **简单脚本**：可以使用同步方法，但需注意性能问题。

## 2. 💻 demos.1 - 异步读取 - `fs.readFile`

::: code-group

```javascript [1.cjs]
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '1.txt')

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件失败:', err)
    return
  }
  console.log('文件内容:', data)
})

// 输出：
// 文件内容: test

// 注解：
// fs.readFile(path[, options], callback)
// path：文件路径（可以是字符串或 Buffer）。
// options：可选参数，用于指定编码（如 'utf8'）或其他选项。
// callback：回调函数，格式为 (err, data)。
//   如果读取成功，data 包含文件内容。
//   如果读取失败，err 包含错误信息。
```

```txt [1.txt]
test
```

:::

## 3. 💻 demos.2 - 同步读取 - `fs.readFileSync`

::: code-group

```javascript [1.cjs]
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '1.txt')

try {
  const data1 = fs.readFileSync(filePath, 'utf8')
  const data2 = fs.readFileSync(filePath)
  console.log(data1) // test
  console.log(typeof data1) // string
  console.log(data2) // <Buffer 74 65 73 74 0a>
  console.log(typeof data2) // object
} catch (err) {
  console.error('读取文件失败:', err)
}

// fs.readFileSync(path[, options])

// 参数解释：
// path：文件路径。
// options：可选参数，用于指定编码。

// 返回值：
// 如果指定了编码（如 'utf8'），返回字符串。
// 如果未指定编码，返回 Buffer 对象。
```

```txt [1.txt]
test
```

:::

## 4. 💻 demos.3 - 流式读取 - `fs.createReadStream`

::: code-group

```javascript [1.cjs]
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '1.txt')

const stream = fs.createReadStream(filePath, { encoding: 'utf8' })

stream.on('data', (chunk) => {
  console.log('读取到的数据块:', chunk)
})

stream.on('end', () => {
  console.log('文件读取完毕')
})

stream.on('error', (err) => {
  console.error('读取文件失败:', err)
})

// 输出：
// 读取到的数据块: test
// 文件读取完毕

// fs.createReadStream(path[, options])
// 对于大文件，使用流式读取可以避免一次性加载整个文件到内存中，从而提高性能。

// 参数解释：
// path：文件路径。
// options：可选参数，例如指定编码或读取范围。

// 补充：
// demos 中的 1.txt 文件并非大型文件
// 一次就读完了
// 在实际测试的时候可替换为体积大一些的图片资源或者视频资源资源来测试
```

```txt [1.txt]
test
```

:::

## 5. 💻 demos.4 - 模拟听歌时显示歌词的效果

::: code-group

```js [1.cjs]
const fs = require('fs')
const path = require('path')

// 定义歌词文件路径
const songFilePath = path.join(__dirname, 'song.txt')

/**
 * 解析歌词行，提取时间戳和内容
 * @param {string} line - 歌词文件的一行
 * @returns {Object|null} - 返回解析后的对象，包含时间（毫秒）和内容；如果解析失败，返回 null
 */
function parseLyricLine(line) {
  const reg = /\[(\d{2}):(\d{2})\.(\d{2})\]\s*(.+)/
  const matches = reg.exec(line)
  if (!matches) return null

  // 提取分钟、秒、毫秒和歌词内容
  const [_, minutes, seconds, milliseconds, content] = matches
  const time =
    parseInt(minutes, 10) * 60 * 1000 +
    parseInt(seconds, 10) * 1000 +
    parseInt(milliseconds, 10)

  return { time, content }
}

/**
 * 处理歌词文件内容，定时输出歌词
 * @param {string} data - 歌词文件的完整内容
 */
function processLyrics(data) {
  const lines = data.split('\n') // 按行分割歌词

  lines.forEach((line) => {
    const parsedLine = parseLyricLine(line)
    if (parsedLine) {
      // 使用 setTimeout 定时输出歌词
      setTimeout(() => {
        console.log(parsedLine.content)
      }, parsedLine.time)
    }
  })
}

/**
 * 主函数：读取歌词文件并处理
 */
function main() {
  fs.readFile(songFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`读取歌词文件失败: ${err.message}`)
      return
    }

    try {
      processLyrics(data) // 处理歌词内容
    } catch (error) {
      console.error(`处理歌词时发生错误: ${error.message}`)
    }
  })
}

// 执行主函数
main()
```

```txt [song.txt]
[ti:hello]
[ar:张鑫]
[t_time:(03:46)]
[00:00.00] hello - 张鑫
[00:02.00] 词：王人
[00:04.00] 曲：王人
[00:06.00] 编曲：梁桦
[00:08.00] 歌词编辑：东东
[00:18.23] 每件事情都有发生的理由
[00:21.72] 可无法解释 遇见你
[00:26.15] 再多的心理准备 都抵抗不了
[00:29.89] 被现实打败的爱情
[00:34.27] 我们都习惯了同一个温度
[00:38.08] 你说这叫幸福
[00:42.32] 同时也忽略了一种残酷
[00:45.39] 我觉得 好无助
[00:50.69] 我想 我想
[00:53.54] 我想一起越过所有困难和阻挡
[00:57.64] 而我们 却不一样
[01:01.58] 虽然都有共同的理想
[01:06.10] 窗外 有阳光
[01:09.76] 透过了一丝缝隙照亮了一点希望
[01:14.07] 而晚上 的月亮
[01:17.94] 让我们再次陷入了彷徨
[01:25.66] 你问为什么喜欢拍照记录
[01:29.27] 答案我却说不出
[01:33.17] 怕如果我们走了不同方向
[01:37.06] 有照片让我回顾
[01:41.36] 回忆我们去过的每一个地方
[01:45.41] 和时而停顿的脚步
[01:49.43] 就这么停停顿顿一步接一步
[01:53.75] 直到没有路
[01:57.91] 我想 我想
[02:00.86] 我想一起越过所有困难和阻挡
[02:04.95] 而我们 却不一样
[02:08.74] 虽然都有共同的理想
[02:13.15] 窗外 有阳光
[02:16.83] 透过了一丝缝隙照亮了一点希望
[02:21.01] 而晚上 的月亮
[02:25.30] 让我们再次陷入了彷徨
[02:30.44] 如果每一个清晨
[02:33.82] 在你的温度里苏醒
[02:37.82] 闭眼聆听 有节奏的呼吸
[02:41.63] 哪怕只是一瞬间
[02:43.68] 哪怕只是一场梦
[02:50.74] 我想 我想
[02:53.60] 我想一起越过所有困难和阻挡
[02:57.73] 而我们 却不一样
[03:01.43] 虽然都有共同的理想
[03:06.16] 窗外 有阳光
[03:09.81] 透过了一丝缝隙照亮了一点希望
[03:13.72] 而晚上 的月亮
[03:18.04] 让我们再次陷入了彷徨
[03:23.35] 每件事情都有发生的理由
[03:26.88] 可无法解释 遇见你
[03:31.17] 再多的心理准备 都抵抗不了
[03:35.11] 被命运安排的相遇
```

:::

- 最终效果：每一行的歌词，在时间到了之后才会输出。

::: swiper

![1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-15-22-11-50.png)

![2](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-15-22-12-06.png)

![3](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-04-15-22-12-48.png)

:::

> demo from：`《Node.js 从入门到精通》 例7.1`

## 6. 🔗 References

- https://nodejs.org/api/fs.html
  - Node.js 官方文档 - File system
