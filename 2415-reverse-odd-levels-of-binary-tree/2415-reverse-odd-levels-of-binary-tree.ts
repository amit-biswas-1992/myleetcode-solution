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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    reverseOddLevelsHelper(root, root, 0)
    return root
};


function reverseOddLevelsHelper(root1: TreeNode | null, root2: TreeNode | null, level : number) {
    if (root1.left == null && root2.right == null) return 
    
    if (level % 2 === 0) {
        

        let temp = root1.left.val;
        root1.left.val = root2.right.val;
        root2.right.val = temp;

    }
    reverseOddLevelsHelper(root1.left,root2.right, level+1);
    reverseOddLevelsHelper(root1.right,root2.left, level+1);
}