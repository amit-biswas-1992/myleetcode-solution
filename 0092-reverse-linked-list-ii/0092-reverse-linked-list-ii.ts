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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    
    if(left==right) return head
    let last = null
    let curr = head
    
    let prev = null 
    let end = head
    
    
    let count = 1
    
    while(curr){
        if(count<left){
            last = curr
            curr = curr.next
            end = curr
        }
        else if(count>right) {
           
            //if the left has not move or it is still in very beginning then head should be prev
            
            if(last==null) head = prev
            
            if(last!=null){
                last.next = prev
            }
            
            end.next = curr
            
            break
        }
        
        else{
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            
        }
        
  
        count++
        
    }
    
    
    if(last!=null){
        last.next=prev
        return head
    }
    //if curr is null and it does not exceed right value, then we will just return prev
    return prev
    
};