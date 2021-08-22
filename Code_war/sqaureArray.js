// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value

multiplicationTable = function(size) {
  const array = [];
  for(var k=1; k<size+1; k++){
    const row = []; 
    for(var j = 1; j<size+1; j++){
       row.push(k*j)
    }
    array.push(row)
  }
  console.log(array)
}

// multiplicationTable = function(size) {
//   var result = []; 
//   for(var i =0; i<size;i++){
//     result[i] = [];
//     // console.log(result[i])
//     for(var j=0; j<size; j++){
//       result[i][j]= (i+1)*(j+1)
//     } 
//   }
//   return result
// }

console.log(multiplicationTable(3))
