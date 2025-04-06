const fs = require('fs')

const start = Date.now()

function f1() {
  console.log('f1', Date.now() - start)
}

function f2() {
  console.log('f2', Date.now() - readFileStart)
  // 死循环 300ms
  const start = Date.now()
  while (Date.now() - start < 300) {}
}

setTimeout(f1, 200)

const readFileStart = Date.now()
fs.readFile('./1.txt', 'utf-8', f2)

// 1.txt 文件内容：
// hello world

// 输出：
// f2 2
// f1 306

// 注意：
// 这里的 2 和 306 也可能是其他值，比如 306 也可能是 304、305、307、308，但是不会差太多。（除非你的计算机在这时候恰巧卡了一下）

// 🤔 程序是如何执行的？
// 1. setTimeout(f1, 200) 程序执行到这一行的时候，启动了一个 200ms 的计时器，f1 任务会在 200ms 后被推送到 timers 队列中等待执行。
// 2. fs.readFile('./1.txt', 'utf-8', f2) 程序执行到这一行的时候，会去读取 1.txt 文件内容，在读取到文件内容之后，会将 f2 推送到 poll 队列中等待执行。
//    fs.readFile 完成文件读取后，f2 被放入 poll 事件队列后会立即执行。
//    这个读取文件内容的速度是很快的，内容也就一行“hello world”，耗时极短，从打印结果来看，也就 2ms，它是明显小于 200ms 的就对了。
//    这就意味着 f2 会先被丢到 poll 队列中。
//    此时其它队列都是空，event loop 正停在 poll 队列中等着，这个 f2 任务一旦被推送进去，就会立刻被执行。
// 3. f2 中的死循环阻塞了 Node.js 的执行线程约 300ms，导致后续任务无法执行。即便 200ms 的时间早就到了，f1 已经被推送到 timers 队列中了。
//    setTimeout 的回调 f1 在 200ms 时已到达定时器时间，但必须等待 Node.js 的执行线程把 f2 执行完毕后才可能轮到它。
//    因此，f2 先输出，f1 在 f2 执行完毕后输出，且 f1 后跟的时间为实际执行时的延迟（约 306ms）。
