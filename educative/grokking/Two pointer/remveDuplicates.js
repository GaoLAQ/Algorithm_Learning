// using set methods
// const remove_duplicates = function(arr){
//     return [...new Set(arr)]
// }


// Method 2: hashMap 
// const remove_duplicates = function(arr){
//     const hashMap = {}
//     for(let i = 0; i<arr.length; i++){
//         if(!arr[i] in hashMap){
//           hashMap[i]=0
//         }
//         hashMap[arr[i]] = arr[i]
//     }
//     return Object.values(hashMap)
// }

// Method 3: 
const remove_duplicates = function(arr){
    let nextNonDuplicate = 1

    for(let i = 0; i<arr.length; i++){
        if(arr[nextNonDuplicate-1]!==arr[i]){
            // console.log(arr[i], arr[nextNonDuplicate], arr)
            arr[nextNonDuplicate] = arr[i]
            // console.log(arr[i], arr)
            nextNonDuplicate += 1 
        }
    }
    return nextNonDuplicate // after remove duplication, how many values 
}

// console.log(remove_duplicates([2,2,2,11]))
console.log(remove_duplicates([2,3,3,3,3,6,9,9]))

// Similiar question 
// Description 
// Given an unsorted array of numbers and a target 'key', remove all instances of 'key' in-place and return
// the new length of the array 

// Example 1:
// Input: [3,2,3,6,3,10,9,3], key = 3
// Ouptut: 4  
// Explanation: The first elements after removing every 'key' will be [2,6,10, 9 ] 

function remove_element(arr,key){
    let left = 0 
    for(let right=0; right<arr.length; right++){
        if(arr[right]!== key){
            arr[left] = arr[right]
            left ++ 
        }
    }
    return left 
}

console.log(remove_element([2,11,2,2,1], 2))
