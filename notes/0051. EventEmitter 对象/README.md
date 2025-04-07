# [0051. EventEmitter 对象](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0051.%20EventEmitter%20%E5%AF%B9%E8%B1%A1)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - 使用 EventEmitter 对象创建简单事件](#2--demos1---使用-eventemitter-对象创建简单事件)
- [3. 💻 demos.2 - 监听事件的添加与触发](#3--demos2---监听事件的添加与触发)
- [4. 💻 demos.3 - 使用 once 方法添加监听事件](#4--demos3---使用-once-方法添加监听事件)
- [5. 💻 demos.4 - 使用 emit 方法触发事件](#5--demos4---使用-emit-方法触发事件)
- [6. 💻 demos.5 - 使用 emit 方法触发事件](#6--demos5---使用-emit-方法触发事件)
- [7. 💻 demos.6 - 删除指定的监听事件](#7--demos6---删除指定的监听事件)

<!-- endregion:toc -->

## 1. 📒 概述

- **事件 `events`**
  - Node.js 是一个事件驱动的运行时环境，所有的任务都可以视为事件处理。
  - `events` 模块是 Node.js 中用于实现事件驱动的核心模块，而 `EventEmitter` 类则是该模块的核心。
- **EventEmitter**
  - **定义**：`EventEmitter` 是 Node.js 中用于处理事件的核心类，允许对象订阅和触发自定义事件。
  - **作用**：它是 Node.js 事件驱动架构的基础，广泛应用于异步编程中。
  - **使用场景**：
    - 处理用户交互（如点击、键盘输入等）。
    - 自定义事件的发布与订阅。
    - 实现观察者模式。
  - **使用**：要使用 `EventEmitter`，首先需要引入 `events` 模块并创建实例：

```javascript
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
// 它提供了丰富的事件处理方法，所有可以添加监听事件的对象都继承自 EventEmitter。
```

## 2. 💻 demos.1 - 使用 EventEmitter 对象创建简单事件

::: code-group

```js [index.cjs]
// 引入 events 模块
const EventEmitter = require('events')

// 创建 EventEmitter 实例
const custom = new EventEmitter()

// 添加一次性监听事件 'tick'
custom.once('tick', () => {
  console.log('执行指定事件！')
})

// 主动触发监听事件 'tick'
custom.emit('tick')
```

:::

## 3. 💻 demos.2 - 监听事件的添加与触发

::: code-group

```js [app.cjs]
// 引入 rint 模块
const rint = require('./rint.cjs')

// 添加监听事件
rint.timer.on('tick', (code) => {
  console.log(`执行第 ${code} 次监听事件`)
})
```

```js [rint.cjs]
// 定义变量，用来记录执行次数
let num = 0

// 引入 events 模块
const EventEmitter = require('events')

// 创建 EventEmitter 实例
exports.timer = new EventEmitter()

// 每秒触发一次 'tick' 事件，并传递当前执行次数
setInterval(() => {
  num += 1
  exports.timer.emit('tick', num)
}, 1000)
```

:::

## 4. 💻 demos.3 - 使用 once 方法添加监听事件

::: code-group

```js [index.cjs]
// 引入 events 模块
const EventEmitter = require('events')

// 创建 EventEmitter 实例
const custom = new EventEmitter()

// 定义异常处理函数
function onUncaughtException(error) {
  // 输出异常内容
  console.log('发生异常，请多加小心 !')
}

// 添加一次性监听事件 'event'
custom.once('event', onUncaughtException)

// 主动触发监听事件 'event' 每秒一次
setInterval(() => {
  custom.emit('event')
}, 1000)
```

:::

## 5. 💻 demos.4 - 使用 emit 方法触发事件

::: code-group

```js [index.cjs]
// 引入 events 模块
const EventEmitter = require('events')

// 创建 EventEmitter 实例
const custom = new EventEmitter()

// 添加监听事件 'event'
custom.on('event', () => {
  console.log('触发监听事件！')
})

// 主动触发监听事件 'event'
custom.emit('event')
```

:::

## 6. 💻 demos.5 - 使用 emit 方法触发事件

::: code-group

```js [index.cjs]
// 引入 events 模块
const EventEmitter = require('events')

// 创建 EventEmitter 实例
const custom = new EventEmitter()

// 添加第一个监听事件 'event'
custom.on('event', (arg) => {
  console.log(`第 1 个监听器中的事件有参数 ${arg}`)
})

// 添加第二个监听事件 'event'
custom.on('event', (...args) => {
  const parameters = args.join(', ') // 连接参数
  console.log(`第 2 个监听器中的事件有参数 ${parameters}`)
})

// 主动触发监听事件 'event'
custom.emit('event', 1, '明日', '年龄：30', '爱好：编程')
```

:::

## 7. 💻 demos.6 - 删除指定的监听事件

::: code-group

```js [index.cjs]
// 引入 events 模块
const EventEmitter = require('events')

// 创建 EventEmitter 实例
const custom = new EventEmitter()

// 添加第一个监听事件 'event'
custom.on('event', (arg) => {
  console.log(`第 1 个监听器中的事件有参数 ${arg}`)
})

// 添加第二个监听事件 'event'
custom.on('event', (...args) => {
  const parameters = args.join(', ') // 连接参数
  console.log(`第 2 个监听器中的事件有参数 ${parameters}`)
})

// 主动触发监听事件 'event'
custom.emit('event', 1, '明日', '年龄：30', '爱好：编程')
```

:::
