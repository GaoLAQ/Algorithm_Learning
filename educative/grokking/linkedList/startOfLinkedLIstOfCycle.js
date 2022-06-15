// build linked List 

class Node {
    constructor(value, next=null){
        this.value = value 
        this.next = next
    }
}

const find_cycle_start = function(head){
    let fast = head 
    let slow = head 
    while(fast!==null && fast.next!==null){
        fast = fast.next.next 
        slow = slow.next
        if(slow === fast){
            return calulate_cycle_length(slow)
        }
    }
    return 0 
}

// 纯 while loop， 目的是不断loop 不管他有多少数据， 中间加入break
function calulate_cycle_length(slow){
    let current = slow 
    let cycle_length = 0 
    while(true){
        current = current.next
        cycle_length += 1
        if(current === slow){
            break
        }
    }
    return cycle_length 
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next // this is cycle 
head.next.next.next.next.next.next = head.next.next.next 

head.next.next.next.next.next.next = head 

console.log(`LnkedList cycle start: ${find_cycle_start(head).value}`)
