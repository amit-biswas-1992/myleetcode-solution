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

function oddEvenList(head: ListNode | null): ListNode | null {
    if(head==null || head.next == null) return head
    
    
    
    let odd = head
    let even = head.next
    
    let current = even
    
    while(current && current.next){
        let first = current.next
        let second = current.next.next
        let temp = odd.next
        odd.next = first
        even.next = second
        first.next = temp
        
        odd = first
        even = second
        
        current = second
        
        
    }
    
    return head
};