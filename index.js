'use strict';
import { LinkedList } from "./LinearDS.js";
import { BinaryTree } from './BinaryTree.js'
class Employee {
   constructor(name, id){
    this.name = name;
    this.id = id;
   }
   get Name (){
    return this.name;
   }
   get ID (){
    return this .id;
   }
}

let employees = [];
let list = new LinkedList();

//Create new employees
for(let i =0 ; i < 10; i++){
    let newEmp = new Employee(`emp${i}`, i);
    employees.push(newEmp);
}

employees.forEach((element)=>{
     //console.log(`${element.Name}: ${element.ID}`);
    list.AddBack(element);
 });
//***********************************Test for Linked List
//list.ReversePrintAll();
list.PrintAll();
 let real = employees[5];
 let fake = new Employee({
    name: 'James',
    id: 0,
 })

 let results = list.SearchList(real);
 results.found == true ? console.log('found') : console.log('Not found');
results = list.SearchList(fake);
 results.found == true ? console.log('found') : console.log('Not found');

//***********************************Test for binary tree
let tree = new BinaryTree();
//Add random numbers to the binary tree
let arr = [15, 10, 20, 23, 27, 17, 8, 5, 9]
for(let i =0 ; i < arr.length; i++){
    tree.Add(arr[i]);
}

console.log(`In Order: \n`);
tree.PrintInOrder(tree.Root);
console.log(`Post Order: \n`);
tree.PrintPostOrder(tree.Root)
console.log(`In Order: \n`);
tree.PrintPreorder(tree.Root)

let found;
console.log(`Found: ${tree.Search(tree.Root, 17)}`);
