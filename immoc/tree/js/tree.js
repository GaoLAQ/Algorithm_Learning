// This is a practise of to know preorder, inorder, postorder to know what is actually order to make a final output
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

// Understand the recursive method: 
// step 1: big cluster -> take part left and right gradually 
const preorder = (root)=>{
    if(!root){return }
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}
preorder(root);

const inorder = (root)=>{
    if(!root){return}
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}
inorder(root)

const postorder = (root)=>{
    if(!root){return}
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}
postorder(root)




