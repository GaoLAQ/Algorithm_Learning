// Given the head of a sorted linked list, 
// delete all duplicates such that each element appears only once. 
// Return the linked list sorted as well.


var deleteDuplicates = function(head) {
    let p1 = head; 
    
    // Step 1: looping through the listnode 
    // if current and next val ===
    // Thus p1.next = p1.next.mext  => it deletes the next elements 

    // make sure p1 and p1.next have values, because it involves two parameters, so it invloves two parameters if involved each other
    // if ( ) else {} it has time continous feature 
    while(p1 && p1.next){
        if (p1.val === p1.next.val ){
            p1.next = p1.next.next
        } else {
            p1 = p1.next
        } 
    }
    return head;
};