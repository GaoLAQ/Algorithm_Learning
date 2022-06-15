// Given a string with lowercase letters only, if you are allowed to replace no more than k letters
// with any letter, find the length of the longest substring having the same letters after replacement

// Example
// Input: String = "aabccbb", k= 2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have the lonest repeating substring 'bbbbb'

const length_of_longest_substring = function(str, k){
    let map = {}
    let len = 0 
    let left = 0 
    let maxRepeatLetter = 0 
    for(let right = 0; right <str.length; right++){
        const rightChar = str[right]
        if(!map[rightChar]){
            map[rightChar] = 0 
        }
        map[rightChar] += 1
        // 选出repeat 最多的字段， repeat 包含在window里
        maxRepeatLetter = Math.max(maxRepeatLetter, map[rightChar])
        if((right-left+1 - maxRepeatLetter)>k){
            const leftChar = str[left]
            map[leftChar] -= 1
            left ++
        }
        len = Math.max(len, right -left +1)
    }
    return len 
}

console.log(length_of_longest_substring('aabccbb',2))