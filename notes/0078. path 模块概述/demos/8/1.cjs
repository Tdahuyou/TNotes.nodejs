const path = require('path')

console.log(path.normalize('/foo/bar//baz/../../file.txt')) // => /foo/file.txt

// 规范化路径，去除多余的 .. 或 . 和重复的分隔符。
