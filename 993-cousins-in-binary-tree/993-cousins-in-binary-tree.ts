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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    if(root==null) return false
    
    let levels = [-1,-1]
    let parents = [-1,-1]
    findLevelsandParents(root,x,y,levels,parents,0,-1)
    
    if(levels[0]!=-1 && levels[1]!=-1 && parents[0]!=-1 && parents[1]!=-1 && levels[0]==levels[1] && parents[0]!=parents[1])
        return true
    
    return false
    
};


function findLevelsandParents(root: TreeNode | null, x: number, y: number, levels: number[], parents: number[],level: number,parent: number){
    
    if(root==null) return
    
    if(root.val==x){
        levels[0]=level
        parents[0]=parent
    }
    if(root.val==y){
        levels[1]=level
        parents[1]=parent
    }
    
    findLevelsandParents(root.left,x,y,levels,parents,level+1,root.val)
    findLevelsandParents(root.right,x,y,levels,parents,level+1,root.val)


    
    
}


