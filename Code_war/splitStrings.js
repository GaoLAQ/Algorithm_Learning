// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// let str = 'abc'; 
// function solution(str){
//    if (str.length%2 !==0){
//      str = str + '_'
//    }
//    var i =0;
//    const arr = [];
//    // while condition 
//   //  while(i<str.length){
//   //    arr.push(str[i]+str[i+1])
//   //    i+=2; 
//   //  }
//   for(;i<str.length;){
//     arr.push(str[i]+str[i+1])
//     i+=2; 
//   }
//    return arr
// }

// function solution(str){
//   arr = [];
//   for(var i = 0; i < str.length; i += 2){
//     second = str[i+1] || '_';
//     arr.push(str[i] + second);
//   }
//   return arr;
// }

// function solution(str){
//   let res = [];
//   for (var i = 0; i < str.length; i +=2) res.push(`${str[i] + (str[i+1] || '_')}`)
//    return res;
// }

// const solution = str => ((str+"_").match(/../g)||[]);


// splice 

function solution(str) {
  const arr = str.split('');
  console.log(arr.map((el, i) => el + (arr.splice(i + 1, 1)[0] || '_')))
  return arr
    .map((el, i) => el + (arr.splice(i + 1, 1)[0] || '_'))
    .filter(el => el);
}

// function solution(str){  
//   if (str.length % 2 !== 0) {
//     str = str + '_';
//   }
  
  
//   let regx = str.match(/..?/g);
  
//     if (str === '') {
//       regx = [];
//     }  

//   return regx;
// }

console.log(solution('abcdef'));