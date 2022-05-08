# 什么是深度/广度的优先遍历
- 深度优先遍历：尽可能深的搜索树的分支 <br/>
- 广度优先遍历：先访问离根节点最近的节点
***

### 深度优先遍历算法口诀
1.访问根节点 <br/>
2.对根节点的children挨个进行深度优先遍历


### Step 1 建立一棵树
```
const tree = [
    {
        val:'a', 
        children:[
            {
                val:'b', 
                children:[
                    val:'c',
                    children:[]
                ], 
            },
            {
                val:'d', 
                children:[], 
            }
        ], 
    }, 
    {
        val:'e',
        children:[
            {
                val:'f', 
                children:[], 
            },
            {
                val:'g', 
                children:[], 
            }
        ]
    }
]
```

### Step 2 深度优先遍历
```
const dfs = (root) => {
    console.log(root.val) // 访问根节点
    root.children.forEach(
        return item => dfs(item)
    )
}

```
> 重点：item=>dfs(item) 是一个函数方程，forEach 本身接受方程， 所以可以简写成 dfs ： root.children.forEach(dfs)

### Step 2.1 广度优先遍历

- Step 1. 新建一个队列，把根节点入队
- Step 2. 把队头出队并访问
- Step 3. 把队头的children 挨个入队
- Step 4. 重复第二，三步，直到队列为空

```
const bfs = (root)=>{
    const q = [root]
    while(q.length > 0){
        const n = q.shift();
        console.log(n.val)
        n.children.forEach(child => {
            q.push(child)
        })
    }
}

bfs(tree)
```


