/* 
// 引入 events 模块
const EventEmitter = require('events')

// 生成 EventEmitter 对象
const custom = new EventEmitter()

function listener() {
  console.log('触发监听事件！')
}

// 添加监听事件 'event'
custom.on('event', listener)

// 主动触发监听事件 'event'
custom.emit('event')

console.log(custom.eventNames()) // 输出移除前的监听事件名称

custom.removeListener('event', listener) // 移除 'event' 事件

console.log(custom.eventNames()) // 输出移除后的监听事件名称

*/

// 引入 events 模块
const EventEmitter = require('events')

// 生成 EventEmitter 对象
const custom = new EventEmitter()

function listener() {
  console.log('触发监听事件！')
}

// 添加监听事件 'event'
custom.on('event', listener)

// 多次添加同一个事件
custom.on('event', listener)
custom.on('event', listener)
custom.on('event', listener)

// 主动触发监听事件 'event'
custom.emit('event')

console.log(custom.eventNames()) // 输出移除前的监听事件名称

custom.removeListener('event', listener) // 移除 'event' 事件

console.log(custom.eventNames()) // 输出移除后的监听事件名称

custom.emit('event')

custom.removeAllListeners('event')

console.log(custom.eventNames()) // 输出移除后的监听事件名称

custom.emit('event')
