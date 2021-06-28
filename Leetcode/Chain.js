// Javascript does not hav Chain 

const a = {val:"a"}; 
const b = {val:"b"}; 
const c = {val:"c"}; 
const d = {val:"d"}; 

a.next = b; 
b.next = c; 
c.next = d; 

console.log(JSON.stringify(a))

// 遍历链表
let p = a; // 申明一个指针
while(p){
  console.log(p.val); 
  p = p.next;
}

// 链表插入一个指针
const e = {val:'e'}
c.next = e; 
e.next =d; 

console.log(JSON.stringify(a))

// 链表删除一个指针 特别注意：我们要知道上一节点， 然后连到下一个节点。 如果我们只知道当前想删除的节点， 我就没有办法了。 我们只能把删除的节点值被下一个节点改写，这样删除值被改写成下一个节点值，值满足
// 然后删除下一个值，那么数量也满足了
c.next = d; 
console.log(JSON.stringify(a))
