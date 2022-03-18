let re1 = new RegExp('abc');
let re2 = /abc/; 


var FilterString = value => +value.replace(/\D/g,'')


console.log(FilterString("123df4gg0sd"))

// console.log(re1)
// console.log(typeof re1)

// console.log(re2)
// console.log(typeof re2)
