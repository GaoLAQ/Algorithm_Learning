const root  = [3,9, 20, null, null, 15, 7 ]

// 先要变成树
// in leet code 首先被定义
function TreeNode(val, left, right){
    this.val = (val === undefined ? 0: val)
    this.left = (left === undefined ? null:left)
    this.right = (right === undefined ? null:right)
    return this 
}

const rootCopy = TreeNode(1,2,3)
console.log(rootCopy)

// 遍历算法

// const maxDepth = (root)=>{
//     let res = 0; 
//     const dfs = (n, l)=>{
//         if(!n.left && !n.right){
//           res = Math.max(res,1)
//         }
//         dfs(n.left, l+1)
//         dfs(n.right, l+1)
//     }
//     dfs(root,1)
//     return res
// }
// console.log(maxDepth(root))