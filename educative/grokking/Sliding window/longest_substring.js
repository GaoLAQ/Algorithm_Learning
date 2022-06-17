// Given a string, find the length of the longst substring in it with no more than K distinict characters
// Example 1: 
// Input: String = "araaci", K = 2
// Outout: 4
// Explanation: The longest substring with no more than '2' distinct character is 'area'

// const longest_substring_with_k_distinct = function(str,k){
//    const map = {}
//    let left = 0 
//    let len = -Infinity
//    for(let right =0; right<str.length; right++){
//         const c = str[right]
//         if(!map[c]){
//             map[c] = 0 
//         }
//         map[c] +=1
//         while(Object.values(map).length>=k){
//             const d = str[left]
//             map[d] -=1
//             left++
//             if(map[d]===0){
//                 delete map[d]
//             }
//         }
//         len = Math.max(len, right-left+1)
//     }
//     return len
// }

const longest_substring_with_k_distinct = function(str,k){
    const map = {}
    let left = 0 
    let len = -Infinity
    for(let right =0; right<str.length; right++){
        const c = str[right]
        if(!map[c]){
            map[c] = 0 
        }
        map[c] +=1
        while(Object.keys(map).length>=k){
            const leftChar = str[left]
            map[leftChar]-=1
            left++
            if(map[leftChar]===0){
                delete map[leftChar]
            }
        }
        len = Math.max(len, right -left +1)
     }
     return len
 }

console.log(longest_substring_with_k_distinct('araaci', 2))