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
