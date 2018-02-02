const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
  var url = ctx.url;
  var request = ctx.request;
  var query = ctx.query;
  var querystring = ctx.querystring;
  var method = ctx.method;
  ctx.body = {
    url,request,query,querystring,method
  }
})

app.listen(3000,()=>{
  console.log('over');
})