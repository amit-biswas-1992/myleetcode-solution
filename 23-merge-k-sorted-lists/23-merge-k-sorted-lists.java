/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        
        if(lists.length==0 || lists==null) return null;
        
        PriorityQueue<ListNode> pq = new PriorityQueue<ListNode>(lists.length, (a,b)->a.val-b.val);
        
        for(ListNode node : lists){
            if(node!=null)
                pq.offer(node);
        }
        
        ListNode head = new ListNode(-1);
        ListNode curr = head;
        
        while(!pq.isEmpty()){
            ListNode node = pq.poll();
            curr.next = node;
            if(node.next!=null) pq.offer(node.next);
            curr = curr.next;
                
        }
        
        return head.next;  
    }
}