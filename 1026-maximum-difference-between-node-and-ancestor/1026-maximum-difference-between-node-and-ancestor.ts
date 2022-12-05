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

function maxAncestorDiff(root: TreeNode | null): number {
    
    let max = 0

    dfs(root,root.val,root.val)

    function dfs(root: TreeNode | null, value: number,value2: number){
        if(root==null) return

        max = Math.max(max, Math.abs(root.val-value),Math.abs(root.val-value2))
        let maxParent = Math.max(root.val,value)
        let minParent = Math.min(root.val,value2)
        dfs(root.left,maxParent,minParent)
        dfs(root.right,maxParent,minParent)
    }

    return max


};