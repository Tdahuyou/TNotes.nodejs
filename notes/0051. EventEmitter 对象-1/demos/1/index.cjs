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
