// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be
// given two baskets and your goal is to pick as many fruits as possible to be placed in the given baskets.
// You will be given an array of characters where each character represents a fruit tree. 
// The farm has following restrictions: 
// 1.Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold
// 2. You can start with any tree, but you can't skip a tree once you have started
// 3.You will pick exactly one fruit from every tree until you cannot, i.e, you will stop 
// when you have to pick from a third fruit type 

// Example 1:
// Input: Fruit = ['A','B','C','A','C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C','A','C']

const friuts_into_baskets = function(fruits){
   const map = {}
   let left = 0 
   let len = 0 
   for(let right = 0; right<fruits.length; right++){
       let rightChar = fruits[right]
       if(!map[rightChar]){
           map[rightChar] = 0 
       }
       map[rightChar]++
       // while 为 相反条件， 实际理论， while 小于等于2。 while 一旦满足>2, 就会停止。 所以while 为相反的逻辑条件 
       while(Object.keys(map).length>2){
          const leftChar = fruits[left]
          map[leftChar] -= 1
          if(map[leftChar]===0){
              delete map[leftChar]
          }
          left++
       }
       len = Math.max(len, right -left+1)
       console.log(map, left, right)
   }
   return len
}

console.log(friuts_into_baskets(['A','B','C','A','C']))