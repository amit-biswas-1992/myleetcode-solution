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
    helper(root,targetSum,0,result,[])
    return result
};


function helper(root: TreeNode| null, targetSum: number, currSum: number, result: number[][],current: number[]){
    
    if(!root) return;
    
    if(root.left == null && root.right == null){
        if(currSum + root.val == targetSum){
            current.push(root.val)
            result.push(Array.from(current))
        }
            
    }
    
    current.push(root.val)
    
    helper(root.left,targetSum,currSum+root.val,result,Array.from(current))
    helper(root.right,targetSum,currSum+root.val,result,Array.from(current))
    return
}

