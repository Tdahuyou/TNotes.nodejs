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
