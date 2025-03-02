const Koa = require('koa');
const send = require('koa-send');

const app = new Koa();

app.use(async (ctx) => {
  await send(ctx, ctx.path, { root: __dirname + '/publics' });
});

app.listen(2333);