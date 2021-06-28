let s = "([{}{}{}])";
// function parentheses(s) {
//   if (s.length % 2 === 1) return false
//   let stack = [];
//   for (var i = 0; i < s.length; i++) {
//     let last = stack[stack.length - 1]
//     if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
//       stack.push(s[i])
//     } else {
//       if (
//         (last === "{" && s[i] === "}") ||
//         (last === "(" && s[i] === ")") ||
//         (last === "[" && s[i] === "]")) {
//         stack.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return stack.length === 0
// }

function parentheses(s) {
  let closeMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let charStack = []; //["("] 

  // validate input
  if (s === null || s === undefined) return false;

  for (var i = 0; i < s.length; i++) {
    let curChar = s.charAt(i);
    console.log("curChar:",curChar)
    console.log("closeMap:",closeMap[curChar])
    let topElement;
    if (closeMap[curChar] !== undefined) {
      console.log("Before charStack:", charStack) 
      topElement = (charStack.length === 0 ? "" : charStack.pop());
      console.log("After charStack:", charStack)
      console.log("topElement:", topElement)
      if (topElement !== closeMap[curChar]) return false;
    } else {
      charStack.push(curChar); // "("
      console.log("Push element:",charStack)
    }
  }
  return charStack.length === 0;
}
console.log(parentheses(s));
