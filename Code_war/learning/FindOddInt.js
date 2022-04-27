// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

let A = [1,2,2,3,3,3,4,3,3,3,2,2,1]

function findOdd(A) {
    let count = 0 
    let collection = [] 
    let obj; 
    let resArray = []
    A.forEach((item,index) => {
       let condition = A.indexOf(item) !== index
       if (!condition){
           collection.push({[item]:1})
       } else {
           collection.map(item => {
             if(item[A[index]]) item[A[index]]++
           })
       }
    })
    let res = collection.filter(item=> 
       Object.values(item)%2!==0
    )
    return Object.keys(res[0])[0]
}
 
console.log(findOdd(A))