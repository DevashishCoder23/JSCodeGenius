// Question 1> Implement a function to find the nth Fibonacci number.
// #ref 0,1,1,2,3,5,8,13,21,34,55

// function Fibonacci(num){
//     if(num ===0 || num === 1){
//         return num;
//     }
//     let prev = 0;
//     let curr = 1;
//     let hold;
//     let result;
//     for(let i=2; i<= num; i++){
//        hold= prev;
//        prev = curr;
//        curr = hold + curr;
//        result = curr;
//     }
//     return result;
// }

// console.log(Fibonacci(8))

// Question 2> Curring convert below function to curring.

// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(12, 34, 23));

// function sum(a){
//     return (b) => {
//         return (c) => {
//             return a+b+c;
//         }
//     }
// }

// console.log(sum(12)(23)(44));

// Infinite curring.

// const sum = (a) => {
//   return (b) => {
//     if (!b) {
//       return a;
//     }
//     return sum(a + b);
//   };
// };

// console.log(sum(2)(3)());

// Question 3> Implement a function to reverse words in a sentence.

// function reverseWordFromSentence(para) {
//   return para.split(" ").reverse().join(" ");
// }

// console.log(
//   reverseWordFromSentence("Implement a function to reverse words in a sentence")
// );

// Question 4> Shuffle an array.

// function ShuffleAnArray(arr){
//  return arr.sort((a,b) => Math.random() - 0.5);
// }

// console.log(ShuffleAnArray([12,44,3,32,55,23,55,77]))

// Question 5> Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.
// function debounce(fn, delay) {
//   let timeOutId;

//   return function (...args) {
//     clearTimeout(timeOutId);
//     timeOutId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// const func = (...args) => {
//   console.log("lets check debouncingggggg ", args);
// };

// const finalFn = debounce(func, 1000);
// finalFn();
// finalFn();
// finalFn(1, 2, 3, 4, 5);
// finalFn(4, 3, 23, 5);
// finalFn(2, 9, 5, 43, 4, 2);

// Question 6> Write a program to find third non-repeating char in string.

// function thirdNonRepeatingChar(str) {
//   let obj = {};
//   let arr = str.toLowerCase().split("");

//   arr.forEach((ele) => {
//     if (Object.keys(obj).includes(ele)) {
//       obj[ele].push(ele);
//     } else {
//       obj[ele] = [ele];
//     }
//   });

//   let elementFound = 0;
//   for (let key in obj) {
//     if (obj[key].length === 1 && key !== " ") {
//       elementFound++;
//     }
//     if (elementFound === 3) {
//       return key;
//     }
//   }
//   return "not found";
// }

// console.log(thirdNonRepeatingChar("Devashriidsh Sharma"));

// Question 7> How to find duplicate elements n an array.

// function findDuplicateElements(arr) {
//   let duplicateElem = [];
//   let arrWithoutDuplicate = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!arrWithoutDuplicate.includes(arr[i])) {
//       arrWithoutDuplicate.push(arr[i]);
//     } else {
//       duplicateElem.push(arr[i]);
//     }
//   }
//   return duplicateElem;
// }

// console.log(findDuplicateElements([1, 3, 4, 5, 6, 4, 33, 4, 55, 33, 2, 3, 4]));

// Question 8> How to find min and max value in an array.

// function findMinMaxValue(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }

//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return {
//     min,
//     max,
//   };
// }

// console.log(findMinMaxValue([-123, 33333, 4, 5, 6, 4, 33, -4, 55, 33, 3332, 3, 4]));

// Question 9> how to find second largest value and remove largest value from an array.

// function findSecondLargestAndRemoveLargest(arr) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   console.log("lets check sorted Array ==>", sortedArr, sortedArr.slice(0, -1));
//   return {
//     secondlargest: sortedArr.slice(0, -1).pop(),
//     newArr: sortedArr.slice(0, -1),
//   };
// }

// console.log(
//   findSecondLargestAndRemoveLargest([
//     -123, 33333, 4, 5, 6, 4, 33, -4, 55, 33, 3332, 3, 4,
//   ])
// );

// Question 10> How to find missing number in a given integer array of 1 to 10.

// function findMissingInteger(arr) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let missingInt = [];

//   for (let i = 1; i <= 10; i++) {
//     if (!sortedArr.find((ele) => ele === i)) {
//       missingInt.push(i);
//     }
//   }
//   return missingInt;
// }

// console.log(findMissingInteger([1, 2, 4, 6, 7, 8, 9]));







//  *************************************** Data Structure And Algorithm ***************************************************  // 

// Question 11> Write a function to reverse a string with outusing built in Method.

// O(n) Linear Time solution
// const reverseString = (inputStr) => {

//     if(!inputStr || inputStr.length < 2 || typeof inputStr !== "string"){
//         return false;
//     }

//     let reverseStr = "";
//     for(let i = 0; i < inputStr.length; i++){
//         reverseStr = reverseStr + inputStr[inputStr.length - (i +1)];
//     }
//     return reverseStr;
// }

// console.log("LETS CHECK RESULT =========>",reverseString("My name is Devashish Sharma"));

 
// Question 12> Write a function to merge two sorted array.

// const mergeSortedArr = (array1,array2) => {
//     if(!array1 || array1.length === 0){
//         return array2;
//     }
    
//     if(!array2  || array2.length === 0){
//         return array1;
//     }
    
//     const mergedSortedArr = [];
    
//     let firstArrayItem = array1[0];
//     let secondArrayItem = array2[0];
//     let i = 1;
//     let j = 1;
    
//     while(firstArrayItem || secondArrayItem){
//         if(!secondArrayItem || (firstArrayItem < secondArrayItem)){
//             mergedSortedArr.push(firstArrayItem);
//             firstArrayItem = array1[i];
//             i++;
//         }else{
//             mergedSortedArr.push(secondArrayItem);
//             secondArrayItem = array2[j];
//             j++;
//         }
//     }
//     return mergedSortedArr;
//  }
 
//  console.log("RESULT ===>>",mergeSortedArr([0,3,4,31],[4,6,30]));

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
//     //  7     20
//     //1   6  15  170
//     // 5
//    //4 
//     remove(value){
//         if(this.root){
//             let previousNode = null;
//             let previousNodeDirection = null;
//             let currentNode = this.root;
            
//             while(currentNode){
//                 if(currentNode.value === value){
//                     if(currentNode.right){
//                      let firstRightNode = currentNode.right;
//                      if(firstRightNode.left === null){
//                         firstRightNode.left = currentNode.left;
//                         previousNode[previousNodeDirection] = firstRightNode;
//                      }else{
//                          let RightNodeLeftPointerReference = firstRightNode.left;
//                          while(RightNodeLeftPointerReference.left){
//                              RightNodeLeftPointerReference = RightNodeLeftPointerReference.left;
//                          }
//                          RightNodeLeftPointerReference.right = currentNode.right;
//                          RightNodeLeftPointerReference.left = currentNode.left;
//                          RightNodeLeftPointerReference
//                         previousNode[previousNodeDirection] = RightNodeLeftPointerReference;
//                      }
//                     }else if(currentNode.left){
//                       previousNode[previousNodeDirection] = currentNode.left;
//                     }else{
//                         if(previousNodeDirection){
//                          previousNode[previousNodeDirection] = null;
//                         }else{
//                          this.root = null    
//                         }
//                     }
//                     // Need changes here
//                     return currentNode;
//                 }
                
                
                
//               const shiftToward = this.shiftTo(currentNode.value,value);
//               const isNodeExist = currentNode[shiftToward];
              
//               if(isNodeExist){
//                   previousNodeDirection = shiftToward;
//                   previousNode = currentNode;
//                   currentNode = isNodeExist;
//               }else{
//                               console.log("There is no node with this value. Nothing to remove.");
//                  return "There is no node with this value. Nothing to remove."
//               }
//             }
            
//         }else{
//             console.log("Nothing to remove, As Root node does not exist.");
//             return "Nothing to remove, As Root node does not exist.";
//         }
//     }
    
    
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
// tree.remove(1);
// tree.remove(6);
// tree.remove(15);
// tree.remove(170);
// tree.remove(4);
// tree.remove(20);
// tree.remove(9);
// tree.insert(166);
// tree.insert(160);
// tree.insert(163);
// console.log(tree)
// tree.remove(170);
// console.log(JSON.stringify(traverse(tree?.root)));
// console.log(tree.lookup(166));
//     9
//  4     20
//1  6  15  170

// function traverse(node) {
//   const tree = { value: node?.value };
//   tree.left = node?.left === null ? null : traverse(node?.left);
//   tree.right = node?.right === null ? null : traverse(node?.right);
//   return tree;
// }


// Graph implementation => undirected Graph > unweighted Graph > implementation through > adjacement list > using hash table

// adjacentlist, edges, adjacent matrix,
// class Graph{
//     constructor(){
//        this.numberOfNodes = 0;
//        this.adjacentList = {
//        };
//     }
    
//     addVertex(node){
//         if(!this.adjacentList.hasOwnProperty(node)){
//             this.adjacentList[node] =  [];
//             this.numberOfNodes++;
//         }
//     }
    
//     addEdge(node1,node2){
//         if(!this.adjacentList.hasOwnProperty(node1)){
//             this.addVertex(node1);
//         }
//             this.adjacentList[node1] = [ ...this.adjacentList[node1], node2]   
        
//         if(!this.adjacentList.hasOwnProperty(node2)){
//             this.addVertex(node2);
//         }
//             this.adjacentList[node2] = [ ...this.adjacentList[node2], node1]
//     }
    
//     showConnections(){
//         console.log(this.adjacentList)
//         let output = "";
//         let obj = this.adjacentList;
//         let line = ""
//         for(let key in obj){
//              line += key + "-->";
//              obj[key].forEach((item) => {
//                  line += item + " ";
//              });
//              output += line + "\n";
//              line = "";
//         }
//         console.log(output)
//     }
    
// };

// const myGraph = new Graph();
//  myGraph.addVertex('0');
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3', '1'); 
// myGraph.addEdge('3', '4'); 
// myGraph.addEdge('4', '2'); 
// myGraph.addEdge('4', '5'); 
// myGraph.addEdge('1', '2'); 
// myGraph.addEdge('1', '0'); 
// myGraph.addEdge('0', '2'); 
// myGraph.addEdge('6', '5');
// myGraph.showConnections();
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5

// Time complexcity 2^n
// function fibonacciSeriesRecursive(n){ 
//     if(n < 2){
//         return n;
//     }
    
//     return fibonacciSeriesRecursive(n - 1) + fibonacciSeriesRecursive(n - 2);
// };

// console.log("RESULT ==>",fibonacciSeriesRecursive(44))

// Time Complexity => o(n)
// function fibonacciSeriesItratevily(n){
//     let arr = [0,1];
//     for(let i=2; i<=n; i++){
//         arr.push(arr[i-1] + arr[i-2]);
//     }
//     return arr[n];
// };
// console.log("RESULT ==>",fibonacciSeriesItratevily(4));

// function reverseStr(str){
//     let strArr = str.split("");
//     const newArr = [];
//     // here we are using closure!
//     function reverseArr(arr){
//         if(arr.length > 0){
//           newArr.push(arr.pop())
//           reverseArr(arr);
//         }
//         return;
//     };
    
//     reverseArr(strArr);
//     return newArr.join("");
// };

// console.log("RESULT ==>",reverseStr("Devashish sharma"));

// function reverseStrRecursively(str){
//     if(str === ""){
//         return "";
//     }
    
//     return reverseStrRecursively(str.substr(1)) + str.charAt(0);
// };

// console.log("RESULT ==>",reverseStrRecursively("Akshay Thakur"));