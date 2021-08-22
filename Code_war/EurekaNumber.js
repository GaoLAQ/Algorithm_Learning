const digitSum = function digitSum(num){
  const stringArray = num.toString().split('');
  const length = stringArray.length;
  let sum =0; 
  for(var j=1; j<=length; j++){
    const addNumber = Number(stringArray[j-1])**j; 
    sum += addNumber
  }
  return sum  
}
function sumDigPow(a, b) {
  let res = []; 
  for(let i=a; i<=b; i++){
    if (i<10){
      res.push(i)
    } else {
      let ans = digitSum(i)
      if (ans === i){
        res.push(ans)
      } 
    } 
  }
  return res
}



// console.log(digitSum(134))

console.log(sumDigPow(50,150))

