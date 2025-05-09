// Question 1> => Write a function that takes a number as input and returns the factorial of that number.

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
// }

// console.log(factorial(5));

// Question 2> Write a function to sort an array of numbers in ascending order.

// Solution 1> Without using built in method.
// function ascendingOrder(arr){
//     for(let i=0; i < arr.length-1 ; i++){
//         for(let j=i+1; j < arr.length; j++){
//             if(arr[i] > arr[j]){
//                 let nextVal = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = nextVal;
//             }
//         }
//     }
//     return arr;
// }

// console.log(ascendingOrder([1,122,12,1,4,0,90,14]));

// Solution 2> By using Built in method.

// function ascendingOrder(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(ascendingOrder([22, 11, 9, 6, 0, 13, 55]));

// Question 3> Removing duplicate elements from an array.

// function removingDuplicateElem(arr) {
//   let duplicateRemovedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < duplicateRemovedArr.length; j++) {
//       if (arr[i] === duplicateRemovedArr[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       duplicateRemovedArr.push(arr[i]);
//     }
//   }
//   return duplicateRemovedArr;
// }

// function removingDuplicateElem(arr) {
//   return arr.filter((ele, index) => arr.indexOf(ele) === index);
// }

// console.log(removingDuplicateElem([1, 1, 1, 2, 2, 2, 3, 1, 3, 3, 4, 4, 4]));

// Question 4 Create a function that takes an array of strings and returns the longest string.

// const findLongestString = (arr) => {
//   let longestStr = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (longestStr.length < arr[i].length) longestStr = arr[i];
//   }
//   return longestStr;
// };

// console.log(
//   findLongestString(["dev", "dshjsd", "haskjkajsassa", "s", "as", ""])
// );

// Question 5 Implement a function to find the intersection of two arrays.

// const intersectionOfAnArray = (arr1, arr2) => {
//   let intersectedArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersectedArr.includes(arr2[i])) {
//       intersectedArr.push(arr1[i]);
//     }
//   }
//   return intersectedArr;
// };

// console.log(
//   "Intersection of two array ===>",
//   intersectionOfAnArray([10, 20, 30, 40, 50], [30, 40, 50, 60, 70])
// );

// Question 6 Swapping two variables without using third variable.

// let a = 20;
// let b = 30;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a,b)

// Question 7 Write a function to check if a given year is a leap year.

// function checkLeapyear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// console.log(checkLeapyear(2021));

// Question 8 Write a function to reverse a string.

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('checkingggggg'));

// Question 9 Check whether number is Prime number or not.

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(4));

// Question 10 Write a function to calculate the factorial of a number.

// function factorialOfNum(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = num; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorialOfNum(9));

// Question 11 To check wheher a string is palindrome or not.

// function isPalindrome(str) {
//   let strArr = str.split("");

//   for (let i = 0, j = strArr.length - 1; i <= j; i++) {
//     if (strArr[i] !== strArr[j]) {
//       return false;
//     }
//     j--
//   }
//   return true;
// }

// console.log(isPalindrome("nammmann"));

// Question 12 Write a function to check if two strings are anagrams of each other.

// function findAnagram(str1, str2) {
//   return (
//     str1.toLowerCase().split("").sort().join("") ===
//     str2.toLowerCase().split("").sort().join("")
//   );
// }

// console.log(findAnagram("devashish", "hHissaevd"));

// Question 13> Write a JavaScript program to reverse a given string. without built in mehods.

// function reverse(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverse("devashish"));

// Question 14> Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// function evenArray(arr) {
//   let resultArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       resultArr.push(arr[i]);
//     }
//   }
//   return resultArr;
// }

// console.log(evenArray([1, 3, 5, 22, 111, 99, 4, 7, 3, 2]));

// Question 15> Write a JavaScript program to find the largest element in a nested array.

// function flatten(arr) {
//   let flattened = [];
//   function flat(arr1) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (Array.isArray(arr1[i])) {
//         flat(arr1[i]);
//         continue;
//       }
//       flattened.push(arr1[i]);
//     }
//   }

//   flat(arr);

//   let largestElem = flattened[0];
//   for (let i = 1; i < flattened.length; i++) {
//     if (flattened[i] > largestElem) {
//       largestElem = flattened[i];
//     }
//   }

//   return largestElem;
// }

// console.log(
//   flatten([
//     1,
//     [34, 5, 6, 7, 8, [45], 5, [45]],
//     2,
//     3,
//     [2, [432, 3322, [33, 9, 4, 8888, [34, 5]]]],
//     4,
//     5,
//     6,
//   ])
// );

// Question 16> Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

// function convertToTitleCase(str) {
//   return str
//     .split(" ")
//     .map((ele) => ele[0].toUpperCase() + ele.split("").splice(1).join(""))
//     .join(" ");
// }

// console.log(convertToTitleCase("Write a JavaScript program to convert a string to title case"));

// Question 17> Find even and odd in a given array.

// function findEvenAndOdd(arr) {
//   let even = [];
//   let odd = [];

//   arr.forEach((elem) => {
//     if (elem % 2 === 0) {
//       even.push(elem);
//     } else {
//       odd.push(elem);
//     }
//   });

//   return {
//     even,
//     odd,
//   };
// }

// console.log(findEvenAndOdd([-123, 33333, 4, 5, 6, 4, 33, -4, 55, 33, 3332, 3, 4]))

// Question 18> Find Vowels in given string.

// function FindVowels(str){
//     let vowels = [];
//     const strInLowerCase = str.toLowerCase();

//     for(let char in strInLowerCase){
//         if(str[char] === 'a' || str[char] === 'e' || str[char] === 'i' || str[char] === 'o' || str[char] === 'u'){
//             if(!vowels.includes(str[char])){
//                 vowels.push(str[char])
//             }
//         }
//     }
//     return vowels;
// }

// console.log(FindVowels("DevasOOOohish Sharma"))

// Question 19> To reverse a string without using builtin methods.

// function reverseString(str) {
//   let reversedString = "";

//   for(let i = str.length -1; i >= 0; i--){
//     reversedString += str[i]
//   }
//   return reversedString
// }

// console.log(reverseString("Devashish Sharma is good boy"));

// Question 20> How to compare two arrays are equal or not.

// function isArrayEqual(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }

//     let sortedArr1 = arr1.sort((a,b) => a-b);
//     let sortedArr2 = arr2.sort((a,b) => a-b);

//     for(let i=0; i< sortedArr1.length; i++){
//         if(sortedArr1[i] !== sortedArr2[i]){
//             return false
//         }
//     }
//     return true;
// }

// console.log(isArrayEqual([5,1,2,3,4,5,4],[5,4,5,4,3,2,1]));

// Question 21> Write a program to find union of two array.

// function unionOfArray(arr1, arr2) {
//   let unionArray = [];

//   let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;

//   for (let i = 0; i < maxLength; i++) {
//     if (!unionArray.includes(arr1[i]) && typeof arr1[i] === "number") {
//       unionArray.push(arr1[i]);
//     }
//     if (!unionArray.includes(arr2[i]) && typeof arr2[i] === "number") {
//       unionArray.push(arr2[i]);
//     }
//   }
//   return unionArray;
// }

// console.log(unionOfArray([1,2,3,4,4,5,6,7], [2,3,9,5,4,3,22]));

// Question 22> Check Armstrong Number.

// function checkArmstrong(num) {
//   let temp = num;
//   let sum = 0;
//   let rem;
//   while (temp > 0) {
//     rem = temp % 10;
//     sum += rem * rem * rem;
//     temp = parseInt(temp / 10);
//   }
//   return sum === num;
// }

// console.log(
//   "lets check whether a number is armstrong or not ==>",
//   checkArmstrong(153)
// );


// Question 23: Write a function for firstRecurringCharacter.

// function firstRecurringCharacter(array) {
//     if(array.length === 0){
//         return undefined;
//     }
//     let obj = {};
    
//     for(let i=0; i < array.length; i++){
//         if(obj.hasOwnProperty(array[i])){
//             return array[i];
//         }else{
//             obj[array[i]] = true;
//         }
//     }
//     return undefined;
// };

// console.log("LETS CHECK ===>",firstRecurringCharacter([1,2,3,4,2,4]));

// 10 > 20 > 30
// class LinkedList {
//     constructor(){
//         this.head = {
//             value: 10,
//             next: null
//         };
//         this.tail = this.head;
//         this.length = 1;
//     }
     
//     append(value){
//         const nextValue = {
//             value: value,
//             next: null
//         }
//         this.tail.next = nextValue;
//         this.tail = this.tail.next;
//         this.length = this.length + 1
//     }
    
//     prepend(value){
//         let firstNode = {
//             value: value,
//             next: this.head
//         }
        
//         this.head = firstNode;
//         this.length++;
//     }

//     printList(){
//         let list = [];
//         let headNode = this.head;
//         while(headNode !== null){
//             list.push(headNode.value);
//             headNode = headNode.next;
//         }
//         console.log("List items ==>",list);
//     }
    
//     displayListStructure(){
//         console.log("THIS IS YOUR FIRST LINKED LIST ==>",this.head)
//     }

//     insert(index,value){
//         let newNode = {
//             value: value,
//             next: null
//         }

//         let currentPointer = this.head.next;
//         let currentNode = this.head;
//         let i = 0;

//         if(index === 0){
//             newNode.next = currentNode;
//             this.head = newNode;
//             this.length++;
//         }else{
//             while(i < index){
                
//                 if(i === index - 1){
//                     newNode.next = currentPointer
//                     currentNode.next = newNode;
//                     this.length++;
//                 }
//                 currentNode = currentPointer;
//                 currentPointer = currentNode.next;
//                 i++;
//             }
//         }
        
//     }

//     remove(index){

//         let currentNode = this.head;
//         let currentPointer = currentNode.next;
//         if(index ===0){
//             this.head = currentPointer;
//             this.length--;
//         }else if(index >= this.length){
//             console.log("Index does not exist");
//         }else{
//             let i = 0;
//             while(i < this.length){
//                 if(i === index-1){
//                     if(currentPointer?.next){
//                         currentNode.next = currentPointer.next;
//                     }else{
//                         console.log("currentPointer?.next ==>",currentPointer?.next,index,i,currentNode,this.length)
//                         currentNode.next = null;
//                     }
//                     this.length--;
//                     i++;
//                 }else {

//                     currentNode = currentPointer;
//                     currentPointer = currentNode.next;
//                     i++;
//                 }
//             }
//         }
//     }
// }

// const list = new LinkedList();
// list.prepend(2);
// list.append(20);
// list.append(30);
// list.prepend(5);
// list.append(40);
// list.prepend(3);
// list.insert(3,99);

// list.remove(0)
// list.printList();

// list.displayListStructure();

// console.log("Length of linked list is ==>",list.length)

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// 10 20  30  40  50

// class DoubleLinkedList{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null,
//             prev: null 
//         };
//         this.tail = this.head;
//         this.length = 1;
//     }
    
//     append(value){
//         let newNode = {
//             value: value,
//             next: null,
//             prev: (this.tail.prev === null) ? this.head : this.tail
//         }
        
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//     }
    
//     printList(){
//         console.log("YOUR FIRST DOUBLE LINKED LIST IS =>",this.head);
//     }
    
// };

// const doubleLinkedList = new DoubleLinkedList(10);
// doubleLinkedList.append(20);
// doubleLinkedList.append(30);
// doubleLinkedList.append(40);
// doubleLinkedList.append(50);
// doubleLinkedList.printList();



// stack implementation using linked list


    // Google
    // Udemy
    // Discord
    
    // Stack implementation using Linked List.
    
    // class Stack{
    //     constructor(){
    //         this.top = null;
    //         this.bottom = null;
    //         this.length = 0;
    //     }
        
    //     push(value){
    //         const node  = {
    //             value: value,
    //             next: null
    //         }
    //         if(this.bottom){
    //             this.top = node;
    //             this.top.next = this.bottom;
    //             this.bottom = this.top;
    //         }else{
    //             this.bottom = node;
    //             this.top = this.bottom;
    //         }
    //         this.length++;
    //     }
        
    //     pop(){
    //         if(this.length){
    //             if(this.length === 1){
    //             this.top.value = null;  
    //             }else{
    //             this.top = this.top.next;
    //             this.bottom = this.top;
    //             }
    //             this.length--;
    //         }else{
    //           console.log("Nothing to remove stack is already empty.")
    //         }
    //     }
        
    //     peak(){
    //         console.log("RESULT =====>",this.top.value);
    //     }
    //     isEmpty(){
    //      console.log("CHECK THAT STACK IS EMPTY OR NOT ==>",this.top.value === null)    
    //     }
        
    //     printResult(){
    //         let result = []
    //         let value = this.top.value;
    //         let refToTop = this.top;
    //         while(value){
    //             result.push(value);
    //             refToTop = refToTop?.next;
    //             value = refToTop?.value; 
    //             console.log("INSIDE LOOP ==>",result,refToTop,value)
    //         }
    //         console.log("This is my first Stack implementation using reversed linked list ==>",this.top,this.length,result);
    //     }
    // }
    
    // const firstStack = new Stack();
    // firstStack.push(10);
    // firstStack.push(20);
    // firstStack.push(30);
    // firstStack.printResult();
    // firstStack.pop();
    // firstStack.pop();
    // firstStack.pop();
    // firstStack.pop();
    // firstStack.isEmpty();
    // firstStack.peak()
    // firstStack.printResult();



    // Binary Tree

    // class NewNode{
    //     constructor(value){
    //         this.value = value;
    //         this.left = null;
    //         this.right = null;
    //     }
    // }
    
    // class BinarySearchTree{
    //     constructor(){
    //         this.root = null;
    //     }
        
    //     shiftTo(currentNodeValue, newNodeValue){
    //         if(currentNodeValue < newNodeValue){
    //             return "right";
    //         }else{
    //             return "left";
    //         }
    //     }
    //     //     9
    //     //  4     20
    //     //1  6  15  170
        
    //     lookup(value){
    //         if(this.root){
    //             let currentNode = this.root;
    //             while(currentNode){
    //                 if(currentNode.value === value){
    //                     return currentNode;
    //                 }
    //               const shiftToward = this.shiftTo(currentNode.value,value);
    //               const isNodeExist = currentNode[shiftToward];
    //               if(isNodeExist){
    //                   if(isNodeExist.value === value){
    //                       return isNodeExist;
    //                   }else{
    //                      currentNode = isNodeExist;   
    //                   }
    //               }else{
    //                  return false
    //               }
    //             }
                
    //         }else{
    //             if(this.root.value === value){
    //                 return this.root
    //             }else{
    //                 return false;
    //             }
    //         }
    //     }
        
    //     // left and right node comparision then update node
    //     insert(value){
    //         let newNode = new NewNode(value);
    //         if(this.root){
    //           let currentNode = this.root;
    //           let isNodeUpdate = false;
              
    //           while(!isNodeUpdate){
    //               const shiftToward = this.shiftTo(currentNode.value,newNode.value);
    //               const isNodeExist = currentNode[shiftToward];
    //               if(isNodeExist){
    //                   currentNode = isNodeExist;
    //               }else{
    //                  currentNode[shiftToward] = newNode;
    //                  isNodeUpdate = true;
    //               }
    //           }
    //         }else{
    //             this.root = newNode;
    //         }
            
    //     }
    // }
    
    
    
    // const tree = new BinarySearchTree();
    // tree.insert(9);
    // tree.insert(4);
    // tree.insert(6);
    // tree.insert(20);
    // tree.insert(170);
    // tree.insert(15);
    // tree.insert(1);
    // tree.insert(166);
    // tree.insert(160);
    // tree.insert(163);
    
    // tree.remove(170);
    // console.log(traverse(tree.root));
    // console.log(tree.lookup(166));
    //     9
    //  4     20
    //1  6  15  170
    
    // function traverse(node) {
    //   const tree = { value: node.value };
    //   tree.left = node.left === null ? null : traverse(node.left);
    //   tree.right = node.right === null ? null : traverse(node.right);
    //   return tree;
    // }


// * !important: You can also try to implement Bubble and Selection sort, because of its simple implementation not implemented here.    

// *     Implementation of insertion sort algorithm.

// function insertionSort(array){
//     const length = array.length;
    
//     for(let i=0; i< length; i++){
//         if(array[i] > array[i+1]){
//             //swap logic
//             let temp = array[i+1];
//             for(let j = i+1; j > 0; j--){
//                 if(array[j] > array[j-1]){
//                     break;
//                 }else{
//                     array[j] = array[j-1];
//                     array[j-1] = temp;
//                     temp = array[j-1];
//                 }
//             }
//         }
//         console.log("INSIDE THE LOOP ==>",array,i,length);
//     }
//     return array;
// };

// console.log("OUTSIDE THE LOOP RESULT ===>",insertionSort([3,9,4,8,2,5,6,7,1]));


