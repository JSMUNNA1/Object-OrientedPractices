
let sym=Symbol("foo")


const obj={
  [sym]:"foo",
  1:33    
}
 
console.log(typeof obj[sym]);
