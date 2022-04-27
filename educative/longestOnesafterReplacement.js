const length_of_longest_substring = function(str, k) {
  let hashMap = {};
  let left = 0; 
  let max =0; 
  let maxRepeatLetter = 0; 
  for(let right = 0; right<str.length; right++){
    let rightChar = str[right]
    if(! hashMap[rightChar]){
      hashMap[rightChar] = 0 
    }
    hashMap[rightChar]+= 1; 
    if(rightChar === 1){
      maxRepeatLetter = Math.max(maxRepeatLetter, hashMap[rightChar])
    }
    
    if(right -left + 1 - maxRepeatLetter > k){
      let leftChar = str[left]
      hashMap[leftChar] -= 1; 
      left +=1; 
    }

    max = Math.max(max, right -left +1)
  }
  return max
};

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2))
