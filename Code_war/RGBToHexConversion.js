// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
const converter = (num) =>{
  if (num<=0) return 0
  if (num>=255) return 255
  return num 
}

function rgb(r, g, b){
  let newR, newG, newB; 
  if (converter(r) < 10){
    newR = "0" + converter(r).toString(16)
  } else {
    newR =  converter(r).toString(16)
  }
  if (converter(g) < 10){
    newG = "0" + converter(g).toString(16)
  } else {
    newG =  converter(g).toString(16)
  }
  if (converter(b) < 10){
    newB = "0" + converter(b).toString(16)
  } else {
    newB =  converter(b).toString(16)
  }
  return (newR + newG + newB).toUpperCase()
}

// // Top Method
// function rgb(r, g, b){
//   return toHex(r)+toHex(g)+toHex(b);
// }
// // Nice smart method slice(-2); if it is empty, use 0 fill into the empty space
// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     console.log(("0"+(Number(d).toString(16))).slice(-2))
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }

// Math.max(0,Math.min(255,x)) ====> 0<x<255
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}

console.log(rgb(217,0, 61));