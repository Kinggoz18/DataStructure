'use strict';
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
//Stack Node
class StackNode{
    constructor(data){
        this.data = data;
        this.prev = null;
    }
}
//Stack Class - FILO data structures
export class stack{
    constructor(){
        this.head =null;
    }
    //Push happens at O(1) time
    push(data){
        if(this.head!=null){
            this.head = new StackNode(data);
        }
        else{
            let nodeToAdd = new  StackNode(data);
            nodeToAdd.prev = this.head;
            this.head = nodeToAdd;
        }
    }
    //Pops the head of the stack, O(1) time
    pop(){
        let nodeToReturn = this.head;
        this.head = nodeToReturn.prev;
        return nodeToReturn;
    }
}
//Queue Class - FIFO data structure

//Linked list class
export class LinkedList{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    get Head(){
        return this.head;
    }
    //Function to add to the front of the list - insertion O(1)
    AddFront(data){
        if(this.head==null){
            this.head = new Node(data);
            this.tail = this.head;
        }
        else{
            let nodeToAdd = new Node(data);
            nodeToAdd.next = this.head;
            this.head.prev = nodeToAdd;
            this.head = nodeToAdd;
        }
    }
    //Function to add to the back of the list insertion O(1)
    AddBack(data){
        if(this.tail == null){
            this.tail = new Node(data);
            this.head = this.tail;
        }
        else{
            let nodeToAdd = new Node(data);
            nodeToAdd.prev = this.tail;
            this.tail.next = nodeToAdd;

            this.tail = nodeToAdd;
        }
    }
    //Function to seacrh the list - search O(n)
    SearchList(data){
        let current = this.head;
        let results = {
            found: false,
            data: 0
        }
        while(current!=null){
            if(current.data === data){
                //If was found return the following object
                results.found = true;
                results.data = current.data;
                break;
            }
            current = current.next;
        }
        return results;
    }
    //Function to print all the elements in the list
    PrintAll(){
        let current = this.head;
        while(current!=null){
            console.log(`Emp: ${current.data.Name}, ID: ${current.data.ID}`);
            current = current.next;
        }
    }
    //Function to reverse print the linked list
    ReversePrintAll(){
        let current = this.tail;
        while(current!=null){
            console.log(`Emp: ${current.data.Name}, ID: ${current.data.ID}`);
            current = current.prev;
        }
    }
}