let array = [1,3,2,6,-1,4,1,8,2];
K=5; 

const slidingWindow = (K, array)=>{
  let result = [];
  let start = 0 
  let sum = 0 
  for(let end = 0; end<array.length; end++ ){
    sum += array[end]
    if(end >= K-1){
      result.push(sum/K)
      sum -= array[start] 
      start +=1
    }
  }
  return result
}

console.log(slidingWindow(5, array))


