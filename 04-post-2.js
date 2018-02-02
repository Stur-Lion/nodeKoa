const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
  if(ctx.url == '/' && ctx.method == 'GET'){
    let html = `
        <h1> 表单测试</h1>
        <form action="/" method="post">
            姓名：<input type="text" name="name"><br/>
            年龄：<input type="text" name="age"><br/>
            <button type="submit">提交</button>
        </form> 
    `;
    ctx.body = html;
  }else if(ctx.url == '/' && ctx.method == 'POST'){
    var querystring = await getquery(ctx);
    ctx.body = querystring
  }else{
    ctx.body = `<h1>404</h1>`
  }
})

function getquery(ctx) {
  return new Promise((resolve,reject)=>{
    try{
      let res=''
      ctx.req.on('data',function (val) {
        res += val
      })
      ctx.req.addListener('end',function (data) {
        resolve(queryStrToObj(res))
      })
    }catch (err){
      reject(err)
    }
  })
}
function queryStrToObj(res) {
  var resulr = res.split('&')
  let obj = {};
  for(var i=0;i<resulr.length;i++){
    obj[resulr[i].split('=')[0]] = resulr[i].split('=')[1]
  }
  return obj
}

app.listen(3000,()=>{
  console.log('over');
})