// Question 1> Write a function that flattens a nested array.

// function flattenArray(arr) {
//   let flattened = [];

//   function addingElements(arr1) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (Array.isArray(arr1[i])) {
//         addingElements(arr1[i]);
//       } else {
//         flattened.push(arr1[i]);
//       }
//     }
//   }

//   addingElements(arr);
//   return flattened
// }

// console.log(flattenArray([1, [2, 3, [4, 5]], 6, [7, 8]]));

// Question 2> Implement a function to perform a binary search on a sorted array.

// function binarySearch(arr, eleToSearch) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.round((low + high) / 2);
//     if (arr[mid] === eleToSearch) {
//       return mid;
//     } else if (arr[mid] < eleToSearch) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([2, 4, 6, 7, 9, 10, 56, 77, 88, 99], 999));


// Merge Sort Program. !important this is my solution completely for better and optimized solution watch DSA course
// function mergeSort(array){
//     if(array.length === 1){
//         return array;
        
//     }
//     const length = array.length;
//     const midPoint = Math.floor(length / 2)
//     const left = array.slice(0,midPoint);
//     const right = array.slice(midPoint,length);
//     console.log("INSIDE 1 =>",left,right,length,midPoint);
//     debugger
//     const result = merge(mergeSort(left),mergeSort(right));
//     console.log("INSIDE RESULT 2 =>",result)
    
//     return result;
// };
//  [3,9,4,8,2,5,6,7,1] and [6,5,3,1,8,7,2,4]
// function merge(left, right){
//     // opt
//     const leftLength = left.length;
//     const rightLength = right.length;
//     // const greaterLength =  leftLength > rightLength ? leftLength : rightLength;
//     if(leftLength === 1 && rightLength === 1){
//         if(left[0] > right[0]){
//             console.log("INSIDE 3.1 =>",[right[0],left[0]],right,left)
//           return [right[0],left[0]];  
//         }else{
//            console.log("INSIDE 3.2 =>",[left[0],right[0]],right,left)
//           return [left[0],right[0]]; 
//         }
//     }
//   let newArr = [];
//     console.log("INSIDE 4.1 =>",left,right)
//   for(let i = 0; ((left.length !== 0) || (right.length !== 0)); i++){
//       console.log("INSIDE 4.1111 =>",left,right)
//       if(left.length > 0 && right.length > 0){
//                 console.log("INSIDE 4.1111222 =>",left,right)
//           if(left[0] < right[0] || left[0] === right[0]){
//               newArr.push(left.shift());
//           }else{
//               newArr.push(right.shift());
//           } 
//       }else if(left.length > 0 || right.length > 0){
//          const containElements = left.length === 0 ? right.shift() : left.shift();
//          newArr = [...newArr, containElements];
//         console.log("INSIDE 4.1111333 =>",newArr)
//       }
//       console.log("INSIDE 4.1111444 =>",left,right)
//     //   else{
//     //       break;
//     //   }
//   }
//   console.log("INSIDE 4.2 =>",newArr)
//   return newArr;
// }

// console.log("RESULT ==>",mergeSort([3,9,4,8,2,5,6,7,1]));