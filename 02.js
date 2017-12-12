const Koa = require('koa')
const app = new Koa()

async function asynctest(){
    return 'heelo world'
}
const result = asynctest()
console.log(result);

app.listen(3000)