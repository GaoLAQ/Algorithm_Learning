const longest_substring_with_k_distinct = function (str, k) {
    let left = 0; 
    let maxLength = 0;
    let hashMap = {}; 
    for(let right = 0; right< str.length; right++){
      let rightChar = str[right]
      if(!(rightChar in hashMap)){
        hashMap[rightChar] = 0 
      }
      hashMap[rightChar] +=1; 
      while(Object.keys(hashMap).length>k){
        let leftChar = str[left]
        hashMap[leftChar]-=1
        console.log(hashMap)
        if(hashMap[leftChar] ===0){
          delete hashMap[leftChar]
        }
        left +=1
      }
      maxLength = Math.max(maxLength, right-left +1)
    }
    return maxLength 
};



console.log(longest_substring_with_k_distinct('araaci',2))

// const hashMap = {id:1, name:"noob gao"}

// console.log(id in hashMap)


