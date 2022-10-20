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

function swapPairs(head: ListNode | null): ListNode | null {
    
    let fast = head
    
    let fakeHead = new ListNode(-1)
    fakeHead.next = head
    let temp = fakeHead
    
    while(fast && fast.next){
        
        let prev = fast
        let current = fast.next
        let next = fast.next.next
        
        temp.next = current
        current.next = prev
        prev.next = next
        
        fast = next
        temp = prev
        
    }
    
    return fakeHead.next

};