const path = require('path')

console.log(path.isAbsolute('/foo/bar'))
// => true

console.log(path.isAbsolute('foo/bar'))
// => false

// path.isAbsolute()
// 判断给定路径是否为绝对路径格式。
