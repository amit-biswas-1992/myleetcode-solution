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

function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = []
    preOrder(root,result)
    return result
};

function preOrder(root: TreeNode|null,result: number[]){
    if(root==null) return
    result.push(root.val)
    
    preOrder(root.left,result)
    preOrder(root.right,result)
}

