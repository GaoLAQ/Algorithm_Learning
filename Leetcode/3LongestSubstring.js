let s = "abcabcbb"; 

function noRepeating (s){
  let l = 0; 
  let res = 0; 
  const map = new Map(); 
  for(let r=0; r<s.length; r++){
    if (map.has(s[r])){
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r-l+1);   
    map.set(s[r],r)
    console.log(map)
  }
  return res
}

console.log(noRepeating(s))