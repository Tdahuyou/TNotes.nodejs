# [0052. EventEmitter 对象-2](https://github.com/Tdahuyou/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter%20%E5%AF%B9%E8%B1%A1-2)

<!-- region:toc -->

- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - on、emit、addListener](#2--demos1---onemitaddlistener)
- [3. 💻 demos.2 - 多次 emit](#3--demos2---多次-emit)
- [4. 💻 demos.3 - 传递参数](#4--demos3---传递参数)
- [5. 💻 demos.4 - once](#5--demos4---once)
- [6. 💻 demos.5 - off、removeListener](#6--demos5---offremovelistener)
- [7. 💻 demos.6 - 多次 on](#7--demos6---多次-on)
- [8. 💻 demos.7 - listenerCount](#8--demos7---listenercount)
- [9. 💻 demos.8 - removeAllListeners](#9--demos8---removealllisteners)
- [10. 💻 demos.9 - 立即执行](#10--demos9---立即执行)
- [11. 💻 demos.10 - emit 一个不存在的事件，相当于什么也没做](#11--demos10---emit-一个不存在的事件相当于什么也没做)
- [12. 💻 demos.11 - emit('error')](#12--demos11---emiterror)
- [13. 🔗 参考资料](#13--参考资料)

<!-- endregion:toc -->

## 1. 📒 概述

::: danger ⏰

继续整理 `demos.7`

:::

- `EventEmitter` 是 Node.js 的核心模块之一，它提供了实现 **事件驱动架构** 的基本工具。在 Node.js 和基于 Node.js 的应用程序（例如 Electron）中，事件驱动架构是一个核心的设计理念。
- **异步编程**：在 Node.js 中，异步编程是常态，EventEmitter 可以让你在某件事情完成（或者发生错误）时触发回调函数。
- **模块间解耦**：通过事件，不同的模块可以相互通信，而不需要直接引用对方。
- **实现观察者模式**：EventEmitter 提供了一种实现观察者模式的机制，观察者模式是一种设计模式，它定义了对象间的一种一对多的关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。
- **提升应用程序性能**：通过使用事件驱动的编程模型，我们可以非阻塞地处理 I/O，这可以让我们的应用程序在等待 I/O（如网络请求或文件读取）完成时做其他事情，从而提高应用程序的性能。
- **目标**：
  - 通过 demos 对事件驱动架构有个初步的认识。
- **个人评价**：
  - `EventEmitter` 在实际工作中使用相对较少，快速将 demos 给过一遍即可。
  - 重点在于认识“事件驱动架构”是一种什么样的编程体验，这对于我们学习那些基于 NodeJS 实现的框架而言，帮助是很大的。
    - 比如，Electron 就是基于 NodeJS 来实现的，在 Electron 中，用于实现 IPC 通信的模块 `ipcMain`、`ipcRenderer` 都是基于 `EventEmitter` 实现的，了解 `EventEmitter` 的一些常用 API，有助于我们快速上手 `ipcMain`、`ipcRenderer`。

## 2. 💻 demos.1 - on、emit、addListener

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

eIns.on('event', () => {
  console.log('emit event')
})

// eIns.addListener('event', () => {
//   console.log('emit event')
// })

eIns.emit('event')

// 输出：
// emit event

// addListener 和 on 是 EventEmitter 类的两个方法，它们在功能上是完全相同的，用于注册事件监听器。
// 实际上，on 方法就是 addListener 方法的别名，它们可以互换使用，没有实质性的区别。
// 我们可以根据个人喜好和代码风格选择使用 addListener 或 on。
```

:::

## 3. 💻 demos.2 - 多次 emit

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

eIns.on('event', () => {
  console.log('emit event')
})

eIns.emit('event')
eIns.emit('event')
eIns.emit('event')

// 输出：
// emit event
// emit event
// emit event

// on 方法用于注册事件监听器，当事件被触发时，注册的监听器会被调用。
// 每次 emit 触发事件时，都会调用注册的监听器。
```

:::

## 4. 💻 demos.3 - 传递参数

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

eIns.on('event', (...args) => {
  console.log('[emit event]:', ...args)
})

eIns.emit('event', 1)
eIns.emit('event', 1, 2)
eIns.emit('event', 1, 2, 3)

// 输出：
// [emit event]: 1
// [emit event]: 1 2
// [emit event]: 1 2 3

// 在调用 emit 触发事件的时候，是可以传递参数的。
// 想传几个就写几个，写法是非常灵活的。
// 在 on 注册的事件处理函数中可以通过剩余参数来接收动态参数。
```

:::

## 5. 💻 demos.4 - once

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

eIns.once('event', (...args) => {
  console.log('[emit event]:', ...args)
})

console.log(eIns.listenerCount('event')) // 1

eIns.emit('event', 1)

console.log(eIns.listenerCount('event')) // 0

eIns.emit('event', 1, 2)
eIns.emit('event', 1, 2, 3)

// 输出：
// 1
// [emit event]: 1
// 0

// once 和 on 的区别在于：
// on 注册的事件处理函数是可以被多次触发的。
// once 注册的事件处理函数只会被触发一次，触发完之后就会被移除掉。

// eIns.listenerCount(eventName: string): number
// 这个方法可通过事件名称获取对应的事件监听器的数量。

// 会发现执行了 eIns.emit('event', 1) 之后，监听器的数量就从 1 变为 0 了。
// 这其实也就说明通过 once 注册的事件，只会被触发一次，随后就会自动被移除。
```

:::

## 6. 💻 demos.5 - off、removeListener

::: code-group

```javascript {14,15} [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

function cb(...args) {
  console.log('[emit event]:', ...args)
}

eIns.on('event', cb)

eIns.emit('event', 1)
eIns.emit('event', 1, 2)

// eIns.off('event', cb)
eIns.removeListener('event', cb)

eIns.emit('event', 1, 2, 3)

// 输出：
// [emit event]: 1
// [emit event]: 1 2

// off = removeListener
// 与 on、addListener 一样，off 和 removeListener 也是等效的，根据自己习惯，选择一个喜欢的使用即可。

// 注意：匿名函数
// 如果我们在绑定 event 事件的监听器，使用的是匿名函数式的写法，那么 removeListener 是没法用的。
// 因为匿名函数没有函数名，这将导致我们没法找到这个函数引用（监听器）。
```

:::

## 7. 💻 demos.6 - 多次 on

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

function cb(...args) {
  console.log('[emit event]:', ...args)
}

eIns.on('event', cb)
eIns.on('event', cb)
eIns.on('event', cb)

eIns.emit('event', 1)

eIns.off('event', cb)

eIns.emit('event', 1, 2)

eIns.off('event', cb)

eIns.emit('event', 1, 2, 3)

// 输出：
// [emit event]: 1
// [emit event]: 1
// [emit event]: 1
// [emit event]: 1 2
// [emit event]: 1 2
// [emit event]: 1 2 3

// off() 方法用于移除监听器。
```

```javascript [2.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

function createCallback(id) {
  return (...args) => {
    console.log(`[Callback ${id}]:`, ...args)
  }
}

eIns.on('event', createCallback(1))
eIns.on('event', createCallback(2))
eIns.on('event', createCallback(3))

eIns.emit('event', 1)

// 输出：
// [Callback 1]: 1
// [Callback 2]: 1
// [Callback 3]: 1

// 触发顺序问题：
// 如果往某个事件上同时注册了多个回调，
// 那么在触发的时候，会按照注册的顺序依次触发。
```

```javascript [3.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

function cb(...args) {
  console.log('[emit event]:', ...args)
}

eIns.on('event', cb) // 第一个 cb
eIns.on('event', cb) // 第二个 cb
eIns.on('event', cb) // 第三个 cb

eIns.emit('event', 1)

eIns.off('event', cb) // 🤔 移除的 cb 是第几个 cb？

eIns.emit('event', 1, 2)

// 输出：
// [emit event]: 1
// [emit event]: 1
// [emit event]: 1
// [emit event]: 1 2
// [emit event]: 1 2

// 扩展 - off 的顺序：
// off 用于移除事件监听器
// 上述程序往 event 身上同时注册了 3 次 cb
// 这 3 次注册的都是同一个函数 cb
// 当我们执行 eIns.off('event', cb) 的时候
// 会删除掉一个 cb
// 🤔 这个被删除的 cb 是第几个 cb 呢？
// 答：第一个被注册的 cb。

// ⚠️ 不知道怎么写 demo 验证上述说法。

// 其实这种情况无论是移除最早注册的还是中间注册的还是最后注册的，对最终的逻辑都没啥影响。
// 至少在这个 demo 中，没必要过分纠结到底是哪个 cb 被移除了。
//   在执行 eIns.off('event', cb) 之前，如果触发 event 会打印 3 次。
//   在执行 eIns.off('event', cb) 之后，如果触发 event 会打印 2 次。
```

:::

## 8. 💻 demos.7 - listenerCount

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

function cb(...args) {
  console.log('[emit event]:', ...args)
}

eIns.on('event', cb)
eIns.on('event', cb)
eIns.on('event', cb)

console.log(`[eIns.listenerCount('event')]:`, eIns.listenerCount('event'))

eIns.emit('event', 1)

eIns.removeListener('event', cb)

console.log(`[eIns.listenerCount('event')]:`, eIns.listenerCount('event'))

eIns.emit('event', 1, 2)

eIns.removeListener('event', cb)

console.log(`[eIns.listenerCount('event')]:`, eIns.listenerCount('event'))

eIns.emit('event', 1, 2, 3)

/*
[eIns.listenerCount('event')]: 3
[emit event]: 1
[emit event]: 1
[emit event]: 1
[eIns.listenerCount('event')]: 2
[emit event]: 1 2
[emit event]: 1 2
[eIns.listenerCount('event')]: 1
[emit event]: 1 2 3
*/
```

:::

## 9. 💻 demos.8 - removeAllListeners

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

function cb(...args) {
  console.log('[emit event]:', ...args)
}

eIns.on('event', cb)
eIns.on('event', cb)
eIns.on('event', cb)

console.log(`[eIns.listenerCount('event')]:`, eIns.listenerCount('event'))

eIns.emit('event', 1)

eIns.removeListener('event', cb)

console.log(`[eIns.listenerCount('event')]:`, eIns.listenerCount('event'))

eIns.emit('event', 1, 2)

eIns.removeAllListeners('event')

console.log(`[eIns.listenerCount('event')]:`, eIns.listenerCount('event'))

eIns.emit('event', 1, 2, 3)

/*
[eIns.listenerCount('event')]: 3
[emit event]: 1
[emit event]: 1
[emit event]: 1
[eIns.listenerCount('event')]: 2
[emit event]: 1 2
[emit event]: 1 2
[eIns.listenerCount('event')]: 0
*/
```

:::

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

eIns.on('event', (...args) => {
  console.log('[emit event]:', ...args)
})

eIns.on('event', (...args) => {
  console.log('[emit event]:', ...args)
})

eIns.emit('event', 1)
eIns.emit('event', 1, 2)

eIns.removeAllListeners('event')

eIns.emit('event', 1, 2, 3)

/*
[emit event]: 1
[emit event]: 1
[emit event]: 1 2
[emit event]: 1 2
*/
```

:::

## 10. 💻 demos.9 - 立即执行

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

eIns.on('event1', () => {
  console.log('1')
  eIns.emit('event2')
  console.log('3')
})

eIns.on('event2', () => {
  console.log('2')
})

eIns.emit('event1')

console.log('4')

/*
1
2
3
4
*/
```

:::

## 11. 💻 demos.10 - emit 一个不存在的事件，相当于什么也没做

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

console.log(1)

eIns.emit('event')

console.log(2)

/*
1
2
*/
```

:::

当我们在 EventEmitter 实例上 emit 一个不存在的事件时，它将静默失败，没有任何影响，不会引发错误或抛出异常。

## 12. 💻 demos.11 - emit('error')

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

console.log(1)

// eIns.on('error', () => {
//   // ...
// })

eIns.emit('error')

console.log(2)

/*
1
node:events:504
    throw err; // Unhandled 'error' event
    ^

Error [ERR_UNHANDLED_ERROR]: Unhandled error. (undefined)
    at new NodeError (node:internal/errors:399:5)
    at EventEmitter.emit (node:events:502:17)
    at Object.<anonymous> (/Users/huyouda/0000/0.js:9:6)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47 {
  code: 'ERR_UNHANDLED_ERROR',
  context: undefined
}

Node.js v18.15.0
*/
```

:::

**所有的 EventEmitter 实例默认都会注册一个 error 事件监听器**。这意味着如果在 EventEmitter 实例中没有显式地注册 error 事件监听器，当触发了一个错误事件且没有对其进行处理时，Node.js 将会打印错误堆栈信息，并可能导致程序退出。

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

console.log(1)

try {
  eIns.emit('error')
} catch (error) {
  console.error('[emit error event]:', error)
}

console.log(2)

/*
1
[emit error event]: Error [ERR_UNHANDLED_ERROR]: Unhandled error. (undefined)
    at new NodeError (node:internal/errors:399:5)
    at EventEmitter.emit (node:events:502:17)
    at Object.<anonymous> (/Users/huyouda/0000/0.js:10:8)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47 {
  code: 'ERR_UNHANDLED_ERROR',
  context: undefined
}
2
*/
```

:::

为了避免程序崩溃，我们可以使用 try-catch 包裹一下 `eIns.emit('error')`。这样可以保证即使出现错误，程序也能够继续执行，并采取适当的措施来处理错误情况。

::: code-group

```javascript [1.cjs]
const { EventEmitter } = require('events')

const eIns = new EventEmitter()

console.log(1)

eIns.on('error', (...args) => {
  console.error('[emit error event]:', ...args)
})

eIns.emit('error', 1, 2, 3)

console.log(2)

/*
1
[emit error event]: 1 2 3
2
*/
```

:::

**如果不想使用 try-catch，同时又要避免程序崩溃，建议在使用 EventEmitter 的时候，始终为 error 事件注册一个监听器，以便能够捕获和处理错误。**

::: code-group

```javascript [1.cjs]
const fs = require('fs')
const { EventEmitter } = require('events')

const readStream = fs.createReadStream('1.txt')

console.log(
  '[readStream instanceof EventEmitter]:',
  readStream instanceof EventEmitter
)

readStream.on('error', (error) => {
  console.error('发生错误:', error)
})

readStream.on('data', (data) => {
  console.log('文件内容:', data.toString())
})

/* 
[readStream instanceof EventEmitter]: true
文件内容: 现在时间：
23.05.18 周四 下午 11:22

写完这个 demo 滚去睡觉了
*/
```

:::

```plain
现在时间：
23.05.18 周四 下午 11:22

写完这个 demo 滚去睡觉了
```

## 13. 🔗 参考资料

- Node.js Node.js EventEmitter | 菜鸟教程 👉🏻 https://www.runoob.com/nodejs/nodejs-event.html
- 官方文档 events 👉🏻 https://nodejs.org/dist/latest-v18.x/docs/api/events.html#class-eventemitter
