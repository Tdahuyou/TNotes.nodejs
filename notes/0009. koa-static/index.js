const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

// or use absolute paths
app.use(serve(__dirname + '/publics'));

// preview pdf file
// http://localhost:2333/b9ce184e9b8be348c7bcbd700.pdf

app.listen(2333);

console.log('listening on port 2333');