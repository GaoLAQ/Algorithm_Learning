// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be 
// reached again by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that 
// tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.


// => Idea to judge if it has cycle, we can think this is a specical turnnel let code pass. If we have 
// two pointer to run the whole linked array, so we have different speeds, as the whole looping finished 
// the pointer will meet each other if we have cycle. if not, it will never meet 

// Step 1: set two pointers to looping the whole list node 
// Step 2: looping whole the chain 
// Step 3: if the pointers meet each other, we got it there return true, else return false 

var hasCycle = function(head) {
    let p1 = head; 
    let p2 = head; 
    while(p1 && p2 && p2.next){
        p1 = p1.next; 
        p2 = p2.next.next; 
        if (p1 ===p2){
            return true 
        }
    }
    return false 
};