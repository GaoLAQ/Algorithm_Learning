const find_permutation = function(str, pattern) {
  let hashMap = {}, left = 0, max = 0, match = 0;
  for(let i = 0; i<pattern.length; i++){
    let chr = pattern[i]
    if(!hashMap[chr]){
      hashMap[chr] = 0
    }
    hashMap[chr] +=1
  }

  for(let right = 0; right<str.length; right++){
    let rightChar = str[right]
    if(hashMap[rightChar]){
      hashMap[rightChar] -= 1
      if(hashMap[rightChar]===0){
        match += 1
      }
    }
    if(match ===pattern.length){
      return true 
    }

    if(right >= pattern.length -1){
      let leftChar = str[left]
      left +=1
      if( leftChar in hashMap){
        if(hashMap[leftChar] === 0){
          match -=1
        }
        hashMap[leftChar] +=1
      }
    }
  }
  return false
};

console.log(find_permutation("odicf","dc"))