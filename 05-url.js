const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

app.use(async ctx =>{
  var html = await selectCon(ctx.request.url);
  ctx.body = html
})

app.listen(3000,function () {
  console.log('over');
})

async function selectCon(url) {
  var defaultCon = 'index.html';
  console.log(url);
  switch (url){
    case '/' :
      defaultCon = 'index.html';
      break;
    case '/todo' :
      defaultCon = 'todo.html';
      break;
    case '/other' :
      defaultCon = '404.html';
      break;
    default:
      defaultCon = '404.html';
  }
  return new Promise((resolve, reject) => {
    fs.readFile(`./page/${defaultCon}`,function (err,data) {
      if(err){
        reject(err)
      }else{
        resolve(data.toString())
      }
    })
  })
}