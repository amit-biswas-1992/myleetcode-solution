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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = [0]
    
    helper(root,max)
    
    return max[0]
    
    

};

function helper(root: TreeNode| null,max: number[]){
    if(root==null)return 0
    
    let left = (root.left)?  helper(root.left,max) : 0
    let right = (root.right)? helper(root.right,max) : 0
    
    max[0] = Math.max(max[0],left+right)
    
    return 1 + Math.max(left,right)
}