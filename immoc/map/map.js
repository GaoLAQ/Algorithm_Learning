const m = new Map()
console.log(m)
// add 
m.set('a','aa')
m.set('b','bb')
console.log(m)
// delete
m.delete('b')
console.log(m)
// edit 
m.set('a','bnm')
console.log(m)
// get features
const res = m.get('a')
console.log(res)
// clear all the map 
m.clear()
console.log(m)