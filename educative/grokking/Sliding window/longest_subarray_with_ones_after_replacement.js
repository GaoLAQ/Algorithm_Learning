// Given an array containing 0s and 1s, if you are allowed to replace no more than 'k' 0s with 1s,
// find the length of the longest contiguous subarray having all 1s. 
// Example 1: 
// Input: Array = [0,1,1,0,0,0,1,1,0,1,1], k =2
// Output: 6
// Explanation; Replace the '0' at index 5 and 8 to have the longest contigous subarray of 1s haing length 6

const length_of_longest_substring = function(str, k){
  const map = {}
  let len = 0 
  let left  = 0 
  let maxRepeat = 0 
  for(let right = 0; right < str.length; right++){
      const rightChar  = str[right]
      if(!map[rightChar]){
          map[rightChar] = 0 
      }
      map[rightChar]+=1
      if(map['1']){
        maxRepeat = Math.max(maxRepeat, map['1'])
      }
      if((right-left+1 - maxRepeat)>k){
        const leftChar  = str[left]
        map[leftChar] -= 1
        left ++
      }
      len = Math.max(len, right-left+1)
  }
  return len 
}

console.log(length_of_longest_substring([0,1,1,0,0,0,1,1,0,1,1], 2))