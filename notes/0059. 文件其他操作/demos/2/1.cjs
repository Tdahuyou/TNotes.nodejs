const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '1.txt')

fs.writeFileSync(filePath, 'Hello Node.js!')
console.log('文件已被创建！')

const data = fs.readFileSync(filePath, 'utf8')
console.log('文件内容：', data)

fs.unlinkSync(filePath)
console.log('文件已被删除！')

try {
  fs.readFileSync(filePath)
} catch (error) {
  console.log('错误吗：', error.code)
  if (error.code === 'ENOENT') {
    console.error('')
  } else {
    console.error(error)
  }
}

// 输出：
// 文件已被创建！
// 文件内容： Hello Node.js!
// 文件已被删除！
// 错误吗： ENOENT

// 备注：
// ENOENT
// 表示 Error No Entry
// 表示 错误了，没找到入口。
// No such file or directory
// 文件或者路径不存在
