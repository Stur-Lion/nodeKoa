const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const app = new Koa();
const path = require('path');

app.use(views(path.join(__dirname,'./view'),{
  extension: 'ejs'
}))

app.use(async ctx =>{
  if(ctx.url == '/hah'){
    var title = 'lion'
    await ctx.render('hah',{
      title
    })
  }else{
    ctx.body = 'No Lion'
  }
})

app.listen(3000,function () {
  console.log('over');
})