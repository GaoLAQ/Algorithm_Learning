// Given a string and a pattern, find out if the string contains any permutation of the pattern 
// Permutation is defined as the re-arranging of the characters of the string. For example, 'abc'
// has the following six permutations 

// if a string has 'n'cdistinct charcters, it will have n! permutations 

// Example 1:
// Input: String = 'oidbcaf', Pattern = 'abc'
// Output: true 
// Explanation: The string contains 'bca' which is a permutation of the given pattern

const find_permutatons =  function(str, pattern){
    let left = 0; 
    let matched = 0 
    const map = {} 
    for(let i = 0; i< pattern.length; i++){
        const char= pattern[i]
        if(!map[char]){
            map[char] = 0 
        }
        map[char] += 1
    }
    for(let right = 0; right<str.length; right++){
        const rightChar = str[right]
        if(rightChar in map){
            map[rightChar] -= 1
            if(map[rightChar] === 0){
                matched +=1
            }
        }

        if(matched === Object.keys(map).length){
            return true 
        }

        if(right >= pattern.length -1){
            const leftChar = str[left]
            left += 1
            if(leftChar in map){
                if(left in map){
                    if(map[leftChar]===0){
                        matched -=1
                    }
                }
                map[leftChar] +=1
            }
        }
    }
    return false
}

console.log(find_permutatons('oidbcaf','abc'))
console.log(find_permutatons('odicf','dc'))
console.log(find_permutatons('bcdxabcdy','bcdxabcdy'))
console.log(find_permutatons('aaacb','abc'))