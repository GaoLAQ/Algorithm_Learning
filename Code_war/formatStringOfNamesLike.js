// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// function list(names) {
//   let str = "";
//   let newStr = "";
//   if (names.length === 0){
//     return ''
//   }
//   if (names.length === 1) {
//     for (var i = 0; i < names.length; i++) {
//       str += names[i].name;
//     }
//     return str;
//   } else if (names.length === 2) {
//     for (var i = 0; i < names.length; i++) {
//       newStr =
//         names[names.length - 2].name + " & " + names[names.length - 1].name;
//     }
//     return newStr
//   } else if (names.length > 2) {
//     for (var i = 0; i < names.length - 2; i++) {
//       str += names[i].name + ", ";
//       newStr =
//         names[names.length - 2].name + " & " + names[names.length - 1].name;
//     }
//     return str + newStr
//   }
// }

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.reduce(reducer, 5));
// 5 + 1 + 2 + 3 + 4 // expected output: 15
// reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

const reducer = (prev, current, index, array)=>{
  if (index === 0){
    return current.name;
  }
  else if (index === array.length - 1){
    return prev + ' & ' + current.name;
  } 
  else {
    return prev + ', ' + current.name;
  }
}

function list(names){
  return names.reduce( 
    reducer, '');
 }

// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// var title = title || "Error";
// basically checks if title evaluates to false. If it does, it "returns" "Error", otherwise it returns title.

// function list(names) {
//   var xs = names.map(p => p.name)
//   // last element 
//   var x = xs.pop()
//   return xs.length? xs.join(", ") + " & " + x : x || ""
// }

let newList = [
  // { name: "Bart" },
  { name: "Luna" },
  { name: "Lisa" },
  { name: "Maggie" },
];
console.log(list(newList));

