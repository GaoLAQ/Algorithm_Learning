let iterativeFunction = function (arr, x) {
    let start=0, end=arr.length-1;
    // Iterate while start not meets end
    while (start<=end){
        // Find the mid index
        let mid = Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return mid
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
    return -1;
}

let recursiveFunction = function(arr, x, left, right){
  let mid = Math.floor((left+right)/2)
   if (left < right){
    if( arr[mid] === x ){
      return mid 
    } else if (arr[mid] > left ){
      recursiveFunction(arr, x, mid +1, right )
    } else {
      recursiveFunction(arr, x, left, mid-1)
    }
   }
   return -1 
}

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

console.log(recursiveFunction([1,3,5,7,8,9],x,0,arr.length-1))