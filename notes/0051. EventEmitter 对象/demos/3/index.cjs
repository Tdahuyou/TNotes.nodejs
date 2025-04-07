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
