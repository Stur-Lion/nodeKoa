const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();

var demo = new Router()
demo.get('/lion',function (ctx,next) {
  ctx.body = ctx.query
})

app.use(demo.routes()).use(demo.allowedMethods())

app.listen(3000,function () {
  console.log('over');
})