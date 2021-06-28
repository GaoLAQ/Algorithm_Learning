let nums = [3,2,4]; 
let target = 6; 

function twoSum(nums, target){
  const map = new Map(); 
  for(var i = 0; i< nums.length; i++){
    let c = nums[i]
    let otherPara = target - c; 
    if (map.has(otherPara)){
      return [map.get(otherPara), i]
    } else {
      map.set(c, i)
      console.log(map)
    }
  }
  return []
}

console.log(twoSum(nums,target))