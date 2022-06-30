// data 
const root = {
    val:'A',
    left:{
        val:'B', 
        left:{
            val: 'D', 
            left: {
                val:'E',
                left: null, 
                right: {
                    val:'G',
                    left: null, 
                    right: null
                }
            }, 
            right:{
                val:'F', 
                left:null, 
                right: null
            }
        }, 
        right:{ 
            val: 'E', 
            left: null, 
            right: null
        }
    },
    right:{
        val:'C', 
        left:{
            val:'G',
            left:{
                val: 'H', 
                left: null, 
                right: null
            }, 
            right:null
        }, 
        right:{
           val:'I',
           left: null,
           right: null
        }
    }
}

// No Recusive Method 
// stack.pop()  output item being deleted 

const preorder = (root)=>{
    if(!root){ return }
    const stack = [root]
    while(stack.length){
        const n = stack.pop()
        if(n.left){stack.push(n.left)}
        if(n.right){stack.push(n.right)}
        console.log(stack)
    }
}
console.log('this is preorder calling',preorder(root))
// inorder
const inorder = (root)=>{
    if(!root) return  
    let p = root
    while(p || stack.length >0){
        while(p){
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        console.log(n.val)
        p = n.right 
    } 
}
console.log('this is inorder calling',inorder(root))
// outorder 
const postorder = (root)=>{
    if(!root) return  
    const stack = [root]
    const outArr = []
    while(stack.length>0）{
        const n = stack.pop()
        outArr.push(n)
        if(n.left){stack.push(n.left)}
        if(n.right){stack.push(n.right)}
    }
    while(outArr.length>0){
        const n = outArr.pop()
        console.log(n.val)
    }
}
