// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

let str = 'abcdef'; 
// let str = 'abc'; 
function solution(str){
 str = str.split('')
 const last = (str[str.length-1])
 console.log(last)
 console.log(str)
}

console.log(solution('abcdef'));
