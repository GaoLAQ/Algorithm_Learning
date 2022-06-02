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

// no recusive 
// stack.pop()  output item being deleted 

// const preorder = (root)=>{
//     if(!root){ return }
//     const stack = [root]
//     while(stack.length){
//         const n = stack.pop()
//         if(n.left){stack.push(n.left)}
//         if(n.right){stack.push(n.right)}
//         console.log(stack)
//     }
// }

// preorder(root)

const inorder = (root)=>{
    if(!root){return}
    const stack = []
    let p = root 
    while(p || stack.length){
        while(p){
            stack.push(p)
            p = p.left  
        }
        const n = stack.pop()
        console.log(n.val)
        p = n.right
    }
}

inorder(root)