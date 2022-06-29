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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
   return helper(nums,0,nums.length)
};

function helper(nums: number[], l: number, r:number){
    if(l>=r) return null
    let maxIndex = findMaxIndex(nums,l,r)
    
    let root = new TreeNode(nums[maxIndex])
    
    root.left = helper(nums,l,maxIndex)
    root.right = helper(nums,maxIndex+1,r)
    
    return root
}

function findMaxIndex(nums: number[], l:number, r: number){
    let max = l
    
    for(let i=l+1;i<r;i++){
        if(nums[max]<nums[i]){
            max = i
        }
    }
    
    return max
}