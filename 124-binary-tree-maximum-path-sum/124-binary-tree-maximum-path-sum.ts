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

class TreeInfo{
    max : number
    
}

function maxPathSum(root: TreeNode | null): number {
    let info = new TreeInfo()
    info.max = -Infinity
    
    helper(root,info)
    
    return info.max
};


function helper(root: TreeNode | null, info: TreeInfo){
    
    if(root == null) return 0
      
    let left = Math.max(0,helper(root.left,info))
    let right = Math.max(0,helper(root.right,info))    
    
    info.max = Math.max(info.max,root.val+left+right)
    
    
    return root.val + Math.max(left,right)
    
}

