> 算法为递归思想
# 先序遍历算法口诀

- 访问根节点
- 对根节点的左子树进行先序遍历
- 对根节点的右子树进行先序遍历

```
const bt = {
    val:1,
    left:{
        val:2, 
        left:{
            val: 4, 
            left: null, 
            right: null
        }, 
        right:{
            val: 5, 
            left: null, 
            right: null
        }
    },
    right:{
        val:3, 
        left:{
            val:6,
            left: null, 
            right: null 
        }, 
        right:{
            val:7, 
            left: null, 
            right: null
        }
    }
}

const preorder = (root)=>{
    if(!root){return }
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}

```

# 中序遍历算法口诀

- 对根节点的左子树进行中顺序遍历
- 访问根节点
- 对根节点的右子树进行中序遍历

```
const inorder = (root)=>{
    if(!root) return 
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}

```

# 后序遍历算法口诀

- 对根节点的左子树进行后序遍历
- 对根节点的右子树进行后序遍历
- 访问根节点

```
const postorder = (root)=>{
    if(!root) return 
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}
```


