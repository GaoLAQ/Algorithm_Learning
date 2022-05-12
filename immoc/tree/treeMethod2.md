# 非递归 先中后序遍历

> 这是非递归方法 解决先中后序的问题，中心思想为 stack 解决方案

### 非递归 先序遍历 

```
const preorder = (root) => {
    if(!root){return}
    const stack = [root]
    while(stack.length){
        const n = stack.pop()
        console.log(n.val)
        if(n.right){
            stack.push(n.right)
        } 
        if(n.left){
            stack.push(n.left)
        } 
    }
}
```

### 非递归 中序遍历

```
const inorder = (root) => {
    if(!root) return 
    const stack = []
    let p = root; 
    while(stack.length || p){
        while(p){
            stack.push(p)
            p = p.left
        }
        const n = stack.push()
        console.log(n.val)
        p = n.right
    }
}
```

### 非递归 后序遍历

```
const postorder = (root) =>{
    if(!root){return}
    const outputStack = []; 

    const stack = [root]
    while(stack.length){
        const n = stack.pop()
        outputStack.push(n)
        if(n.right){
            stack.push(n.right)
        }
        if(n.left){
            stack.push(n.left)
        }
    }
    while(outputStack.length){
        const n = outputStack.pop()
        console.log(n.val)
    }
}
```

