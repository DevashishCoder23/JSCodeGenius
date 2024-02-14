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
