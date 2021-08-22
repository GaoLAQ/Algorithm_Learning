function squareDigits (num){
  console.log(typeof num)
  console.log(''+ num)
  console.log(typeof(''+ num))
  console.log((''+ num).split())
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

const res = squareDigits(12345); 

console.log(res)