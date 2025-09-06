# [0046. 全局定时器：setTimeout、setInterval、setImmediate](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0046.%20%E5%85%A8%E5%B1%80%E5%AE%9A%E6%97%B6%E5%99%A8%EF%BC%9AsetTimeout%E3%80%81setInterval%E3%80%81setImmediate)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 定时器](#2--定时器)
- [3. 💻 demos.1 - `setTimeout(cb, ms)`、`clearTimeout(t)`](#3--demos1---settimeoutcb-mscleartimeoutt)
- [4. 💻 demos.2 - `setInterval(cb, ms)`、`clearInterval(t)`](#4--demos2---setintervalcb-msclearintervalt)
- [5. 💻 demos.3 - `setImmediate(callback[, ...args])`、`clearImmediate(immediate)`](#5--demos3---setimmediatecallback-argsclearimmediateimmediate)
- [6. 🤔 `setTimeout(fn, 0)` 和 `setImmediate(fn)` 之间的区别](#6--settimeoutfn-0-和-setimmediatefn-之间的区别)

<!-- endregion:toc -->

## 1. 📝 概述

- `setTimeout`、`clearTimeout`
- `setInterval`、`clearInterval`
- `setImmediate`、`clearImmediate`

## 2. 📒 定时器

| 函数 | 说明 |
| --- | --- |
| `setTimeout(cb, ms)` | 添加一个定时器，在指定的毫秒（ms）数后执行指定函数（cb） |
| `clearTimeout(t)` | 取消定时器，停止一个之前调用 `setTimeout()` 创建的定时器 |
| `setInterval(cb, ms)` | 添加一个定时器，每隔一定的时间（ms）就执行一次函数（cb） |
| `clearInterval(t)` | 取消定时器，停止之前调用 `setInterval()` 创建的定时器 |
| `setImmediate(callback[, ...args])` | 安排在 I/O 事件的回调之后立即执行的 callback |
| `clearImmediate(immediate)` | 取消由 `setImmediate()` 创建的 Immediate 对象 |

- **global.xxx**
  - 这些函数都是 Node.js 中的全局函数，属于 **全局对象（`global`）** 的一部分。
  - 这意味着你无需引入任何模块即可直接使用它们。
- **作用**：
  - 用于控制异步操作的执行时机。
- **与浏览器环境的区别**：
  - `setTimeout` 和 `setInterval` 也存在于浏览器中
  - `setImmediate` 是 Node.js 特有的

## 3. 💻 demos.1 - `setTimeout(cb, ms)`、`clearTimeout(t)`

::: code-group

<<< ./demos/1/1.js [1.js]

<<< ./demos/1/2.js [2.js]

:::

- **使用场景**：适合需要延迟执行的任务，例如定时任务、定时器等。
- **注意事项**：
  - 定时器的实际触发时间可能会受到事件循环负载的影响，因此不能保证完全精确。

## 4. 💻 demos.2 - `setInterval(cb, ms)`、`clearInterval(t)`

::: code-group

<<< ./demos/2/1.js [1.js]

<<< ./demos/2/2.js [2.js]

<<< ./demos/2/3.js [3.js]

:::

- **使用场景**: 适合需要周期性执行的任务，例如轮询、动画帧更新等。
- **注意事项**:
  - 如果未正确调用 `clearInterval()`，定时器会一直运行，可能导致内存泄漏。
  - 定时器的实际触发时间可能会受到事件循环负载的影响，因此不能保证完全精确。

## 5. 💻 demos.3 - `setImmediate(callback[, ...args])`、`clearImmediate(immediate)`

::: code-group

```javascript [1.js]
setImmediate(() => {
  console.log('This runs immediately after I/O events')
})

// setImmediate
// 作用: 将回调函数安排在当前事件循环的末尾、I/O 事件处理完成之后立即执行。
// 用途: 适合用于延迟执行某些逻辑，而不阻塞 I/O 操作。
```

```javascript [2.js]
const immediate = setImmediate(() => {
  console.log('This will not run')
})

clearImmediate(immediate) // 立即取消

// clearImmediate
// 作用: 取消由 setImmediate() 创建的 Immediate 对象。
// 参数: 接收 setImmediate() 返回的 Immediate 对象。
```

```javascript [3.js]
console.log('正常执行1')
const t = setImmediate(function () {
  console.log('我被延迟执行了')
})
console.log('正常执行2')
// clearImmediate(t)

// 上面代码的运行结果如下：
// 正常执行1
// 正常执行2
// 我被延迟执行了

// 如果将最后一行代码 clearImmediate(t) 取消注释，则运行结果如下：
// 正常执行1
// 正常执行2

// 原因分析：

// 【1】
// function () {
//   console.log('我被延迟执行了')
// }
// setImmediate 中的这个 function 会被推入事件循环的 Check 阶段，在同步代码执行完后运行。

// 【2】
// clearImmediate(t)
// 这是同步代码，会先于异步代码【1】被执行。
```

:::

- **特点**：
  - `setImmediate` 是 Node.js 特有的功能，在浏览器中不可用。
  - 它通常会优先于 `setTimeout(fn, 0)` 被执行，因为它会被推送到 check 阶段，I/O 操作结束后，就会立即执行。
- **使用场景**：延迟某些操作到当前事件循环的末尾，避免阻塞 I/O 操作。
- **注意事项**：
  - 不要滥用 `setImmediate`，因为它可能会导致回调堆积，影响性能。
  - 如果需要取消，请及时调用 `clearImmediate()`。

## 6. 🤔 `setTimeout(fn, 0)` 和 `setImmediate(fn)` 之间的区别

::: tip 备注

- 这是一个关于“Node.js 生命周期、事件循环”的经典面试题。
- 有关 Node.js 生命周期、事件循环的相关内容，可以参考 `TNotes.nodejs.0050` 笔记。

:::

| 特性         | `setTimeout(fn, 0)`  | `setImmediate(fn)`    |
| ------------ | -------------------- | --------------------- |
| **调度阶段** | Timer 阶段           | Check 阶段            |
| **延迟精度** | 通常 > 0ms           | 无延迟，立即执行      |
| **使用场景** | 推迟到下一次事件循环 | 在 I/O 完成后立即执行 |

- **🤔 哪个会先被执行？**
  - 得看具体情况，通常是 setImmediate 先。
  - **调度阶段的差异**
    - Node.js 的事件循环分为多个阶段，每个阶段负责处理特定的任务。
  - **Timer 阶段**：
    - 处理由 `setTimeout` 和 `setInterval` 设置的定时器回调。
    - 当前时间达到或超过定时器设定的时间时，回调会被推入 Timer 阶段的队列中。
  - **Check 阶段**：
    - 处理由 `setImmediate` 设置的回调。
    - `setImmediate` 的回调总是被推入 Check 阶段的队列中。
  - 因此，`setTimeout(fn, 0)` 和 `setImmediate(fn)` 的执行顺序取决于当前事件循环所处的阶段。
- **🤔 延迟精度哪个更准？**
  - `setImmediate` 更准，它相当于没有延迟，就是 0ms；而 `setTimeout(fn, 0)` 实际的延迟时间会大于 0ms。
  - **`setTimeout(fn, 0)`**：
    - 即使设置为 `0ms`，实际延迟通常会大于 `0ms`，因为 Timer 阶段需要等待事件循环到达该阶段。
    - 根据环境不同，延迟具体时间会有较大差异。
  - **`setImmediate(fn)`**：
    - 没有延迟时间的概念，它会在当前事件循环的 I/O 阶段结束后立即执行。
    - 因此，`setImmediate` 的执行速度通常比 `setTimeout(fn, 0)` 更快。
- **🤔 什么时候用 `setTimeout(fn, 0)`，什么时候用 `setImmediate(fn)`？**
  - **`setTimeout(fn, 0)`**：
    - 适合需要尽可能短的延迟，但又不希望阻塞当前事件循环的情况。
    - 常用于将任务推迟到下一次事件循环迭代。
  - **`setImmediate(fn)`**：
    - 适合需要在 I/O 操作完成后立即执行某些逻辑的场景。
    - 常用于避免阻塞 I/O 操作，或者在异步流程中插入额外的逻辑。
