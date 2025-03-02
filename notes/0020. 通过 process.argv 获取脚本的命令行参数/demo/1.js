// 1.js

// process.argv[0] - Node.js 可执行文件的路径
// process.argv[1] - 正在执行的脚本文件的路径 (1.js)
// process.argv[2] - 'arg1'
// process.argv[3] - 'arg2'
// process.argv[4] - 'arg3'

console.log('第一个参数:', process.argv[2]);
console.log('第二个参数:', process.argv[3]);
console.log('第三个参数:', process.argv[4]);

// 或者遍历所有额外的参数
for (let i = 2; i < process.argv.length; i++) {
  console.log(`参数 ${i - 1}:`, process.argv[i]);
}
