// Triplet Sum to Zero 
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero 
// Example 
// Input: [-3,0,1,2,-1,1,-2]
// Output: [-3,1,2], [-2,0,2], [-2,1,1], [-1,0,1]
// Explanation: There are four unique triplets whose sum is equal to zero 

const search_triplets = function(arr){
   arr.sort((a,b)=>a-b)
   const res = []
   for(let i = 0; i<arr.length; i++){
       if(i>0 && arr[i] === arr[i-1]){
           continue
       }
       search_pairs(arr, -arr[i], i+1, res)
   }
   return res
}

const search_pairs = function(arr, target_sum, left, res){
    let right = arr.length -1 
    while(left <right){
        const currentSum = arr[left] + arr[right]
        if(currentSum === target_sum) {
           res.push(arr[left], arr[right], -target_sum)
           left ++
           right --            
            while(left<right && arr[left] === arr[left-1]){
                left++
            }           
            while(left<right && arr[right] === arr[right+1]){
               right -- 
           }
        } else if (currentSum < target_sum){
            left ++ 
        } else {
            right --
        }
    }
}

console.log(search_triplets([-3,0,1,2,-1,1,-2]))