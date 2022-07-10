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

function isValidBST(root: TreeNode | null): boolean {
    return checkValid(root,-Infinity,Infinity)

};

function checkValid(root: TreeNode | null, left: number, right: number){
    if(root == null) return true
    
    if(root.val <= left || root.val >= right) return false
    
    return checkValid(root.left,left,root.val) && 
           checkValid(root.right,root.val,right)

}

