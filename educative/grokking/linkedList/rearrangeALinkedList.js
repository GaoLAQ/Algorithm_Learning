class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
    
    print_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      console.log(result);
    }
  }
  
  
  const reorder = function(head) {
    if(head === null || head.next === null){
        return 
    }


    // find middle of the LinkedList 
    let fast  = head 
    let slow = head 

    while(fast!== null && fast.next!==null){
        slow = slow.next 
        fast = fast.next.next 
    }
    // slow is now pointing to the middle node 
    let secondHalf = reverse(slow)
    let firstHalf = head 

    // rearrange to produce the LinkedList in the require order 
    while(firstHalf !== null && secondHalf !== null){
        let temp = firstHalf.next 
        firstHalf.next = secondHalf
        firstHalf = temp 

        let temp1 = secondHalf.next 
        secondHalf.next = firstHalf
        secondHalf = temp1 

        if(firstHalf !== null){
            firstHalf.next = null
        }
    }
    
    return slow
  }

  const reverse = function(head){
    // let p1 = head
    let p2 = null 
    while(head!==null && head.next!==null){
        const temp = head.next
        head.next = p2
        p2 = head
        head = temp
    }
    return p2
  }
  
  head = new Node(2)
  head.next = new Node(4)
  head.next.next = new Node(6)
  head.next.next.next = new Node(8)
  head.next.next.next.next = new Node(10)
  head.next.next.next.next.next = new Node(12)
  reorder(head)
  head.print_list()