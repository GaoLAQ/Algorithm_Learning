// 建立 class ：nodeList
class  NodeList {
    constructor(val, next=null){
        this.val = val 
        this.next = next 
    }
    push(element){
        const node  = new Node(element)
        let current ; 
        if(this.next === null){
            this.next = node 
        } else {
            current = this.next 
            while(current.next!==null){
                current = current.next 
            }
            console.log(current)
        }
    }
}
console.log(NodeList) // 区分大小写

// 建立 class instance
const feature = new NodeList(null)
console.log(feature)

// Merge NodeList 
const node1 = new NodeList(2)
const node2 = new NodeList(3)
node1.next = node2
console.log(node1)


