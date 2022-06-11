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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    let curr1 = list1
    let curr2 = list2
    
    let dummy = new ListNode(-1)
    let curr = dummy
    
    while(curr1 && curr2){
        if(curr1.val < curr2.val){
            curr.next = curr1
            //curr1 is saving curr1 pointer as it will be lost due to dummy next later
            curr1 = curr1.next
        }
        else{
            curr.next = curr2
            curr2 = curr2.next
        }
        
        curr = curr.next
    }
    
    curr.next = curr1? curr1 : curr2
    
    return dummy.next
    

};