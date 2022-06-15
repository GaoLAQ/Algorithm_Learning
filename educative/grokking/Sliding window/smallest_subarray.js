// Description 
// Given an array of positive integers and a nunber 'S', find the length of the smallest contigous subbarray
// whose sum is greater than or equal to 'S'. Return 0 if no such subaaray exists

// Example 1: 
// Input: [2,1,5,2,3,2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [5,2]

// const smallest_subarray_sum = function(s,arr){
//     let windowSum = 0 
//     let len = Infinity
//     for(let i = 0; i<arr.length; i++){
//         windowSum = 0 
//         for(let j = i; j<arr.length; j++){
//             windowSum += arr[j]
//             if(windowSum>=s){
//                 //console.log(windowSum,i,j)
//                 len = Math.min(len, j-i+1)
//             }
//         }
//     }
//     return len 
// }

const smallest_subarray_sum = function(s,arr){
    let windowSum = 0 
    let left = 0 
    let len = Infinity

    for(let right=0; right<arr.length; right++){
        windowSum += arr[right]
        while(windowSum >= s){
            len = Math.min(len,right-left+1)
            windowSum -= arr[left++]
        }
    }
    if(minLength === Infinity){
        return 0 
    }
    return len
}

// make len = Infinity, len 就不断 update
// Math.min(len, variable)
// 但是带来一个隐患， 如果不符合条件， 有时会是0， 但是这样变成Infinity 
// solution： if(len===Infinity) return 0 
// 求len， two pointer 方法就用 for-while loop

console.log(smallest_subarray_sum(7, [2,1,5,2,8]))