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
