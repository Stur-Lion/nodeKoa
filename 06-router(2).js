const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();

var demo = new Router()
demo.get('/aaa',function (ctx,next) {
  ctx.body = ctx.request.url
}).get('/bbb',function (ctx,next) {
  ctx.body = ctx.request.url
})

var index = new Router()
index.get('/aaa',function (ctx,next) {
  ctx.body = ctx.request.url
}).get('/bbb',function (ctx,next) {
  ctx.body = ctx.request.url
})

/*装在中间件*/
var router = new Router();
router.use('/demo',demo.routes(),demo.allowedMethods());
router.use('/index',index.routes(),index.allowedMethods());
router.get('/rout',function (ctx,next) {
  ctx.body = ctx.request.url
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,function () {
  console.log('over');
})