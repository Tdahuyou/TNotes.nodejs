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

// 如果同一个回调 cb 被注册 on 了多次，在移除 off 的时候没必要纠结删的是第几个 cb。
// 这种情况无论是移除最早注册的还是中间注册的还是最后注册的，对最终的逻辑都没啥影响。
// 至少在这个 demo 中，没必要过分纠结到底是哪个 cb 被移除了。
//   在执行 eIns.off('event', cb) 之前，如果触发 event 会打印 3 次。
//   在执行 eIns.off('event', cb) 之后，如果触发 event 会打印 2 次。
