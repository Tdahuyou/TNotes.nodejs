const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

// 测试命令：node 1.js -x 3 -y 4 -n5 -abc --beep=boop --no-ding foo bar baz
console.log('args:', args);
// 打印内容：
// args: {
//   _: [ 'foo', 'bar', 'baz' ],
//   x: 3,
//   y: 4,
//   n: 5,
//   a: true,
//   b: true,
//   c: true,
//   beep: 'boop',
//   ding: false
// }