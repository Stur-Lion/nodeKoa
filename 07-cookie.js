const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();

app.use(async ctx =>{
  if(ctx.url == '/index'){
    ctx.cookies.set(
      'name','lion'
    )
    ctx.body = 'Hello Lion'
  }else{
    ctx.body = 'No Lion'
  }
})

app.listen(3000,function () {
  console.log('over');
})