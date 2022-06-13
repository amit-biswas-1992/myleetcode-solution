/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    
    if(root == null) return false
    
    let match = false 
    if(root.val == subRoot.val) match = isEqual(root,subRoot)
    
    return match || isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
    

};

function isEqual(root1: TreeNode | null, root2: TreeNode | null){
    if(root1==null && root2==null) return true
    if(root1==null || root2==null || root1.val != root2.val) return false
    
    return isEqual(root1.left,root2.left) && isEqual(root1.right,root2.right)
    
    
}