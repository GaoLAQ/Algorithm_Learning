const non_repeat_substring = function(str) {
  let left = 0; 
  let hashMap = {}; 
  let maxLength = 0; 
  for(let right=0; right < str.length; right++){
    let rightChar = str[right]
    if(!hashMap[rightChar]){
      hashMap[rightChar] = 0 
    }
    hashMap[rightChar] +=1
    if(hashMap[rightChar] >=2){
      let leftChar = str[left]
      hashMap[leftChar] -= 1; 
      left = right
    }
    maxLength = Math.max(maxLength, right - left +1)
  }
  return maxLength
};

console.log(non_repeat_substring("abccde"))
console.log(non_repeat_substring("aabccbb"))
console.log(non_repeat_substring("abbbb"))