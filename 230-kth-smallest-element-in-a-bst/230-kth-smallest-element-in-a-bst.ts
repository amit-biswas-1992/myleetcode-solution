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

function kthSmallest(root: TreeNode | null, k: number): number {
    let sorted: number[] = []
    helper(root,k,sorted)
    
    return sorted[k-1]
};

let helper = (root: TreeNode | null, k: number, sorted: number[]) => {
    if(root==null) return
    helper(root.left,k,sorted)
    sorted.push(root.val)
    helper(root.right,k,sorted)
    
}