const longest_substring_with_k_distinct = function (str, k) {
  let left = 0;
  let right = 1; 
  let count = 0;
  let leftArr= [];
  let rightArr = []
  let arr = str
  for (right; right < arr.length; right++) {
    if (arr[left] === arr[right]) {
      count++
      if(count === k){
        leftArr.push(left)
        rightArr.push(right)
      }
    } else {
      left +=1
    }
  }
  console.log(count, str, "k: ", k, Math.max(...leftArr), Math.max(...rightArr))
  return Math.max(...rightArr) - Math.max(...leftArr) +1 
};

console.log(longest_substring_with_k_distinct('araaci',2))