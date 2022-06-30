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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let result = []
    helper(root,targetSum,result,[])
    return result
};


function helper(root: TreeNode| null, targetSum: number,  result: number[][],current: number[]){
    
    if(!root) return;
    
    current.push(root.val)
    
    if(root.left == null && root.right == null && root.val == targetSum){
            result.push(Array.from(current))
    }
    
    helper(root.left,targetSum-root.val,result,Array.from(current))
    helper(root.right,targetSum-root.val,result,Array.from(current))
    return
}

