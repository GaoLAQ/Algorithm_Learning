const s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// const rule = function(a,b){
  
// }
function meeting(s) {
  let string = s.toUpperCase().split(";")
  .map(x=>x.split(":").reverse().join(', '))
  .sort().join(')(')
  return '(' + string + ')'
}

console.log(meeting(s))

function meeting(s) {
  let string = s.toUpperCase().split(';')
                .map(x => x.split(':').reverse().join(', '))
                .sort()
                .join(')(')
  return '(' + string + ')'
}