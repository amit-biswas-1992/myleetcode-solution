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

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    
    //set parent nodes
    let pm = new Map<number , TreeNode | null>();
	setParentMap(pm,root,null);
	
	//find k distance nodes
	let result : number[] = []
	let set = new Set<TreeNode>()
	helper(target,k,result,set,pm)
	
	return result
};



function setParentMap(pm : Map<number , TreeNode | null >, root: TreeNode | null, parentNode : TreeNode | null){
	if(!root) return;
	pm.set(root.val,parentNode);
	setParentMap(pm,root.left,root);
	setParentMap(pm,root.right,root);
}

function helper(node: TreeNode | null | undefined,  k: number, result: number[], set: Set<TreeNode>, map: Map<number,TreeNode|null>){
	
    if(!node || k<0 || set.has(node)) return;
	
	if(k==0) result.push(node.val)
    
	set.add(node)
	
	helper(node.left,k-1,result,set,map)
	helper(node.right,k-1,result,set,map)
	
	if(map.has(node.val))
		helper(map.get(node.val),k-1,result,set,map)
	
		
	
}

