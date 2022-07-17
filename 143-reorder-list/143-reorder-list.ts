/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let slow = head
    let fast = head
    
    
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }

    let curr = slow.next
    
    
    let prev = null
    
    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        //storing middle next
        slow.next = curr
        curr = temp
        
    }



    let start = head
    let current = slow.next
    slow.next = null
    

    while(current){
        
        let startNext = start.next
        let currNext = current.next
        
        
        current.next = startNext
        start.next = current 
        
        start = startNext 
        current = currNext
       
    }



};

