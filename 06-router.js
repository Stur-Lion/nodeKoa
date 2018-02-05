const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();
var router = new Router();

router.get('/',function (ctx,next) {
  ctx.body = 'Hello Lion'
}).get('/index',function (ctx,next) {
  ctx.body = 'Hello Index'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,function () {
  console.log('over');
})