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

function reverseList(head: ListNode | null): ListNode | null {
    let dummy  = new ListNode(-1)
    dummy.next = head
    
    let curr = head
    let prev = null
    
    while(curr!=null){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
       
    }
    
    head = prev
    
    return head

};