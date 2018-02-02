const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
  if(ctx.url == '/' && ctx.method == 'GET'){
    let html = `
        <h1> 表单测试</h1>
        <form action="/" method="post">
            姓名：<input type="text"><br/>
            年龄：<input type="text"><br/>
            <input type="submit" value="提交">
        </form> 
    `;
    ctx.body = html;
  }else if(ctx.url == '/' && ctx.method == 'POST'){
    console.log(ctx);
    ctx.body = ctx
  }else{
    ctx.body = `<h1>404</h1>`
  }
})

app.listen(3000,()=>{
  console.log('over');
})