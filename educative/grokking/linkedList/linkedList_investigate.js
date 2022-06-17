// A Linked list is an ordered collection of data elements. 
// A data element can be represented as a node in a linked list
// Each node consists of two parts: value & pointer to the next node 

// => Node can easly be removed or added from a linked list without reorganizing the entire data structure
// dis: search operations are slow in linked list 
// dis: it uses more memory than arrays because of the storage of the pointers 

// Types: three types of linked lists:
// - Singly linked lists: Each node contains only one pointer to the next node. 
// - Doubly Linked lists: Each node contains two pointers 
// - Circular Linked Lists: Circular linked lists 


// Implementing a List Node in js => 建立 node 属性

// 链表是一个火车
// node是一个车厢
// Linklist是火车整体



// define node and linkedlist 
class Node {
    constructor(element, next=null){
        this.element = element 
        this.next = next 
    }
}

// Implementing a Linked List in js => 建立 List 属性
class LinkedList {
    constructor(head = null){
        this.head = head
        this.count = 1
    }
}

// Putting it all together  
let node1 = new Node(1)

LinkedList.prototype.push = function(element){
    const node = new Node(element)
    let current; 
    if(this.head === null){
        this.head = node 
    } else {
        current = this.head 
        while(current!== null && current.next!==null){
            current = current.next 
        }
        current.next = node 
    }
    this.count++
}

LinkedList.prototype.removeAt = function(index){
    if(index>=0 && index < this.count){
       let current = this.head 
       if(index === 0){
          this.head = this.head.next 
       } else {
           let prev; 
           for(let i = 0; i<index; i++){
                prev = current
                current = current.next
           }
           // const prev  = this.getElementAt(index-1)
           // current = prev.next 
           // prev.next = current.next 
           prev.next = current.next 
       }
       this.count--
       return current.element
    }
    return undefined 
}

LinkedList.prototype.getElementAt= function(index){
    if(index >=0 && index < this.count){
        let current = this.head 
        for(let i = 0; i< index;i++){
            current = current.next
        }
        return current 
    }
    return undefined 
}

LinkedList.prototype.insert = function(element, index){
    if(index >= 0 && index <= this.count){
        const node = new Node(element)
        if(index === 0){
            let current = this.head 
            node.next = current 
            this.head = node
        } else {
            
            const prev = this.getElementAt(index-1)
            let current = prev.next 
            node.next = current 
            prev.next = node
        }
        this.count ++ 
        return this.head
    }
    return console.log('Index does not exist') 
}

LinkedList.prototype.indexOf = function(element){
    let current = this.head 
    for(let i = 0; i<this.count && current!==null ; i++){
        if(element === current.element){
            return i 
        }
        current = current.next 
    }
    return -1 
}

LinkedList.prototype.size = function(){
    return this.count 
}

LinkedList.prototype.isEmpty = function(){
    return this.size()=== 0 
}

LinkedList.prototype.getHead = function(){
    return this.head 
}

LinkedList.prototype.toString = function(){
    if(this.head ===null){
        return ''  
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for(let i = 1; i< this.size() && current !== null; i++){
        objString = `${objString}, ${current.element}`
        current = current.next 
    }
    return objString 
}

// To create an instance of the LinkedList class 
let list = new LinkedList(node1)


console.log(list)
list.push('hellooooooo')
console.log(list.insert('hello', 0))
console.log('after inserting', list)
console.log(list.toString())

// console.log(list)

// console.log(list.removeAt(0))

// Insert operation on a singly linked list 
// An insert operation will insert a node into the list. 
// Three cases: 
// 1) Inserting a new node before the head (at the begining of the list)
// 2) Inserting a new node after the tail 
// 3) Inserting a new node in the middle of the list 



