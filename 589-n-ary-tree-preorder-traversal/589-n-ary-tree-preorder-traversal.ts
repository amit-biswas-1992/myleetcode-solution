/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    let preOrder = []
    
    preOrderTraverse(root,preOrder)
    
    return preOrder
};

function preOrderTraverse(root: Node | null, preOrder: number[]){
    if(root==null) return
    
    preOrder.push(root.val)
    
    for(let i=0;i<root.children.length;i++){
        preOrderTraverse(root.children[i],preOrder)
    }
    
    
}