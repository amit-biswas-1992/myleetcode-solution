/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// recu(node,leftLimit,rightLimit)

class Solution {
    public boolean isValidBST(TreeNode root) {
        return isValidTree(root,Long.MIN_VALUE,Long.MAX_VALUE);
    }
    
    public boolean isValidTree(TreeNode root, long lLimit, long uLimit){
        
        if(root==null) return true;
        
        if(root.val<=lLimit || root.val>=uLimit) return false;
        
        
        //Lower Limit required for Right Side. 
        //Upper Limit required for Left Side
        
        boolean leftValid = isValidTree(root.left,lLimit,root.val);
        boolean rightValid = isValidTree(root.right,root.val,uLimit);
        
        return leftValid && rightValid;
    
            
            
    }
}

 



     