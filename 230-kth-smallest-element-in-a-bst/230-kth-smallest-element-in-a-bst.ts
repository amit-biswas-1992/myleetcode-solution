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
    let treeInfo = new TreeInfo(0,0)
    helper(root,k,treeInfo)
    
    return treeInfo.kthElem
};

class TreeInfo{
    count: number
    kthElem: number
    
    constructor(c: number, elem: number){
        this.count = c
        this.kthElem = elem
    }
}

let helper = (root: TreeNode | null, k: number, info: TreeInfo) => {
    if(root==null) return
    let count = 0
    helper(root.left,k,info)
    info.count++
    if(info.count==k){
        info.kthElem = root.val
        //no need to traverse more
        return
    } 
    helper(root.right,k,info)
    
}