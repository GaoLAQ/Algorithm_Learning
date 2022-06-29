# 非递归 先中后序遍历

> 这是非递归方法 解决先中后序的问题，中心思想为 stack 解决方案

### 非递归 先序遍历 preorder

```
const preorder = (root) => {
    if(!root){return}
    const stack = [root]
    while(stack.length){
        const n = stack.pop()
        console.log(n.val)
        if(n.right){stack.push(n.right)} 
        if(n.left){stack.push(n.left)} 
    }
}
```

> 先序遍历 process

```
[
    {
      val: 'B',
      left: { val: 'D', left: [Object], right: [Object] },
      right: { val: 'E', left: null, right: null }
    },
    {
      val: 'C',
      left: { val: 'G', left: [Object], right: null },
      right: { val: 'I', left: null, right: null }
    }
  ]
  [
    {
      val: 'B',
      left: { val: 'D', left: [Object], right: [Object] },
      right: { val: 'E', left: null, right: null }
    },
    {
      val: 'G',
      left: { val: 'H', left: null, right: null },
      right: null
    },
    { val: 'I', left: null, right: null }
  ]
  [
    {
      val: 'B',
      left: { val: 'D', left: [Object], right: [Object] },
      right: { val: 'E', left: null, right: null }
    },
    {
      val: 'G',
      left: { val: 'H', left: null, right: null },
      right: null
    }
  ]
  [
    {
      val: 'B',
      left: { val: 'D', left: [Object], right: [Object] },
      right: { val: 'E', left: null, right: null }
    },
    { val: 'H', left: null, right: null }
  ]
  [
    {
      val: 'B',
      left: { val: 'D', left: [Object], right: [Object] },
      right: { val: 'E', left: null, right: null }
    }
  ]
  [
    {
      val: 'D',
      left: { val: 'E', left: null, right: [Object] },
      right: { val: 'F', left: null, right: null }
    },
    { val: 'E', left: null, right: null }
  ]
  [
    {
      val: 'D',
      left: { val: 'E', left: null, right: [Object] },
      right: { val: 'F', left: null, right: null }
    }
  ]
  [
    {
      val: 'E',
      left: null,
      right: { val: 'G', left: null, right: null }
    },
    { val: 'F', left: null, right: null }
  ]
  [
    {
      val: 'E',
      left: null,
      right: { val: 'G', left: null, right: null }
    }
  ]
  [ { val: 'G', left: null, right: null } ]
  []
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

> 中序遍历 process

```
[
  {
    val: 'A',
    left: { val: 'B', left: [Object], right: [Object] },
    right: { val: 'C', left: [Object], right: [Object] }
  }
]
[
  {
    val: 'A',
    left: { val: 'B', left: [Object], right: [Object] },
    right: { val: 'C', left: [Object], right: [Object] }
  },
  {
    val: 'B',
    left: { val: 'D', left: [Object], right: [Object] },
    right: { val: 'E', left: null, right: null }
  }
]
[
  {
    val: 'A',
    left: { val: 'B', left: [Object], right: [Object] },
    right: { val: 'C', left: [Object], right: [Object] }
  },
  {
    val: 'B',
    left: { val: 'D', left: [Object], right: [Object] },
    right: { val: 'E', left: null, right: null }
  },
  {
    val: 'D',
    left: { val: 'E', left: null, right: [Object] },
    right: { val: 'F', left: null, right: null }
  }
]
[
  {
    val: 'A',
    left: { val: 'B', left: [Object], right: [Object] },
    right: { val: 'C', left: [Object], right: [Object] }
  },
  {
    val: 'B',
    left: { val: 'D', left: [Object], right: [Object] },
    right: { val: 'E', left: null, right: null }
  },
  {
    val: 'D',
    left: { val: 'E', left: null, right: [Object] },
    right: { val: 'F', left: null, right: null }
  },
  {
    val: 'E',
    left: null,
    right: { val: 'G', left: null, right: null }
  }
]

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



