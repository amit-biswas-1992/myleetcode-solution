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

function smallestFromLeaf(root: TreeNode | null): string {
    return solve(root,"")    

};

function solve(root: TreeNode | null, curr: string){
    if(root==null) return "";
    
    curr = String.fromCharCode(root.val+97) + curr
    
    if(root.left == null && root.right == null) return curr
    
    let left = solve(root.left,curr)
    let right = solve(root.right,curr)
    
    if(right && left)
        return (left.localeCompare(right) < 0) ? left : right 
    //great line, return which is not null
    else return left || right
    
    
}
