// 引入 rint 模块
const rint = require('./rint.cjs')

// 添加监听事件
rint.timer.on('tick', (code) => {
  console.log(`执行第 ${code} 次监听事件`)
})
