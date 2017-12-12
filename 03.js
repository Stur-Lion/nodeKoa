const Koa = require('koa')
const app = new Koa()


function noasync(){
    return 'No'
}
async function asynctest(){
    return 'hello world'
}
async function text (){
    const res1 = await noasync();
    const res2 = await asynctest();
    console.log(res1,res2);
}
text ()

app.listen(3000)
