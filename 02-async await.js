/*async function testAsync() {
  return 'Hello World'
}
var result = testAsync();
console.log(result);*/

/*
function noAsync() {
  return 'noAsync'
}
async function asyncfun() {
  return 'asyncfun'
}
async function getAll() {
  var arr1 = await noAsync();
  var arr2 = await asyncfun();
  console.log(arr1, arr2);
}
getAll()*/


/*function test() {
  return new Promise(resolve => {
    setTimeout(()=> resolve("long_time_value"),2000)
  })
}

async function getRes() {
  console.log(await test());
}
getRes()*/

var a = new Promise(resolve => {
  resolve('aaa')
}).then(function (val) {
  console.log(val);
})
console.log(a);











