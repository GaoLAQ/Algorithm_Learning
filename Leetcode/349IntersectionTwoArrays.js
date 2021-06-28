// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

// Test 1 
let nums1 = [1,2,2,1]; 
let nums2 = [2,2]; 
// Test 2 
// let nums1 = [4,9,5]; 
// let nums2 = [9,4,9,8,4]; 

// Method 1 
// var intersection = function(nums1, nums2) {
//   let set1 = new Set(nums1); 
//   let set2 = new Set(nums2);
//   return [...set1].filter(item => set2.has(item))
// };

// Method 2
// function intersection(nums1, nums2){
//   let res = nums1.filter(item => nums2.includes(item)); 
//   return [...new Set(res)]
// }




// Method 3 Use Map method 

function intersection(nums1, nums2){
  const map = new Map(); 
  nums1.forEach(n => {
    map.set(n,true)
  });
  const res = []; 
  nums2.forEach(n=>{
    if(map.get(n)){
      res.push(n)
      map.delete(n)
    }
  }) 
  return res;
}

console.log(intersection(nums1,nums2))