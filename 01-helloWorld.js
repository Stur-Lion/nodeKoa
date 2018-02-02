const Koa = require('koa');
const app = new Koa();
app.use( async (ctx)=>{
  console.log(1);
  ctx.body = 'hello Koa'
} )
console.log(2);
app.listen(3000);
