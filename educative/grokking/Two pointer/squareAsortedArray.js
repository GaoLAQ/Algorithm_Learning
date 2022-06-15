// Description  
// Given a sorted array, create a new array containing squares of all the number of the input 
// array in the sorted order 
// Example 1: 
// Input: [2,-1,0,2,3]
// Output: [0,1,4,4,9]

// const make_squares = function(arr){
//    const squares = []
//    for(let i =0; i<arr.length; i++){
//        squares.push(arr[i]*arr[i])
//    }
//    return squares.sort((a,b)=>a-b)
// }

// console.log(make_squares([2,-1,0,2,3]))

const make_squares = function(arr){
   const squares = Array(arr.length).fill(0)
   let left = 0
   let right = arr.length - 1
   let highest = arr.length -1 
   while(left<=right){
       let leftChar = arr[left] * arr[left]
       let rightChar = arr[right] * arr[right]
       if(leftChar < rightChar){
            squares[highest] = rightChar
            right -= 1
       } else {
            squares[highest] = leftChar
            left +=1
       }
       highest-=1
   }
   return squares
}

console.log(make_squares([2,-1,0,2,3]))