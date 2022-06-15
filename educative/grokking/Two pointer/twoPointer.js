// const pair_with_targetsum = function (arr, target_sum){
//     let left = 0 
//     let right = arr.length -1 
//     while(left<right){
//         let sum = arr[left] + arr[right]
//         if(sum>target_sum){
//            right --
//         } else if(sum < target_sum){
//            left ++
//         } else {
//             return [left, right]
//         }
//     }
// }

const pair_with_targetsum = function (arr, target_sum){
   const nums = {}
   for(let right = 0;  right<arr.length; right++){
       const num = arr[right]
       if(target_sum - num in nums){
            return [ nums[target_sum-num] , right]
       }
       nums[num] = right
   }
}

// 为什么3不会count进去， 是因为haspmap是成对记数的。没有3再次的话， nums[target_sum -num]不会读取

console.log(pair_with_targetsum([2,5,9,11], 11))
console.log(pair_with_targetsum([1,2,3,4,6], 6))