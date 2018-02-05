const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const app = new Koa();
const path = require('path');
const static = require('koa-static');

app.use(static(path.join(__dirname,'./public')))

app.use(async ctx =>{
  ctx.body = 'Hello Lion'
})

app.listen(3000,function () {
  console.log('over');
})