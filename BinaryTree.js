'use strict';

//Binary Tree Node
class BinaryNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree{

    constructor(){
        this.root = null;
    }
    //Returns the trees root
    get Root(){
        return this.root;
    }

    //Adds a data to the binary tree - O(logn)
    Add(data){
        if(this.root==null){
            this.root = new BinaryNode(data);
        }
        else{
            let nodeToAdd = new BinaryNode(data);
            this.AddToTree(this.root, nodeToAdd);
        }
    }
    AddToTree(root, nodeToAdd){
        if(root == null){
            root = nodeToAdd;
        }
        else if(nodeToAdd.data > root.data)
        {
            root.right = this.AddToTree(root.right, nodeToAdd);
        }
        else if(nodeToAdd.data < root.data)
        {
            root.left = this.AddToTree(root.left, nodeToAdd);
        }
        return root;
    }
    //Inorder Implementation 
    PrintInOrder(root){
        if(root==null){
            return;
        }
        else{
            this.PrintInOrder(root.left);
            console.log(root.data);
            this.PrintInOrder(root.right);
        }
    }
    //PostOrder Implementation
    PrintPostOrder(root){
        if(root==null){
            return;
        }
        else{
            this.PrintPostOrder(root.left);
            this.PrintPostOrder(root.right);
            console.log(root.data);
        }
    }
    //Preorder Implmentation
    PrintPreorder(root){
        if(root==null){
            return;
        }
        console.log(root.data);
        this.PrintPreorder(root.left);
        this.PrintPreorder(root.right);
    }
    //Calculates the Height of the tree
    GetHeight(root){
        if(root==null)
        {
            return -1;
        }
        let left = this.GetHeight(root.left);
        let right = this.GetHeight(root.right);
        return Math.max(left, right) +1;
    }
    //Function to search the tree, BST serach is o(logn)
    Search(root, find){
        //Base case item is not in the tree
        if(root == null){
            return'Not Found';
        }
        //The item was found
        else if(root.data === find){
            return root.data;
        }
        if(find > root.data){
            return this.Search(root.right, find);
        }
        else if(find < root.data){
            return this.Search(root.left, find);
        }
    }
    //Implement Balancing function
}