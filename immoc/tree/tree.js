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

const preorder = (root)=>{
    if(!root){return }
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}

preorder(root);

const inorder = (root)=>{
    inorder(left)
    if(!root){return}
    console.log(root.val)
    inorder(right)
}
inorder(root)

// const preorder = (root)=>{
//     if(!root){return}
//     console.log(root.val)
//     const stack = [root]
//     while(stack.length){
//         const n = stack.pop()
//         console.log(stack.pop)
//     }
// }


// console.log(preorder(root))

