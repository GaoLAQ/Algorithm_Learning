// Given a string, find the length of the logest substring, which has all distinct characters
// Input: String = “aabccbb”
// Output： 3 
// Explanation： The longest substring with distinct characters is "abc"

// const non_repeat_substring  = function(str){
//     let map = {}
//     let left = 0 
//     let len = -Infinity
//     for(let right = 0; right <str.length; right++){
//         const rightChar = str[right]
//         if(!map[rightChar]){
//             map[rightChar] = 0 
//         }
//         map[rightChar]++
//         // while condition 不能定义没有declare condition
//         // 这里的 while 是外部环境condition， 不是自身环境的condition， for - while ‘condition’ loop 
//         while(map[rightChar]>1){
//             const leftChar = str[left]
//             map[leftChar] -= 1
//             left++
//             if(map[leftChar]===0){
//                 delete map[leftChar]
//             }
//         }
//         len = Math.max(len, right-left+1)
//     }
//     return len 
// }

// Method 2 
const non_repeat_substring = function(str){
    let left = 0 
    let map = {}
    let len = -Infinity
    for(let right =0; right<str.length; right++){
        const rightChar = str[right]
        if(!map[rightChar]){
            map[rightChar] = 0 
        }
        map[rightChar] +=1
        // if condition 更easy 直接left = right
        if(map[rightChar]>=2){
            const leftChar = str[left]
            map[leftChar] -= 1
            left = right 
            if(map[leftChar]===0){
                delete map[leftChar]
            }
        }
        len = Math.max(len, right - left+1)
    }
    return len 
}

// Method 3
const non_repeat_substring = function(str){
    let left = 0 
    let map = {}
    let len = -Infinity
    for(let right =0; right<str.length; right++){
        const rightChar = str[right]
        // suppose map[rightChar] = 0 
        // right 发现 repeat 设成left
        if(map[rightChar]){
          // update left, right update, left 继承righ
          left = Math.max(left, map[right]+1)
        }
        map[rightChar] = right 
        len = Math.max(len, right - left+1)
    }
    return len 
}

console.log(non_repeat_substring('aabccbb')) // 3
console.log(non_repeat_substring('abbbb')) // 2
console.log(non_repeat_substring('abccde')) // 3