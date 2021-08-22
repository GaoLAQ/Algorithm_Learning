// function isValidWalk(walk) {
//   if(walk.length ===0) return 'should return true'
//   let count1=0; 
//   let count2=0
//   if (walk.length === 10){
//     for(var i=0; i<walk.length; i++){
//       if(walk[i]==="n"){
//         count1++;
//       } else if (walk[i]==="s"){
//         count1--;
//       }

//       if(walk[i]==="w"){
//         count2++;
//       } else if (walk[i]==="e"){
//         count2--;
//       }
//     }
//     if(count1 ===0 && count2 ===0){
//       return 'should return true'
//     } else {
//       return 'should return false'
//     }
//   } else {
//     return 'should return false'
//   }
// }

function isValidWalk(walk) {
  var res = {n:0, w:0, s:0, e:0};
  walk.forEach((c) => res[c]++);
  return walk.length === 10 && res.n == res.s && res.e == res.w;
}

console.log(isValidWalk(['n','w','e','s','n','s','n','s','n','s']))